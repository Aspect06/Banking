Accounts = {
    BankAccounts = {},

    getAccounts = function(Array)
        local src = source
        local user = exports['Framework']:GetModule('GetPlayer')(src)

        Accounts.BankAccounts = {}

        table.insert(Accounts.BankAccounts, {
            accountId = Array.StateId,
            accountType = 'Personal Account',
            name = Array.Name,
            balance = Array.Balance
        })

        -- Get business accounts..

        local Savings = MySQL.query.await('SELECT * FROM savings_accounts')

        for k, v in ipairs(Savings) do
            for Access, SavingsAccess in ipairs(json.decode(v.account_access)) do
                if SavingsAccess.stateId == user['PlayerData']['id'] then
                    if SavingsAccess.accessType == 'Owner' then Manageable = true else Manageable = false end

                    table.insert(Accounts.BankAccounts, {
                        accountId = v.id,
                        accountType = 'Savings Account',
                        name = v.account_name,
                        balance = v.account_balance,
                        canManage = Manageable
                    })
                end
            end
        end

        return Accounts.BankAccounts
    end
}