
local AssetBase = cc.import(".AssetBase")
local SceneAsset = cc.class("SceneAsset", AssetBase)

function SceneAsset:setName(name)
    self.name = name
end

return SceneAsset
