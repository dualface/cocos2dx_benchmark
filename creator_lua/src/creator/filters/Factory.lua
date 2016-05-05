
local string_byte = string.byte
local table_makeweak = table.makeweak
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

local _setProps = cc.import(".SetProperty").setProps

-- asset
local SceneAsset = cc.import("..assets.SceneAsset")

-- component
local CanvasComponent = cc.import("..components.CanvasComponent")
local SpriteComponent = cc.import("..components.SpriteComponent")
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
    local _components = aval._components
    if _components then
        for _, c in ipairs(_components) do
            local cid = c.__id__
            if refs[cid].__type__ == "cc.Sprite" then
                -- set flag
                refs[cid].__created__ = true
                -- this node should as a Sprite
                local sprite = Factory["cc.Sprite"](refs[cid], cid, refs, reader)
                _setProps(sprite, aval, "cc.Node -> cc.Sprite", id)
                sprite.__type__ = "cc.Node -> cc.Sprite"
                return sprite
            end
        end
    end

    return _setProps(cc.Node:create(), aval, "cc.Node", id)
end

Factory["cc.Sprite"] = function(aval, id, refs, reader)
    local uuid = aval["_spriteFrame"]["__uuid__"]
    local asset = reader.assetsdb[uuid]
    local spriteFrame = reader:createObject(asset)
    local sprite = cc.Sprite:createWithSpriteFrame(spriteFrame)
    return _setProps(sprite, aval, "cc.Sprite", id)
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

Factory["cc.Canvas"] = function(aval)
    return CanvasComponent.new(aval)
end

Factory["cc.Widget"] = function(aval)
    return WidgetComponent.new(aval)
end

return Factory
