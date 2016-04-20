
-- Convert Creator JS project to Lua

local json = require "json_pure_lua"
local dumpval = require "dumpval"

local function help()
    print [[

lua creator-js2lua.lua js-build-dir out-dir

options:
    js-build-dir The directory of Creator project build
    out-dir Lua Project directory

]]
end

local function readfile(filename)
    local file, err = io.open(filename, "rb")
    if not file then
        print(string.format("Open file %s failed", filename))
        return nil
    end

    local contents = file:read("*a")
    io.close(file)

    if not contents then
        print(string.format("Read file %s failed", filename))
        return nil
    end

    print(string.format("Read file %s", filename))
    return contents
end

local function writefile(filename, contents)
    mode = "w+b"
    local file = io.open(filename, mode)
    if not file or not file:write(contents) then
        print(string.format("Write file %s failed", filename))
        return nil
    end

    io.close(file)
    print(string.format("Write file %s", filename))
    return true
end

local function checkdir(dir)
    local lastchar = dir[#dir]
    if lastchar == "/" or lastchar == "\\" then
        return string.sub(dir, 1, -2)
    else
        return dir
    end
end

local function mkdir(dir)
    local command = string.format("if [ ! -d %s ]; then mkdir %s; fi", dir, dir)
    local ok, status, code = os.execute(command)
    return ok == true and status == "exit" and code == 0
end

local removeNullFromJson
removeNullFromJson = function(jsonval)
    for k, v in pairs(jsonval) do
        if v == json.null then
            jsonval[k] = nil
        elseif type(v) == "table" then
            removeNullFromJson(v)
        end
    end
    return jsonval
end

local function loadAssets(builddir, uuid)
    local pattern = "%s/res/import/%s/%s.json"
    local path = string.format(pattern, builddir, string.sub(uuid, 1, 2), uuid)
    local contents = readfile(path)
    return removeNullFromJson(json.parse(contents))
end

----

local args = {...}

if #args < 2 then
    help()
    os.exit(1)
end

local builddir = checkdir(args[1])
local outdir = checkdir(args[2])

-- prepare
local dirs = {
    outdir,
    outdir .. "/assets",
    outdir .. "/src",
    outdir .. "/src/assets",
}

for i = 1, #dirs do
    if not mkdir(dirs[i]) then
        os.exit()
    end
end

-- step 1
-- convert settings.js to settings.lua
local contents = readfile(builddir .. "/src/settings.js")
local settings = json.parse(string.gsub(contents, "_CCSettings = {", "{"))
local lines = dumpval.dumpval(settings, "local settings =", "", true)
table.insert(lines, 1, "")
lines[#lines + 1] = ""
lines[#lines + 1] = "return settings"
lines[#lines + 1] = ""
contents = table.concat(lines, "\n")
writefile(outdir .. "/src/assets/settings.lua", contents)

-- step 2
-- load all json files form res/import, write to import.lua
local rawAssets = settings.rawAssets

local assetsdb = {}

for _, key in pairs({"assets", "internal"}) do
    for uuid, asset in pairs(rawAssets[key]) do
        if asset.raw == false then
            assetsdb[uuid] = loadAssets(builddir, uuid)
        end
    end
end

lines = dumpval.dumpval(assetsdb, "local assetsdb =", "", true)
table.insert(lines, 1, "")
lines[#lines + 1] = ""
lines[#lines + 1] = "return assetsdb"
lines[#lines + 1] = ""
contents = table.concat(lines, "\n")
writefile(outdir .. "/src/assets/assetsdb.lua", contents)
