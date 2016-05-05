
local ComponentBase = cc.class("cc.ComponentBase")

function ComponentBase:bind(target)
    cc.printwarn("%s:bind() - not override bind() method", tostring(self.class.__cname))
end

function ComponentBase:onEnter(target)
end

function ComponentBase:onExit(target)
end

return ComponentBase
