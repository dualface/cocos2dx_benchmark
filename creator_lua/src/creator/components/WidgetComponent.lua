
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

function WidgetComponent:ctor(props)
    WidgetComponent.super.ctor(self)
    self.props = props
end

function WidgetComponent:bind(target)
    self:align(target)
end

function WidgetComponent:onEnter(target)
end

function WidgetComponent:align(target)
    local p = self.props
    local flags = p._alignFlags

    if flags == 0 then return end

    if not target.parentref or not target.parentref[1] then return end
    local parent = target.parentref[1]

    -- get parent content size
    local pw, ph = parent.contentSize.width, parent.contentSize.height
    if parent.__type__ == "cc.Scene" then
        local size = cc.Director:getInstance():getOpenGLView():getDesignResolutionSize()
        pw, ph = size.width, size.height
    end

    local ap = parent:getAnchorPoint()
    local hw, hh = pw / 2, ph / 2
    local cx = pw * (1 - ap.x) - hw
    local cy = ph * (1 - ap.y) - hh
    local left   = -hw
    local right  = hw
    local top    = hh
    local bottom = -hh

    -- get target size
    local cs = target.contentSize
    local ap = target:getAnchorPoint()
    local cw, ch
    local x, y

    -- check abs
    local pleft = p._left
    if not p._isAbsLeft then
        pleft = pw * pleft
    end

    local pright = p._right
    if not p._isAbsRight then
        pright = pw * pright
    end

    local ptop = p._top
    if not p._isAbsTop then
        ptop = ph * ptop
    end

    local pbottom = p._bottom
    if not p._isAbsBottom then
        pbottom = pw * pbottom
    end


    if bit_and(flags, _CENTER) ~= 0 then
        x = cx
    elseif bit_and(flags, _LEFT_RIGHT) == _LEFT_RIGHT then
        cw = width - (pleft + pright)
        x = left + pleft + cw * ap.x
    elseif bit_and(flags, _LEFT) ~= 0 then
        x = left + pleft + cs.width * ap.x
    elseif bit_and(flags, _RIGHT) ~= 0 then
        x = right - pright - cs.width * (1 - ap.x)
    end

    if bit_and(flags, _MID) ~= 0 then
        y = cy
    elseif bit_and(flags, _TOP_BOTTOM) == _TOP_BOTTOM then
        ch = height - (pbottom + ptop)
        y = _bottom + pbottom + ch * ap.y
    elseif bit_and(flags, _TOP) ~= 0 then
        y = top - ptop - cs.height * (1 - ap.y)
    elseif bit_and(flags, _BOTTOM) ~= 0 then
        y = bottom + pbottom + cs.height * ap.y
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
