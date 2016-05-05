
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

function SceneAsset:findCanvas()

end

return SceneAsset
