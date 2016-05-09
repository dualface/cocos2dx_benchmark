
local string_sub = string.sub
local table_makeweak = table.makeweak

local creator = {}

local Assets = cc.import(".Assets")

function creator.loadAssets(base)
    return Assets.new(base)
end

function creator.dumpSceneHierarchy(obj, id, hierarchy, lookup)
    if not obj then return end

    id = id or 1
    hierarchy = hierarchy or 0
    lookup = lookup or {}

    if lookup[id] then return end

    local indent = string.rep("  ", hierarchy)
    local parts = {indent}
    if obj.name ~= "" then
        parts[#parts + 1] = "'" .. obj.name .. "': "
    end
    parts[#parts + 1] = obj.__type
    if id then
        parts[#parts + 1] = "[" .. id .. "]"
    end

    if obj.components then
        local c = {}
        for ctype, component in pairs(obj.components) do
            c[#c + 1] = ctype
        end
        if #c > 0 then
            parts[#parts + 1] = " < " .. table.concat(c, ", ") .. " >"
        end
    end
    print(table.concat(parts, ""))
    lookup[id] = true

    if obj.__children then
        for _, child in ipairs(obj.__children) do
            creator.dumpSceneHierarchy(child, child.__id, hierarchy + 1, lookup)
        end
    end
end

return creator
