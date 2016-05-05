
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

function Reader:createLaunchScene()
    local uuid = self:findScene(self.settings.launchScene)
    local aval = self:getAsset(uuid)
    return self:createObject(aval)
end

function Reader:createObject(aval, id, refs)
    local objtype = aval.__type__
    if objtype ~= "__js_array__" then
        local factory = _filters.factory[objtype]
        if not factory then
            cc.printwarn("Reader:createObject() - not support create type '%s'", objtype)
            return nil
        end
        local obj = factory(aval, id, refs, self)
        obj.__id__ = id
        return obj
    end

    -- __js_array__
    local objs = {}
    local refs = aval.__js_array__

    for id, val in ipairs(refs) do
        if val.__created__ then
            cc.printinfo("[create] skip obj %s", id)
            objs[id] = false
        else
            objs[id] = self:createObject(val, id, refs)
        end
    end

    for id, val in ipairs(objs) do
        self:assmebleObjects(objs, id, refs)
    end

    return objs[1]
end

function Reader:assmebleObjects(objs, current, refs)
    local obj = objs[current]
    if not obj then return end

    -- set components
    local components = refs[current]["_components"]
    if components then
        obj.components = {}
        for _, c in pairs(components) do
            local id = c["__id__"]
            local ctype = refs[id]["__type__"]
            local component = objs[id]
            if component then
                component.__id__ = id
                if component then
                    obj.components[ctype] = component
                    component:bind(obj)
                end
            end
        end
    end

    -- set children
    local objtype = refs[current].__type__
    local connector = _filters.connector[objtype]
    if not connector then
        cc.printwarn("Reader:createObject() - not support connect type '%s'", objtype)
        return nil
    end

    connector(objs, current, refs)
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
