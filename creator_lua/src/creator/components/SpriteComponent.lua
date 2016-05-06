
local ComponentBase = cc.import(".ComponentBase")
local SpriteComponent = cc.class("cc.Sprite", ComponentBase)

function SpriteComponent:ctor(sprite)
    SpriteComponent.super.ctor(self)
    self.node = sprite
end

function SpriteComponent:bind(target)
    target:addChild(self.node)
end

return SpriteComponent
