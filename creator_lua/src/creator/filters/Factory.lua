
local string_byte = string.byte
local table_makeweak = table.makeweak
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

local SetProperty = cc.import(".SetProperty")
local _set = SetProperty.set

-- asset
local SceneAsset = cc.import("..assets.SceneAsset")

-- component
local CanvasComponent    = cc.import("..components.CanvasComponent")
local SpriteComponent    = cc.import("..components.SpriteComponent")
local LabelComponent     = cc.import("..components.LabelComponent")
local AnimationComponent = cc.import("..components.AnimationComponent")
local WidgetComponent    = cc.import("..components.WidgetComponent")

local Factory = {}

Factory["cc.SceneAsset"] = function(asset)
    return _set(SceneAsset.new(asset), asset)
end

Factory["cc.Scene"] = function(asset)
    return _set(cc.Scene:create(), asset)
end

Factory["cc.Node"] = function(asset)
    return _set(cc.Node:create(), asset)
end

Factory["cc.Sprite"] = function(asset, assets)
    local uuid = asset["_spriteFrame"]["__uuid__"]
    local spriteFrameAsset = assets:getAsset(uuid)
    local spriteFrame = assets:_createObject(spriteFrameAsset)
    local sprite = cc.Sprite:createWithSpriteFrame(spriteFrame)
    _set(sprite, asset, "cc.Sprite")
    return SpriteComponent.new(sprite)
end

Factory["cc.SpriteFrame"] = function(asset, assets)
    local content = asset["content"]
    local file = assets:getFile(content.texture)
    local rect = ccrect(content.rect[1], content.rect[2],
                        content.rect[3], content.rect[4])
    local rotated = content.rotated ~= 0
    local offset = ccp(content.offset[1], content.offset[2])
    local size = ccsize(content.originalSize[1], content.originalSize[2])
    return cc.SpriteFrame:create(file, rect, rotated, offset, size)
end

Factory["cc.Label"] = function(asset)
    local text = asset["_N$string"]
    local fontsize = asset["_fontSize"]
    local label = cc.Label:createWithSystemFont(text, "sans", fontsize)
    _set(label, asset, "cc.Label")
    return LabelComponent.new(label)
end

Factory["cc.Animation"] = function(asset, assets)
    return AnimationComponent.new(asset, assets)
end

Factory["cc.Canvas"] = function(asset)
    return CanvasComponent.new(asset)
end

Factory["cc.Widget"] = function(asset)
    return WidgetComponent.new(asset)
end

return Factory
