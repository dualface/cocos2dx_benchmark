
local Assemblers = cc.class("Assemblers")

local string_sub = string.sub

local _filters = cc.import(".AssemblersFilters")

function Assemblers:ctor(assetsdb, filesdb)
    self.assetsdb = assetsdb
    self.filesdb = filesdb
end

function Assemblers:assemble(aval, refs, parent)
end

return Assemblers
