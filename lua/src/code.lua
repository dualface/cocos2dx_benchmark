
local HelloWorldLayer = class("HelloWorldLayer", cc.Layer)

function HelloWorldLayer:ctor()
    self.offsetCount = 60
    self.offsets = {}
    for i = 0, 59 do
        self.offsets[i] = {
            x = math.sin(i * 6 * math.pi / 180) * 4,
            y = math.cos(i * 6 * math.pi / 180) * 4,
        }
    end

    self.pos = {}
    self.stars = {}
    for i = 0, 1499 do
        local star = cc.Sprite:create("res/star.png")
        local pos = {
            x = math.random() * display.width,
            y = math.random() * display.height,
            i = math.floor(math.random() * self.offsetCount),
            o = math.floor(math.random() * 256),
            oi = 1,
        }
        local offset = self.offsets[pos.i]
        star:setPosition(pos.x + offset.x, pos.y + offset.y)
        star:setOpacity(pos.o)
        self:addChild(star)

        self.stars[i] = star
        self.pos[i] = pos
    end

    self:scheduleUpdate(function(dt) self:update(dt) end)
end

function HelloWorldLayer:update(dt)
    local count = #self.stars
    local offsetCount = self.offsetCount

    for i = 0, count - 1 do
        local pos = self.pos[i]
        local offset = self.offsets[pos.i]
        pos.i = pos.i + 1
        pos.i = pos.i % offsetCount
        pos.o = pos.o + pos.oi
        if pos.o > 255 then
            pos.o = 255
            pos.oi = -pos.oi
        elseif pos.o < 0 then
            pos.o = 0
            pos.oi = -pos.oi
        end

        local star = self.stars[i]
        star:setPosition(pos.x + offset.x, pos.y + offset.y)
        star:setOpacity(pos.o)
    end
end

local HelloWorldScene = class("HelloWorldScene", cc.Scene)

function HelloWorldScene:ctor()
    local layer = HelloWorldLayer.new()
    self:addChild(layer)

    cc.Director:getInstance():setDisplayStats(true)
end

return HelloWorldScene

