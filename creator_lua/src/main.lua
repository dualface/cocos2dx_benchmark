
cc.FileUtils:getInstance():setPopupNotify(false)
cc.FileUtils:getInstance():addSearchPath("res/")
cc.FileUtils:getInstance():addSearchPath("src/")
print = release_print

require "cocos.init"

cc.DEBUG = cc.DEBUG_VERBOSE
cc.DEBUG_DISABLE_DUMP_TRACEBACK = true
cc.CREATOR_DISABLE_NODE_WRAPPER = false

local function main()
    local director = cc.Director:getInstance()
    director:setDisplayStats(true)

    local creator = require "creator.init"
    local scene = creator.createLaunchScene()

    print("")
    print("--- Scene Graph ---")
    creator.dumpSceneHierarchy(scene)
    print("")
    scene:run()

    -- local scene = cc.Scene:create()
    -- local node = cc.Node:create()
    -- node:setAnchorPoint(cc.p(0, 0))
    -- local sprite = cc.Sprite:create("raw-assets/Sprite/box_200x200.png")
    -- sprite:setAnchorPoint(cc.p(0, 0))
    -- node:addChild(sprite)
    -- node:setPosition(0, 0)
    -- scene:addChild(node)
    -- director:runWithScene(scene)
end

local status, msg = xpcall(main, __G__TRACKBACK__)
if not status then
    -- print(msg)
end
