RPC.register('Banking:getTransactions', function(source, Array)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    Transactions = {}

    if Array.Account == 'Personal Account' then
        local Character = MySQL.query.await('SELECT * FROM characters WHERE id = @Id', {
            ['@Id'] = user['PlayerData']['id']
        })

        for k, v in ipairs(json.decode(Character[1].Transactions)) do
            table.insert(Transactions, {
                Account = v.Account,
                Amount = v.Amount,
                Comment = v.Comment,
                Date = v.Date,
                Withdraw = v.Withdraw
            })
        end
    end

    if Array.Account == 'Savings Account' then
        local Savings = MySQL.query.await('SELECT * FROM savings_accounts WHERE id = @Id', {
            ['@Id'] = Array.Id
        })

        for k, v in ipairs(json.decode(Savings[1].account_transactions)) do
            table.insert(Transactions, {
                Account = v.Account,
                Amount = v.Amount,
                Comment = v.Comment,
                Date = v.Date,
                Withdraw = v.Withdraw
            })
        end
    end

    return ReverseTable(Transactions)
end)

ReverseTable = function(ReverseText)
    local reversedTable = {}

    for k, v in ipairs(ReverseText) do
        reversedTable[#ReverseText + 1 - k] = v
    end

    return reversedTable
end