getCharacterName = function(stateId)
    local Character = MySQL.query.await('SELECT * FROM characters WHERE id = @Id', {
        ['@Id'] = stateId
    })

    return Character[1].first_name .. ' ' .. Character[1].last_name
end

RPC.register('Banking:createSavings', function(source, Array)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    Access = {}

    table.insert(Access, {
        stateId = user['PlayerData']['id'],
        accessType = 'Owner'
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
            if SavingsAccess.stateId == user['PlayerData']['id'] and SavingsAccess.accessType == 'Owner' then
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

RPC.register('Banking:deleteSavings', function(source, Array)
    exports['oxmysql']:execute('DELETE FROM savings_accounts WHERE id = @Id', {
        ['@Id'] = Array.Id
    })
end)

RPC.register('Banking:getAccountAccess', function(source, Array)
    local Savings = MySQL.query.await('SELECT * FROM savings_accounts WHERE id = @Id', {
        ['@Id'] = Array.accountId
    })

    Access = {}

    for k, v in ipairs(json.decode(Savings[1].account_access)) do
        table.insert(Access, {
            stateId = v.stateId,
            Name = getCharacterName(v.stateId),
            AccessType = v.accessType
        })
    end

    return Access
end)

RPC.register('Banking:addAccountAccess', function(source, Array)
    local Savings = MySQL.query.await('SELECT * FROM savings_accounts WHERE id = @Id', {
        ['@Id'] = Array.accountId
    })

    Access = json.decode(Savings[1].account_access)

    table.insert(Access, {
        stateId = Array.stateId,
        accessType = 'Share Holder'
    })

    exports['oxmysql']:execute('UPDATE savings_accounts SET account_access = @Access WHERE id = @Id', {
        ['@Id'] = Array.accountId,
        ['@Access'] = json.encode(Access)
    })
end)

RPC.register('Banking:removeAccountAccess', function(source, Array)
    local Savings = MySQL.query.await('SELECT * FROM savings_accounts WHERE id = @Id', {
        ['@Id'] = Array.accountId
    })

    Access = json.decode(Savings[1].account_access)

    for k, v in ipairs(Access) do
        if v.stateId == Array.stateId then
            table.remove(Access, k)
        end
    end

    exports['oxmysql']:execute('UPDATE savings_accounts SET account_access = @Access WHERE id = @Id', {
        ['@Id'] = Array.accountId,
        ['@Access'] = json.encode(Access)
    })
end)