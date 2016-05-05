
local ComponentBase = cc.class("cc.ComponentBase")

function ComponentBase:bind(target)
    cc.printwarn("%s:bind() - not override bind() method", tostring(self.class.__cname))
end

return ComponentBase
