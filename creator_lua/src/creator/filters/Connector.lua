
local table_makeweak = table.makeweak

local Connector = {}

Connector["cc.SceneAsset"] = function(objs, parentId, refs)
    local parent = objs[parentId]
    local id = refs[parentId]["scene"]["__id__"]
    parent.scene = objs[id]
    parent.__children = table_makeweak({objs[id]})
end

local connectNode = function(objs, parentId, refs)
    local parent = objs[parentId]
    local children = refs[parentId]["_children"]
    if not children then return end

    parent.__children = table_makeweak({})
    local __children = parent.__children
    local child
    for _, asset in ipairs(children) do
        local cid = asset["__id__"]
        cc.printdebug("[Connector] %s [%d] : addChild %s [%d]", parent.__type, parentId, refs[cid].__type__, cid)

        child = objs[cid]
        child.__parent = table_makeweak({parent})

        parent:addChild(child)
        __children[#__children + 1] = child
    end

    return parent
end

Connector["cc.Node"] = connectNode
Connector["cc.Scene"] = connectNode

return Connector
