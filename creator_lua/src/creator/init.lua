
local string_sub = string.sub
local table_makeweak = table.makeweak

local creator = {}

local Reader = cc.import(".Reader")

local _reader = Reader.new()
local _scenes = table_makeweak({})

function creator.loadAssetsDb()
    _reader:loadAssetsDb()
end

function creator.createScene(url)
    local scene, url = _reader:createScene(url)
    _scenes[url] = scene
    return scene
end

function creator.createLaunchScene()
    return creator.createScene(_reader:getLaunchSceneUrl())
end

function creator.getScene(url)
    return _scenes[url]
end

function creator.dumpSceneHierarchy(obj, id, hierarchy, lookup)
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

    if obj.childrenref then
        for _, child in ipairs(obj.childrenref) do
            creator.dumpSceneHierarchy(child, child.__id__, hierarchy + 1, lookup)
        end
    end
end

return creator
