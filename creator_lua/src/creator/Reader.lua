
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
    for index, val in ipairs(aval.__js_array__) do
        -- cc.printdebug("Reader:createObject() - index: %d, type: %s", index, val.__type__)
        objs[index] = self:createObject(val, self)
    end

    for index, val in ipairs(objs) do
        self:assmebleObjects(objs[index], index, objs, aval.__js_array__)
    end

    if #objs > 0 then
        return objs[1]
    end
end

function Reader:assmebleObjects(obj, index, objs, refs)
    local objtype = refs[index].__type__
    local connector = _filters.connector[objtype]
    if not connector then
        cc.printwarn("Reader:createObject() - not support connect type '%s'", objtype)
        return nil
    end
    connector(obj, index, objs, refs)

    -- set components
    local components = refs[index]["_components"]
    if not components then return end

    obj.components = {}
    for _, c in pairs(components) do
        local id = c["__id__"]
        local ctype = refs[id]["__type__"]
        local component = objs[id]
        if component then
            obj.components[ctype] = component
            component:bind(obj)
        end
    end
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
