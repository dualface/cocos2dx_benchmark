
local bit = require("bit")
local bit_and = bit.band


local ComponentBase = cc.import(".ComponentBase")
local WidgetComponent = cc.class("cc.Canvas", ComponentBase)

local _TOP        = 1
local _MID        = 2
local _BOTTOM     = 4
local _LEFT       = 8
local _CENTER     = 16
local _RIGHT      = 32
local _TOP_BOTTOM = _TOP + _BOTTOM
local _LEFT_RIGHT = _LEFT + _RIGHT

local _glview

function WidgetComponent:ctor(props)
    WidgetComponent.super.ctor(self)
    self.props = props
    if not _glview then
        _glview = cc.Director:getInstance():getOpenGLView()
    end
end

function WidgetComponent:bind(target)
    self:align(target)
end

function WidgetComponent:onEnter(target)
end

function WidgetComponent:align(target)
    cc.printdebug("[WidgetComponent] align target %s [%s] %s",
            target.__type, target.__id, target:getName())

    if self.props._alignFlags == 0
            or not target.__parent
            or not target.__parent[1] then
        return
    end

    local props  = self.props
    local flags  = props._alignFlags
    local parent = target.__parent[1]

    -- get parent content size
    local pap    = parent:getAnchorPoint()
    local pw     = parent.contentSize.width
    local ph     = parent.contentSize.height
    local hw, hh = pw / 2, ph / 2
    cc.printdebug("  - parent content size: width = %0.2f, height = %0.2f", pw, ph)

    -- local cx, cy = 0, 0
    local cx     = hw - pw * pap.x
    local cy     = hh - ph * pap.y
    cc.printdebug("  - parent cetner: x = %0.2f, y = %0.2f", cx, cy)

    local pleft   = cx - hw
    local pright  = cx + hw
    local ptop    = cy + hh
    local pbottom = cy - hh

    if parent.__type__ == "cc.Scene" then
        local rect = _glview:getVisibleRect()
        pleft   = rect.x
        pright  = pleft + rect.width
        pbottom = rect.y
        ptop    = pbottom + rect.height
        pw      = pright - pleft
        ph      = ptop - pbottom
        hw      = pw / 2
        hh      = ph / 2
        cx      = pleft + pw / 2
        cy      = pbottom + ph / 2
    end

    -- get target size
    local ap   = target:getAnchorPoint()
    local sx   = target:getScaleX()
    local sy   = target:getScaleY()
    local w    = target.contentSize.width * sx
    local h    = target.contentSize.height * sy
    local x, y = target:getPosition()
    cc.printdebug("  - target content size: width = %0.2f, height = %0.2f", w, h)

    -- calc offsets
    local left = props._left
    if not props._isAbsLeft then
        left = left * pw
    end

    local right = props._right
    if not props._isAbsRight then
        right = right * pw
    end

    local top = props._top
    if not props._isAbsTop then
        top = top * ph
    end

    local bottom = props._bottom
    if not props._isAbsBottom then
        bottom = bottom * ph
    end

    -- calc position
    if bit_and(flags, _CENTER) ~= 0 then
        x = cx + w * (ap.x - 0.5)
    elseif bit_and(flags, _LEFT_RIGHT) == _LEFT_RIGHT then
        cc.printwarn("[WidgetComponent] not support LEFT_RIGHT align in cocos2d-x")
        return
    elseif bit_and(flags, _LEFT) ~= 0 then
        x = pleft + left + w * ap.x
    elseif bit_and(flags, _RIGHT) ~= 0 then
        x = pright - right - w * (1.0 - ap.x)
    end

    if bit_and(flags, _MID) ~= 0 then
        y = cy + h * (ap.y - 0.5)
    elseif bit_and(flags, _TOP_BOTTOM) == _TOP_BOTTOM then
        cc.printwarn("[WidgetComponent] not support TOP_BOTTOM align in cocos2d-x")
        return
    elseif bit_and(flags, _TOP) ~= 0 then
        y = ptop - top - h * (1.0 - ap.y)
    elseif bit_and(flags, _BOTTOM) ~= 0 then
        y = pbottom + bottom + h * ap.y
    end

    cc.printdebug("  - target pos: x = %0.2f, y = %0.2f", x, y)
    target:setPosition(x, y)
end

return WidgetComponent
