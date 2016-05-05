
local string_byte = string.byte
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

-- asset
local SceneAsset = cc.import(".assets.SceneAsset")

-- component
local CanvasComponent = cc.import(".components.CanvasComponent")
local SpriteComponent = cc.import(".components.SpriteComponent")
local WidgetComponent = cc.import(".components.WidgetComponent")

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

local function _setProps(obj, props, objtype, id)
    cc.printinfo("[_setProps] %s[%s]", objtype, tostring(id))
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
                -- cc.printwarn("    not support prop '%s'", name)
            end

            break
        end
    end
    return obj
end

-- type mapping

local factory = {}

factory["cc.SceneAsset"] = function(aval, id)
    return _setProps(SceneAsset:new(aval), aval, "cc.SceneAsset", id)
end

factory["cc.Scene"] = function(aval, id)
    return _setProps(cc.Scene:create(), aval, "cc.Scene", id)
end

factory["cc.Node"] = function(aval, id, refs, reader)
    -- check sprite
    local _components = aval._components
    if _components then
        for _, c in ipairs(_components) do
            local cid = c.__id__
            if refs[cid].__type__ == "cc.Sprite" then
                -- set flag
                refs[cid].__created__ = true
                -- this node should as a Sprite
                local sprite = factory["cc.Sprite"](refs[cid], cid, refs, reader)
                _setProps(sprite, aval, "cc.Node -> cc.Sprite", id)
                sprite.__type__ = "cc.Node -> cc.Sprite"
                return sprite
            end
        end
    end

    return _setProps(cc.Node:create(), aval, "cc.Node", id)
end

factory["cc.Sprite"] = function(aval, id, refs, reader)
    local uuid = aval["_spriteFrame"]["__uuid__"]
    local asset = reader.assetsdb[uuid]
    local spriteFrame = reader:createObject(asset)
    local sprite = cc.Sprite:createWithSpriteFrame(spriteFrame)
    return _setProps(sprite, aval, "cc.Sprite", id)
end

factory["cc.SpriteFrame"] = function(aval, id, refs, reader)
    local c = aval["content"]
    return cc.SpriteFrame:create(
        reader.filesdb[c.texture],
        -- x, y, width, height
        ccrect(c.rect[1], c.rect[2], c.rect[3], c.rect[4]),
        c.rotated ~= 0,
        ccp(c.offset[1], c.offset[2]),
        ccsize(c.originalSize[1], c.originalSize[2]))
end

factory["cc.Canvas"] = function(aval)
    return CanvasComponent:new(aval)
end

factory["cc.Widget"] = function(aval)
    return WidgetComponent:new(aval)
end

-- connector

local connector = {}

connector["cc.SceneAsset"] = function(objs, current, refs)
    local obj = objs[current]
    local id = refs[current]["scene"]["__id__"]
    obj.scene = objs[id]
    obj.children = {objs[id]}
end

connector["cc.Canvas"] = function(objs, current, refs)
    local obj = objs[current]
    local id = refs[current]["node"]["__id__"]
    obj.node = objs[id]
end

connector["cc.Widget"] = function(objs, current, refs)
    local obj = objs[current]
    local id = refs[current]["node"]["__id__"]
    obj.node = objs[id]
end

connector["cc.Node"] = function(objs, current, refs)
    local obj = objs[current]
    local _children = refs[current]["_children"]
    if not _children then return end

    obj.children = {}
    local children = obj.children
    for _, child in ipairs(_children) do
        local id = child["__id__"]
        cc.printinfo("[connector] %s [%d] : addChild %s [%d]", obj.__type__, current, refs[id].__type__, id)

        obj:addChild(objs[id])
        children[#children + 1] = objs[id]
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
