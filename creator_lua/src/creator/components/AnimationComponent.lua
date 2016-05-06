
local ccp = cc.p
local ccsize = cc.size
local ccrect = cc.rect

local ComponentBase = cc.import(".ComponentBase")
local AnimationComponent = cc.class("cc.Animation", ComponentBase)

local _animationCache = cc.AnimationCache:getInstance()

local function _createAnimation(uuid, reader)
    local animation = _animationCache:getAnimation(uuid)
    if animation then return end

    local clip = reader:getAsset(uuid)
    local delay = 1.0 / clip.sample / clip.speed
    animation = cc.Animation:create()
    animation:setDelayPerUnit(delay)

    for _, faval in ipairs(clip["curveData"]["comps"]["cc.Sprite"]["spriteFrame"]) do
        local asset = reader:getAsset(faval["value"]["__uuid__"])
        local c = asset.content
        local spriteFrame = cc.SpriteFrame:create(
            reader.filesdb[c.texture],
            -- x, y, width, height
            ccrect(c.rect[1], c.rect[2], c.rect[3], c.rect[4]),
            c.rotated ~= 0,
            ccp(c.offset[1], c.offset[2]),
            ccsize(c.originalSize[1], c.originalSize[2]))
        animation:addSpriteFrame(spriteFrame)
    end

    _animationCache:addAnimation(animation, uuid)
end

function AnimationComponent:ctor(props, reader)
    AnimationComponent.super.ctor(self)
    self.props = props
    for _, clipaval in ipairs(self.props._clips) do
        _createAnimation(clipaval.__uuid__, reader)
    end
end

function AnimationComponent:bind(target)
    if not target.components or not target.components["cc.Sprite"] then
        return
    end

    local spriteComponent = target.components["cc.Sprite"]
    local sprite = spriteComponent.node

    for _, clipaval in ipairs(self.props._clips) do
        local uuid = clipaval.__uuid__
        local animation = _animationCache:getAnimation(uuid)
        local animate = cc.Animate:create(animation)
        sprite:runAction(cc.RepeatForever:create(animate))
    end
end

return AnimationComponent
