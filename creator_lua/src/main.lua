
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
    creator.loadAssetsDb()

    local scene = creator.createScene("db://assets/Scene/BattleScene.fire")

    print("")
    print("--- Scene Graph ---")
    creator.dumpSceneHierarchy(scene)
    print("")
    scene:run()
end

xpcall(main, __G__TRACKBACK__)
