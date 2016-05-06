
local string_byte = string.byte
local table_makeweak = table.makeweak
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

local SetProperty = cc.import(".SetProperty")
local _setProps = SetProperty.setProps
local _setSpriteProps = SetProperty.setSpriteProps

-- asset
local SceneAsset = cc.import("..assets.SceneAsset")

-- component
local CanvasComponent = cc.import("..components.CanvasComponent")
local SpriteComponent = cc.import("..components.SpriteComponent")
local LabelComponent  = cc.import("..components.LabelComponent")
local WidgetComponent = cc.import("..components.WidgetComponent")

local Factory = {}

Factory["cc.SceneAsset"] = function(aval, id)
    return _setProps(SceneAsset.new(aval), aval, "cc.SceneAsset", id)
end

Factory["cc.Scene"] = function(aval, id)
    return _setProps(cc.Scene:create(), aval, "cc.Scene", id)
end

Factory["cc.Node"] = function(aval, id, refs, reader)
    -- check sprite
    if cc.CREATOR_DISABLE_NODE_WRAPPER and aval._components then
        for _, c in ipairs(aval._components) do
            local cid = c.__id__
            if refs[cid].__type__ == "cc.Sprite" then
                -- set flag
                refs[cid].__created__ = true
                -- this node should as a Sprite
                local sprite = Factory["cc.Sprite"](refs[cid], cid, refs, reader)
                _setProps(sprite, aval, "cc.Node -> cc.Sprite", id)
                sprite.__type__ = "cc.Sprite"
                return sprite
            end
        end
    end

    return _setProps(cc.Node:create(), aval, "cc.Node", id, {})
end

Factory["cc.Sprite"] = function(aval, id, refs, reader)
    local uuid = aval["_spriteFrame"]["__uuid__"]
    local asset = reader.assetsdb[uuid]
    local spriteFrame = reader:createObject(asset)
    local sprite = cc.Sprite:createWithSpriteFrame(spriteFrame)
    _setProps(sprite, aval, "cc.Sprite", id)

    if cc.CREATOR_DISABLE_NODE_WRAPPER then
        return sprite
    else
        local naval = refs[aval.node.__id__]
        sprite:setAnchorPoint(naval._anchorPoint)
        sprite:setColor(naval._color)
        return SpriteComponent.new(sprite)
    end
end

Factory["cc.SpriteFrame"] = function(aval, id, refs, reader)
    local c = aval["content"]
    return cc.SpriteFrame:create(
        reader.filesdb[c.texture],
        -- x, y, width, height
        ccrect(c.rect[1], c.rect[2], c.rect[3], c.rect[4]),
        c.rotated ~= 0,
        ccp(c.offset[1], c.offset[2]),
        ccsize(c.originalSize[1], c.originalSize[2]))
end

Factory["cc.Label"] = function(aval, id, refs, reader)
    local label = cc.Label:createWithSystemFont(aval["_N$string"], "sans", aval["_fontSize"])
    _setProps(label, aval, "cc.Label", id)

    if cc.CREATOR_DISABLE_NODE_WRAPPER then
        return label
    else
        local naval = refs[aval.node.__id__]
        label:setAnchorPoint(naval._anchorPoint)
        label:setColor(naval._color)
        return LabelComponent.new(label)
    end
end

Factory["cc.Canvas"] = function(aval)
    return CanvasComponent.new(aval)
end

Factory["cc.Widget"] = function(aval)
    return WidgetComponent.new(aval)
end

return Factory
