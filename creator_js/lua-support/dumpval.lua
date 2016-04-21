
local _M = {}

local string_format = string.format
local string_rep = string.rep

local function _dump_value(v)
    if type(v) == "string" then
        v = "\"" .. v .. "\""
    end
    return tostring(v)
end

function _M.dumpval(value, desciption, indent, retarr)
    indent = indent or ""

    local lookup = {}
    local result = {}

    local function _dump(value, desciption, indent, first)
        if type(value) ~= "table" then
            desciption = desciption or "value"
            if first then
                result[#result +1 ] = string_format("%s%s %s,", indent, desciption, _dump_value(value))
            else
                result[#result +1 ] = string_format("%s[%s] = %s,", indent, _dump_value(desciption), _dump_value(value))
            end
        elseif lookup[tostring(value)] then
            error("FOUND NESTING VALUE, key: " .. desciption .. ", value: " .. tostring(value))
        else
            lookup[tostring(value)] = true
            if first then
                if desciption then
                    result[#result +1 ] = string_format("%s%s {", indent, desciption)
                else
                    result[#result +1 ] = string_format("%s{", indent)
                end
            else
                result[#result +1 ] = string_format("%s[%s] = {", indent, _dump_value(desciption))
            end
            local indent2 = indent.."    "
            local keys = {}
            local values = {}
            for k, v in pairs(value) do
                keys[#keys + 1] = k
                values[k] = v
            end
            table.sort(keys, function(a, b)
                if type(a) == "number" and type(b) == "number" then
                    return a < b
                else
                    return tostring(a) < tostring(b)
                end
            end)
            for i, k in ipairs(keys) do
                _dump(values[k], k, indent2, keylen)
            end
            result[#result +1] = string_format("%s},", indent)
        end
    end
    _dump(value, desciption, indent, true)
    result[#result] = string.sub(result[#result], 1, -2)

    if retarr then
        return result
    else
        return table.concat(result, "\n")
    end
end


function _M.dump(value, desciption, nesting, _print)
    if type(nesting) ~= "number" then nesting = 8 end
    _print = _print or print

    local lookup = {}
    local result = {}

    local function _dump(value, desciption, indent, nest)
        desciption = desciption or "<var>"
        if type(value) ~= "table" then
            result[#result +1 ] = string_format("%s%s = %s", indent, _dump_value(desciption), _dump_value(value))
        elseif lookup[tostring(value)] then
            result[#result +1 ] = string_format("%s%s = *REF*", indent, _dump_value(desciption))
        else
            lookup[tostring(value)] = true
            if nest > nesting then
                result[#result +1 ] = string_format("%s%s = *MAX NESTING*", indent, _dump_value(desciption))
            else
                result[#result +1 ] = string_format("%s%s = {", indent, _dump_value(desciption))
                local indent2 = indent.."    "
                local keys = {}
                local values = {}
                for k, v in pairs(value) do
                    keys[#keys + 1] = k
                    values[k] = v
                end
                table.sort(keys, function(a, b)
                    if type(a) == "number" and type(b) == "number" then
                        return a < b
                    else
                        return tostring(a) < tostring(b)
                    end
                end)
                for i, k in ipairs(keys) do
                    _dump(values[k], k, indent2, nest + 1)
                end
                result[#result +1] = string_format("%s}", indent)
            end
        end
    end
    _dump(value, desciption, "- ", 1)

    for i, line in ipairs(result) do
        _print(line)
    end
end

return _M
