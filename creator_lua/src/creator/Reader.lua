
local Reader = cc.class("cc.creator.Reader")

local _assert = assert
local _error = error

local _factory = cc.import(".filters.Factory")
local _connector = cc.import(".filters.Connector")

function Reader:ctor(base)
    self.base = base or ""
    if self.base ~= "" and string.sub(self.base, -1) ~= "." then
        self.base = self.base .. "."
    end
    self.settings = {}
    self.assetsdb = {}
    self.filesdb  = {}
end

function Reader:loadAssetsDb()
    self.settings = require(self.base .. "assets.settings")
    self.assetsdb = require(self.base .. "assets.assetsdb")
    self.filesdb  = require(self.base .. "assets.filesdb")
end

function Reader:createScene(url)
    local uuid = self:findScene(url)
    local aval = self:getAsset(uuid)
    return self:createObject(aval), url
end

function Reader:getLaunchSceneUrl()
    return self.settings.launchScene
end

function Reader:createObject(aval, id, refs)
    local objtype = aval.__type__
    if objtype ~= "__js_array__" then
        local factory = _factory[objtype]
        if not factory then
            cc.printwarn("Reader:createObject() - not support create type '%s'", objtype)
            return nil
        end

        -- cc.printinfo("[Reader] create object %s[%s]", objtype, tostring(id or ""))
        local obj = factory(aval, id, refs, self)
        obj.__id__ = id
        return obj
    end

    -- __js_array__
    local objs = {}
    local refs = aval.__js_array__

    for id, val in ipairs(refs) do
        if val.__created__ then
            -- cc.printinfo("[create] skip obj %s", id)
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
        for _, c in ipairs(components) do
            local id = c["__id__"]
            local ctype = refs[id]["__type__"]
            local component = objs[id]
            if component then
                component.__id__ = id
                obj.components[ctype] = component
                component:bind(obj)
            end
        end
    end

    -- connect
    local objtype = refs[current].__type__
    local connector = _connector[objtype]
    if not connector then return end

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
