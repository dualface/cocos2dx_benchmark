
cc.FileUtils:getInstance():setPopupNotify(false)
cc.FileUtils:getInstance():addSearchPath("res/")
cc.FileUtils:getInstance():addSearchPath("src/")
print = release_print

require "cocos.init"

cc.DEBUG = cc.DEBUG_VERBOSE

local function main()
    local director = cc.Director:getInstance()
    local view = director:getOpenGLView()
    local size = view:getFrameSize()
    view:setDesignResolutionSize(size.width, size.height, cc.ResolutionPolicy.NO_BORDER)

    local creator = require "creator.init"
    local sceneAsset = creator.createLaunchScene()
    director:runWithScene(sceneAsset.scene)

    director:setDisplayStats(true)
end

local status, msg = xpcall(main, __G__TRACKBACK__)
if not status then
    -- print(msg)
end
