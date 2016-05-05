
local SetProperty = {}

-- set properties
local _setPropMethods = {}

_setPropMethods["_anchorPoint"] = function(obj, v)
    obj:setAnchorPoint(cc.p(v.x, v.y))
end

_setPropMethods["_color"] = function(obj, v)
    obj:setColor(cc.color(v.r, v.g, v.b, v.a))
end

_setPropMethods["_contentSize"] = function(obj, v)
    obj.contentSize = {width = v.width, height = v.height}
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

function SetProperty.setProps(obj, props, objtype, id)
    -- cc.printinfo("[_setProps] %s[%s]", objtype, tostring(id))
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

return SetProperty
