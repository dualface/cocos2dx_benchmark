
local ComponentBase = cc.import(".ComponentBase")
local LabelComponent = cc.class("cc.Label", ComponentBase)

function LabelComponent:ctor(label)
    LabelComponent.super.ctor(self)
    self.node = label
end

function LabelComponent:bind(target)
    local node = self.node
    target:addChild(node)
    node:setAnchorPoint(target:getAnchorPoint())
    node:setColor(target:getColor())
end

return LabelComponent
