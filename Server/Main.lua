RPC.register('Banking:getData', function(source, Array)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    if Array.Type == 'Name' then
        return user['PlayerData']['first_name'] .. ' ' .. user['PlayerData']['last_name']
    elseif Array.Type == 'Cash' then
        return user['PlayerData']['cash']
    end
end)

RPC.register('Banking:getAccounts', function(source)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    return Accounts.getAccounts({
        Name = user['PlayerData']['first_name'] .. ' ' .. user['PlayerData']['last_name'],
        Balance = user['PlayerData']['bank'],
        StateId = user['PlayerData']['id']
    })
end)