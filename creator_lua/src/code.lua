
local HelloWorldLayer = class("HelloWorldLayer", cc.Layer)

function HelloWorldLayer:ctor()
    math.newrandomseed()

    self.starsLayer = cc.Node:create()
    self:addChild(self.starsLayer)

    local layer = cc.LayerColor:create(cc.c4b(200, 200, 200, 200), 200, 40)
    layer:setPosition(display.width / 2 - 100, display.height / 2 - 40)
    self:addChild(layer)

    self.starsLabel = cc.Label:createWithSystemFont("0 stars", "sans", 24)
    self.starsLabel:setColor(cc.c4b(0, 0, 0, 255))
    self.starsLabel:setPosition(100, 20)
    layer:addChild(self.starsLabel)

    self.offsetCount = 60
    self.offsets = {}
    for i = 0, 59 do
        self.offsets[i] = {
            x = math.sin(i * 6 * math.pi / 180) * 4,
            y = math.cos(i * 6 * math.pi / 180) * 4,
        }
    end

    self.maxStars = 8000
    self.starsCountOffset = 500
    self.stars = {}
    self.stepsCount = 120
    self.steps = self.stepsCount
    self:scheduleUpdate(function(dt) self:update(dt) end)
end

function HelloWorldLayer:addStars(count)
    for i = 1, count do
        local star = cc.Sprite:create("res/star.png")
        local pos = {
            x = math.random() * display.width,
            y = math.random() * display.height,
            i = math.floor(math.random() * self.offsetCount),
            o = math.floor(math.random() * 256),
            oi = 1
        }
        local offset = self.offsets[pos.i]
        star:setPosition(pos.x + offset.x, pos.y + offset.y)
        star:setOpacity(pos.o)
        star.pos = pos
        self.starsLayer:addChild(star)

        self.stars[#self.stars + 1] = star
    end

    if #self.stars >= self.maxStars then
        self.starsCountOffset = -self.starsCountOffset
    end
end

function HelloWorldLayer:removeStars(count)
    while count > 0 and #self.stars > 0 do
        local star = table.remove(self.stars)
        self.starsLayer:removeChild(star)
        count = count - 1
    end

    if #self.stars <= 0 then
        self.starsCountOffset = -self.starsCountOffset
    end
end

function HelloWorldLayer:update(dt)
    self.steps = self.steps + 1
    if self.steps >= self.stepsCount then
        if self.starsCountOffset > 0 then
            self:addStars(self.starsCountOffset)
        else
            self:removeStars(-self.starsCountOffset)
        end
        self.steps = 0
        self.starsLabel:setString(tostring(#self.stars) .. " stars")
    end

    for i = 1, #self.stars do
        self:updateStar(self.stars[i])
    end
end

function HelloWorldLayer:updateStar(star)
    local pos = star.pos
    local offset = self.offsets[pos.i]
    local offsetCount = self.offsetCount

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

    star:setPosition(pos.x + offset.x, pos.y + offset.y)
    star:setOpacity(pos.o)
end

local HelloWorldScene = class("HelloWorldScene", cc.Scene)

function HelloWorldScene:ctor()
    local layer = HelloWorldLayer.new()
    self:addChild(layer)

    cc.Director:getInstance():setDisplayStats(true)
end

return HelloWorldScene

