
local creator = cc.import("creator.init")

local CannonBall01AI = cc.import(".CannonBall01AI")

local ShipAI = cc.class("ShipAI", creator.ComponentBase)

function ShipAI:onLoad(target)
    self._bullets = {}
    self._lastFire = 0
    self._fireInterval = 0.1
    self._speed = 20.0
end

function ShipAI:update(target, dt)
    local x, y = target:getPosition()
    x = x + self._speed * dt
    target:setPositionX(x)

    if self._lastFire <= 0 then
        self._lastFire = self._fireInterval

        local assets = creator.getAssets()
        local bullet = assets:createPrefab("Prefab/CannonBall01")
        bullet.hittime = math.random(75, 85) / 100
        bullet.hitx = x + math.random(-100, 150)
        bullet.hity = y - math.random(50, 90)
        bullet:addComponent(CannonBall01AI.new())
        bullet:trackComponents()

        bullet:setPosition(x, y)
        target:getParent():addChild(bullet)

        self._bullets[#self._bullets + 1] = bullet
    else
        self._lastFire = self._lastFire - dt
    end


end

return ShipAI
