
local AssetBase = cc.import(".AssetBase")
local SceneAsset = cc.class("cc.SceneAsset", AssetBase)

function SceneAsset:run()
    local director = cc.Director:getInstance()
    if director:getRunningScene() then
        director:replaceScene(self.node)
    else
        director:runWithScene(self.node)
    end
end

function SceneAsset:getCanvasNode()
    local node = self.node
    if not node.__children or node.__children[1] then
        return node
    end

    local child = node.__children[1]
    if not child.components or not child.components["cc.Canvas"] then
        return node
    end

    return child
end

return SceneAsset
