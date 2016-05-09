
cc.FileUtils:getInstance():setPopupNotify(false)
cc.FileUtils:getInstance():addSearchPath("res/")
cc.FileUtils:getInstance():addSearchPath("src/")
print = release_print

require "cocos.init"

-- cc.DEBUG = cc.DEBUG_WARN
cc.DEBUG = cc.DEBUG_VERBOSE
cc.DEBUG_DISABLE_DUMP_TRACEBACK = true
cc.CREATOR_DISABLE_NODE_WRAPPER = false

local function main()
    local director = cc.Director:getInstance()
    director:setDisplayStats(true)

    local creator = require "creator.init"
    local assets = creator.getAssets()
    local scene = assets:createScene("Scene/TestAnchorPointScene.fire")
    -- local scene = assets:createScene("Scene/BattleScene.fire")

    print("")
    print("--- Scene Graph ---")
    creator.dumpSceneHierarchy(scene)
    print("")
    scene:run()

    local canvas = scene:getCanvasNode()

    for i = 1, 1 do
        local ship = assets:createPrefab("Prefab/Ship.prefab")
        canvas:addChild(ship.node)

        ship.node:setPosition(-100, 0)

        ship:addComponent(creator.create("cc.Widget", {
            _alignFlags = creator.WidgetComponent.ALIGN_CENTER
        }))
    end
end

xpcall(main, __G__TRACKBACK__)
