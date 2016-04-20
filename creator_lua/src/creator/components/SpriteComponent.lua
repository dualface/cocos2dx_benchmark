
local ComponentBase = cc.import(".ComponentBase")
local SpriteComponent = cc.class("cc.Sprite", ComponentBase)

function SpriteComponent:ctor(sprite)
    SpriteComponent.super.ctor(self)
    self.sprite = sprite
end

function SpriteComponent:bind(target)
    target:addChild(self.sprite)
end

return SpriteComponent
