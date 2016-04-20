
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

local _ignoredProps = {}
local _ignored = {
    "__type__",
    "_children",
    "_components",
    "_id",
    "_objFlags",
    "_parent",
    "_reorderChildDirty",
    "_rotationX",
    "_rotationY",
    "content",
    "node",
    "_spriteFrame",
}
for _, name in ipairs(_ignored) do
    _ignoredProps[name] = true
end

local function _setProps(obj, props, objtype)
    for name, v in pairs(props) do
        if not _ignoredProps[name] then
            local m = _setPropMethods[name]
            if m then
                m(obj, v)
            else
                cc.printwarn("ReaderFilters.setProps - not support prop '%s' for '%s'", name, objtype)
            end
        end
    end
    return obj
end

-- type mapping

local factory = {}

factory["cc.SceneAsset"] = function(aval)
    return SceneAsset:new(aval)
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

connector["cc.SceneAsset"] = function(obj, index, objs, refs)
    local aval = refs[index]
    obj.scene = objs[aval["scene"]["__id__"]]
end

connector["cc.Canvas"] = function(obj, index, objs, refs)
    obj.node = objs[refs[index]["node"]["__id__"]]
end

connector["cc.Node"] = function(obj, index, objs, refs)
    local _children = refs[index]["_children"]
    if not _children then return end
    for _, child in ipairs(_children) do
        local childobj = objs[child["__id__"]]
        obj:addChild(childobj)
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
