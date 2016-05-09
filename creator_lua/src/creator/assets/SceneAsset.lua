
local AssetBase = cc.import(".AssetBase")
local SceneAsset = cc.class("SceneAsset", AssetBase)

function SceneAsset:run()
    local director = cc.Director:getInstance()
    if director:getRunningScene() then
        director:replaceScene(self.scene)
    else
        director:runWithScene(self.scene)
    end
end

return SceneAsset
