
local SetProperty = {}

-- set properties
local _call = {}

local _direct = {
    ["_anchorPoint"]           = "setAnchorPoint",
    ["_cascadeOpacityEnabled"] = "setCascadeOpacityEnabled",
    ["_color"]                 = "setColor",
    ["_enableWrapText"]        = "enableWrap",
    ["_globalZOrder"]          = "setGlobalZOrder",
    ["_localZOrder"]           = "setLocalZOrder",
    ["_opacity"]               = "setOpacity",
    ["_opacityModifyRGB"]      = "setOpacityModifyRGB",
    ["_position"]              = "setPosition",
    ["_scaleX"]                = "setScaleX",
    ["_scaleY"]                = "setScaleY",
    ["_skewX"]                 = "setSkewX",
    ["_skewY"]                 = "setSkewY",
    ["_tag"]                   = "setTag",
}

local _copy = {
    ["__type__"]     = "__type",
    ["node"]         = "__node",
    ["_contentSize"] = "contentSize",
    ["_enabled"]     = "enabled",
    ["_name"]        = "name",
}

function SetProperty.set(obj, props)
    for name, v in pairs(props) do
        local key = _direct[name]
        if key and obj[key] then
            obj[key](obj, v)
        end
        if _copy[name] then
            obj[_copy[name]] = v
        end
    end
    return obj
end

return SetProperty
