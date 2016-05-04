
local string_byte = string.byte
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

-- asset
local SceneAsset = cc.import(".assets.SceneAsset")

-- component
local CanvasComponent = cc.import(".components.CanvasComponent")
local SpriteComponent = cc.import(".components.SpriteComponent")

-- set properties
local _setPropMethods = {}

_setPropMethods["_anchorPoint"] = function(obj, v)
    obj:setAnchorPoint(cc.p(v.x, v.y))
end

_setPropMethods["_color"] = function(obj, v)
    obj:setColor(cc.color(v.r, v.g, v.b, v.a))
end

_setPropMethods["_contentSize"] = function(obj, v)
    -- FIXME
    -- obj:setContentSize(cc.size(v.width, v.height))
end

_setPropMethods["_position"] = function(obj, v)
    obj:setPosition(v.x, v.y)
end

local _directProps = {
    ["_cascadeOpacityEnabled"] = "setCascadeOpacityEnabled",
    ["_globalZOrder"]          = "setGlobalZOrder",
    ["_localZOrder"]           = "setLocalZOrder",
    ["_opacity"]               = "setOpacity",
    ["_opacityModifyRGB"]      = "setOpacityModifyRGB",
    ["_scaleX"]                = "setScaleX",
    ["_scaleY"]                = "setScaleY",
    ["_skewX"]                 = "setSkewX",
    ["_skewY"]                 = "setSkewY",
    ["_tag"]                   = "setTag",
    ["_name"]                  = "setName",
}

for name, mname in pairs(_directProps) do
    _setPropMethods[name] = function(obj, v)
        obj[mname](obj, v)
    end
end

local _ignoreProps = {}
local _ignore = {
    "_children",
    "_parent",
    -- "_reorderChildDirty",
    -- "_rotationX",
    -- "_rotationY",
    -- "content",
    -- "_spriteFrame",
}

local _copyProps = {}
local _copy = {
    "_id",
    "_components",
    "__type__",
    "_type_",
    "_objFlags",
    "_enabled",
    "node",
}

local function _makeHash(dst, src)
    for _, name in ipairs(src) do
        dst[name] = true
    end
end

_makeHash(_ignoreProps, _ignore)
_makeHash(_copyProps, _copy)

local function _setProps(obj, props, objtype)
    cc.printinfo("[_setProps] objtype", objtype)
    for name, v in pairs(props) do
        while true do
            if _ignoreProps[name] then break end
            if _copyProps[name] then
                obj[name] = v
                break
            end

            local m = _setPropMethods[name]
            if m then
                m(obj, v)
            else
                cc.printwarn("    not support prop '%s'", name)
            end

            break
        end
    end
    return obj
end

-- type mapping

local factory = {}

factory["cc.SceneAsset"] = function(aval)
    return _setProps(SceneAsset:new(aval), aval, "cc.SceneAsset")
end

factory["cc.Scene"] = function(aval)
    return _setProps(cc.Scene:create(), aval, "cc.Scene")
end

factory["cc.Node"] = function(aval)
    return _setProps(cc.Node:create(), aval, "cc.Node")
end

factory["cc.Sprite"] = function(aval, reader)
    local uuid = aval["_spriteFrame"]["__uuid__"]
    local asset = reader.assetsdb[uuid]
    local spriteFrame = reader:createObject(asset)
    local sprite = cc.Sprite:createWithSpriteFrame(spriteFrame)
    _setProps(sprite, aval, "cc.Sprite")
    return SpriteComponent:new(sprite)
end

factory["cc.SpriteFrame"] = function(aval, reader)
    local c = aval["content"]
    return cc.SpriteFrame:create(
        reader.filesdb[c.texture],
        ccrect(c.rect[1], c.rect[2], c.rect[3], c.rect[4]),
        c.rotated ~= 0,
        ccp(c.offset[1], c.offset[2]),
        ccsize(c.originalSize[1], c.originalSize[2]))
end

factory["cc.Canvas"] = function(aval)
    return CanvasComponent:new(aval)
end

-- connector

local connector = {}

connector["cc.SceneAsset"] = function(objs, refs, current)
    local obj = objs[current]
    local id = refs[current]["scene"]["__id__"]
    obj.scene = objs[id]
    obj.__children = {id}
end

connector["cc.Canvas"] = function(objs, refs, current)
    local obj = objs[current]
    local id = refs[current]["node"]["__id__"]
    obj.node = objs[id]
    obj.__children = {id}
end

connector["cc.Node"] = function(objs, refs, current)
    local obj = objs[current]
    local _children = refs[current]["_children"]
    if not _children then return end

    obj.__children = {}
    local __children = obj.__children
    for _, child in ipairs(_children) do
        local id = child["__id__"]
        __children[#__children + 1] = id
        obj:addChild(objs[id])
        cc.printinfo("[connector] %s [%d] : addChild %s [%d]", obj.__type__, current, refs[id].__type__, id)
    end
end

connector["cc.Scene"] = connector["cc.Node"]
connector["cc.Sprite"] = connector["cc.Node"]

-- return module
local _M = {
    factory   = factory,
    connector = connector,
}

return _M
