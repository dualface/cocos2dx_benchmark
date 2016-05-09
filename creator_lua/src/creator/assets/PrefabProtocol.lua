
local table_remove = table.remove

local PrefabProtocol = {}

function PrefabProtocol.apply(target)
    target.addComponent = function(self, component)
        self.components = self.components or {}
        local ctype = component.__type
        assert(self.components[ctype] == nil, string.format("[Prefab] component %s already added", ctype))
        self.components[ctype] = component
        component:onLoad(self)

        if not component.update then return end
        self.__updates = self.__updates or {}
        self.__updates[ctype] = component

        if self.__updateCall then return end
        self.__updateCall = function(dt)
            for _, component in pairs(self.__updates) do
                component:update(self, dt)
            end
        end
    end

    target.removeComponent = function(self, ctype)
        if not self.__updates then return end
        self.__updates[ctype] = nil
        for _, __ in pairs(self.__updates) do
            return
        end

        self.__updates = nil
        self.__updateCall = nil
    end

    target.getComponent = function(self, ctype)
        if not self.components or self.components[ctype] then return end
        return self.components[ctype]
    end
end

return PrefabProtocol
