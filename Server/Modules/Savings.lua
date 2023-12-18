RPC.register('Banking:createSavings', function(source, Array)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    Access = {}

    table.insert(Access, {
        stateId = user['PlayerData']['id']
    })

    exports['oxmysql']:execute('INSERT INTO savings_accounts (id, account_name, account_access) VALUES (@Id, @Name, @Access)', {
        ['@Id'] = math.random(1,9) .. math.random(1,9) .. math.random(1,9) .. math.random(1,9) .. math.random(1,9) .. math.random(1,9) .. math.random(1,9) .. math.random(1,9),
        ['@Name'] = Array.Name,
        ['@Access'] = json.encode(Access)
    })
end)

RPC.register('Banking:isSavingsAvailable', function(source)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    local Savings = MySQL.query.await('SELECT * FROM savings_accounts')
    Saving = {}

    for k, v in ipairs(Savings) do
        for Access, SavingsAccess in ipairs(json.decode(v.account_access)) do
            if SavingsAccess.stateId == user['PlayerData']['id'] then
                table.insert(Saving, {
                    accountId = v.id,
                    accountType = 'Savings Account',
                    name = v.account_name,
                    balance = v.account_balance
                })
            end
        end
    end

    return Saving
end)