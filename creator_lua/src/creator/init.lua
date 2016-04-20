
local _M = {}

local Reader = cc.import(".Reader")

function _M.createLaunchScene()
    local reader = Reader:new()
    reader:load()
    return reader:createLaunchScene()
end

return _M
