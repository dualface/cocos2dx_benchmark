
local table_makeweak = table.makeweak

local Connector = {}

Connector["cc.SceneAsset"] = function(objs, current, refs)
    local obj = objs[current]
    local id = refs[current]["scene"]["__id__"]
    obj.scene = objs[id]
    obj.childrenref = table_makeweak({objs[id]})
end

Connector["cc.Node"] = function(objs, current, refs)
    local obj = objs[current]
    local _children = refs[current]["_children"]
    if not _children then return end

    obj.childrenref = table_makeweak({})
    local childrenref = obj.childrenref
    local child
    for _, childval in ipairs(_children) do
        local cid = childval["__id__"]
        -- cc.printinfo("[Connector] %s [%d] : addChild %s [%d]", obj.__type__, current, refs[cid].__type__, cid)

        child = objs[cid]
        child.parentref = table_makeweak({obj})

        obj:addChild(child)
        childrenref[#childrenref + 1] = child
    end
end

Connector["cc.Scene"] = Connector["cc.Node"]
Connector["cc.Sprite"] = Connector["cc.Node"]

return Connector
