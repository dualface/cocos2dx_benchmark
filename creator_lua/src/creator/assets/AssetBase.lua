
local AssetBase = cc.class("AssetBase")

function AssetBase:ctor(props)
    self.name = props._name
    self.type = props.__type__
end

return AssetBase
