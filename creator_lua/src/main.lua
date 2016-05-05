
cc.FileUtils:getInstance():setPopupNotify(false)
cc.FileUtils:getInstance():addSearchPath("res/")
cc.FileUtils:getInstance():addSearchPath("src/")
print = release_print

require "cocos.init"

cc.DEBUG = cc.DEBUG_VERBOSE

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
end

local status, msg = xpcall(main, __G__TRACKBACK__)
if not status then
    -- print(msg)
end
