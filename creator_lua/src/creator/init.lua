
local _M = {}

local Reader = cc.import(".Reader")

function _M.createLaunchScene()
    local reader = Reader:new()
    reader:load()
    return reader:createLaunchScene()
end

function _M.dumpSceneHierarchy(obj, id, hierarchy, lookup)
    if not obj then return end

    id = id or 1
    hierarchy = hierarchy or 0
    lookup = lookup or {}

    if lookup[id] then return end

    local indent = string.rep("  ", hierarchy)
    local parts = {indent, obj.__type__, "[", id, "]"}

    if obj.components then
        local c = {}
        for ctype, component in pairs(obj.components) do
            c[#c + 1] = ctype .. "[" .. component.__id__ .. "]"
        end
        parts[#parts + 1] = " ( " .. table.concat(c, ", ") .. " )"
    end
    print(table.concat(parts, ""))
    lookup[id] = true

    if obj.children then
        for _, child in ipairs(obj.children) do
            _M.dumpSceneHierarchy(child, child.__id__, hierarchy + 1, lookup)
        end
    end
end

return _M
