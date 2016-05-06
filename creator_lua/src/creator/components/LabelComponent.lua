
local ComponentBase = cc.import(".ComponentBase")
local LabelComponent = cc.class("cc.Label", ComponentBase)

function LabelComponent:ctor(label)
    LabelComponent.super.ctor(self)
    self.node = label
end

function LabelComponent:bind(target)
    target:addChild(self.node)
end

return LabelComponent
