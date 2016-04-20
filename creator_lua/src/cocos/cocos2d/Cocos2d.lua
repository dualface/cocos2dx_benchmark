
cc = cc or {}

function cc.p(x, _)
    if type(x) == "table" then
        return x
    else
        return {x = x, y = y}
    end
end

function cc.color(r, g, b, a)
    if a ~= nil then
        return {r = r, g = g, b = b, a = a}
    else
        return {r = r, g = g, b = b}
    end
end
