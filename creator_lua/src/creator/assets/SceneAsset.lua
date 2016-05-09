
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
    while true do
        if not node.__children or not node.__children[1] then
            return node
        end

        local child = node.__children[1]
        if child.components and child.components["cc.Canvas"] then
            return child
        end

        node = child
    end
    return self.node
end

return SceneAsset
