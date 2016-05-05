
local AssetBase = cc.import(".AssetBase")
local SceneAsset = cc.class("SceneAsset", AssetBase)

function SceneAsset:setName(name)
    self.name = name
end

function SceneAsset:getName()
    return self.name
end

function SceneAsset:getScene()
    return self.scene
end

function SceneAsset:run()
    local director = cc.Director:getInstance()
    if director:getRunningScene() then
        director:replaceScene(self.scene)
    else
        director:runWithScene(self.scene)
    end
end

return SceneAsset
