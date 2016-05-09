
local AssetBase = cc.import(".AssetBase")
local PrefabAsset = cc.class("cc.PrefabAsset", AssetBase)

function PrefabAsset:addComponent(component)
    self.components = self.components or {}
    self.components[component.__type] = component
    component:bind(self)
end

return PrefabAsset
