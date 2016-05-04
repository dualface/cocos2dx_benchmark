
local Reader = cc.class("cc.creator.Reader")

local _assert = assert
local _error = error

local _filters = cc.import(".ReaderFilters")

function Reader:ctor(base)
    self.base = base or ""
    if self.base ~= "" and string.sub(self.base, -1) ~= "." then
        self.base = self.base .. "."
    end
    self.settings = {}
    self.assetsdb = {}
    self.filesdb  = {}
end

function Reader:load()
    self.settings = require(self.base .. "assets.settings")
    self.assetsdb = require(self.base .. "assets.assetsdb")
    self.filesdb  = require(self.base .. "assets.filesdb")
end

local dumpHierarchy
dumpHierarchy = function(objs, id, hierarchy)
    id = id or 1
    hierarchy = hierarchy or 0
    local obj = objs[id]

    local indent = string.rep("  ", hierarchy)
    local parts = {indent, obj.__type__, "[", id, "]"}

    if obj.__components then
        local c = {}
        for ctype, component in pairs(obj.__components) do
            c[#c + 1] = ctype .. "[" .. component.__id__ .. "]"
        end
        parts[#parts + 1] = " ( " .. table.concat(c, ", ") .. " )"
    end
    print(table.concat(parts, ""))

    if obj.__children then
        for _, id in ipairs(obj.__children) do
            dumpHierarchy(objs, id, hierarchy + 1)
        end
    end
end

function Reader:createLaunchScene()
    local uuid = self:findScene(self.settings.launchScene)
    local aval = self:getAsset(uuid)
    local objs = self:createObject(aval)
    print("")
    dumpHierarchy(objs)
    print("")
    return objs[1]
end

function Reader:createObject(aval)
    local objtype = aval.__type__
    if objtype ~= "__js_array__" then
        local factory = _filters.factory[objtype]
        if not factory then
            cc.printwarn("Reader:createObject() - not support create type '%s'", objtype)
            return nil
        end
        return factory(aval, self)
    end

    -- __js_array__
    local objs = {}
    local refs = aval.__js_array__

    for index, val in ipairs(refs) do
        objs[index] = self:createObject(val)
    end

    for index, val in ipairs(objs) do
        self:assmebleObjects(objs, refs, index)
    end

    return objs
end

function Reader:assmebleObjects(objs, refs, current)
    local obj = objs[current]

    -- set components
    local components = refs[current]["_components"]
    if components then
        obj.__components = {}
        for _, c in pairs(components) do
            local id = c["__id__"]
            local ctype = refs[id]["__type__"]
            local component = objs[id]
            component.__id__ = id
            if component then
                obj.__components[ctype] = component
                component:bind(obj)
            end
        end
    end

    -- add children
    local objtype = refs[current].__type__
    local connector = _filters.connector[objtype]
    if not connector then
        cc.printwarn("Reader:createObject() - not support connect type '%s'", objtype)
        return nil
    end

    connector(objs, refs, current)
end

function Reader:findScene(url)
    local uuid
    for _, item in pairs(self.settings.scenes) do
        if item.url == url then
            uuid = item.uuid
            break
        end
    end
    _assert(uuid, string.format("creator.Reader:findScene() - not found uuid for scene '%s'", url))
    return uuid
end

function Reader:getAsset(uuid)
    local aval = self.assetsdb[uuid]
    _assert(aval, string.format("creator.Reader:getAsset() - not found asset for uuid '%s'", uuid))
    return aval
end

return Reader
