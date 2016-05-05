
local bit = require("bit")
local bit_and = bit.band


local ComponentBase = cc.import(".ComponentBase")
local WidgetComponent = cc.class("cc.Canvas", ComponentBase)

local _width, _height
local _cx, _cy, _left, _right, _top, _bottom


local _TOP        = 1
local _MID        = 2
local _BOTTOM     = 4
local _LEFT       = 8
local _CENTER     = 16
local _RIGHT      = 32
local _TOP_BOTTOM = _TOP + _BOTTOM
local _LEFT_RIGHT = _LEFT + _RIGHT

function WidgetComponent:ctor(props)
    WidgetComponent.super.ctor(self)
    self.props = props
    if not _width then
        local size = cc.Director:getInstance():getOpenGLView():getFrameSize()
        _width   = size.width
        _height  = size.height
        local hw = _width / 2
        local hh = _height / 2

        _cx      = 0
        _cy      = 0
        _left    = -hw
        _right   = hw
        _top     = hh
        _bottom  = -hh
    end
end

function WidgetComponent:bind(target)
    local p = self.props
    cc.dump(p)
    local flags = p._alignFlags

    if flags == 0 then return end

    local cs = target:getContentSize()
    local ap = target:getAnchorPoint()
    local cw, ch
    local x, y

    if bit_and(flags, _CENTER) ~= 0 then
        x = 0
    elseif bit_and(flags, _LEFT_RIGHT) == _LEFT_RIGHT then
        cw = _width - (p._left + p._right)
        x = _left + p._left + cw * ap.x
    elseif bit_and(flags, _LEFT) ~= 0 then
        x = _left + p._left + cs.width * ap.x
    elseif bit_and(flags, _RIGHT) ~= 0 then
        x = _right - p._right - cs.width * (1 - ap.x)
    end

    if bit_and(flags, _MID) ~= 0 then
        y = 0
    elseif bit_and(flags, _TOP_BOTTOM) == _TOP_BOTTOM then
        ch = _height - (p._bottom + p._top)
        y = _bottom + p._bottom + ch * ap.y
    elseif bit_and(flags, _TOP) ~= 0 then
        y = _top - p._top - cs.height * (1 - ap.y)
    elseif bit_and(flags, _BOTTOM) ~= 0 then
        y = _bottom + p._bottom + cs.height * ap.y
    end

    if cw and ch then
        target:setContentSize(cc.size(cw, ch))
    elseif cw then
        target:setContentSize(cc.size(cw, cs.height))
    elseif ch then
        target:setContentSize(cc.size(cs.width, ch))
    end

    if x and y then
        target:setPosition(x, y)
    elseif x then
        target:setPositionX(x)
    elseif y then
        target:setPositionY(y)
    end
end

return WidgetComponent
