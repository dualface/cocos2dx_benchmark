
local ComponentBase = cc.import(".ComponentBase")
local CanvasComponent = cc.class("cc.Canvas", ComponentBase)

function CanvasComponent:ctor(props)
    CanvasComponent.super.ctor(self)
    self.props = props
end

function CanvasComponent:bind(target)
    local size = cc.Director:getInstance():getOpenGLView():getFrameSize()
    target:setAnchorPoint(cc.p(0.5, 0.5))
    target:setPosition(size.width / 2, size.height / 2)
end

return CanvasComponent
