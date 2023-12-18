RPC.register('Banking:withdrawMoney', function(source, Array)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    if Array.Amount > 0 then
        if exports["Framework"]:GetBalance(src) >= Array.Amount then

            if Array.Account == 'Personal Account' then
                local Personal = MySQL.query.await('SELECT * FROM characters WHERE id = @Id', {
                    ['@Id'] = user['PlayerData']['id']
                })

                PersonalTransactions = json.decode(Personal[1].Transactions)

                table.insert(PersonalTransactions, {
                    Account = 'Personal Account ' .. user['PlayerData']['id'],
                    Comment = Array.Comment,
                    Amount = Array.Amount,
                    Date = Array.Date,
                    Withdraw = true
                })

                exports["Framework"]:AddCash(src, Array.Amount)

                exports['oxmysql']:execute('UPDATE characters SET Transactions = @Transactions WHERE id = @Id', {
                    ['@Id'] = user['PlayerData']['id'],
                    ['@Transactions'] = json.encode(PersonalTransactions)
                })

                exports["Framework"]:RemoveBank(src, Array.Amount)
            end
        end

        if Array.Account == 'Savings Account' then
            local Savings = MySQL.query.await('SELECT * FROM savings_accounts WHERE id = @Id', {
                ['@Id'] = Array.accountId
            })

            SavingsTransactions = json.decode(Savings[1].account_transactions)

            table.insert(SavingsTransactions, {
                Account = 'Savings Account ' .. Array.accountId,
                Comment = Array.Comment,
                Amount = Array.Amount,
                Date = Array.Date,
                Withdraw = true
            })

            exports["Framework"]:AddCash(src, Array.Amount)

            exports['oxmysql']:execute('UPDATE savings_accounts SET account_transactions = @Transactions WHERE id = @Id', {
                ['@Id'] = Array.accountId,
                ['@Transactions'] = json.encode(SavingsTransactions)
            })

            exports['oxmysql']:execute('UPDATE savings_accounts SET account_balance = @Balance WHERE id = @Id', {
                ['@Id'] = Array.accountId,
                ['@Balance'] = Savings[1].account_balance - Array.Amount
            })
        end
    end
end)

RPC.register('Banking:depositMoney', function(source, Array)
    local src = source
    local user = exports['Framework']:GetModule('GetPlayer')(src)

    if Array.Amount > 0 then
        if exports["Framework"]:GetCash(src) >= Array.Amount then

            if Array.Account == 'Personal Account' then
                local Personal = MySQL.query.await('SELECT * FROM characters WHERE id = @Id', {
                    ['@Id'] = user['PlayerData']['id']
                })

                PersonalTransactions = json.decode(Personal[1].Transactions)

                table.insert(PersonalTransactions, {
                    Account = 'Personal Account ' .. user['PlayerData']['id'],
                    Comment = Array.Comment,
                    Amount = Array.Amount,
                    Date = Array.Date,
                    Withdraw = false
                })

                exports["Framework"]:AddBank(src, Array.Amount)

                exports['oxmysql']:execute('UPDATE characters SET Transactions = @Transactions WHERE id = @Id', {
                    ['@Id'] = user['PlayerData']['id'],
                    ['@Transactions'] = json.encode(PersonalTransactions)
                })
            end

            if Array.Account == 'Savings Account' then
                local Savings = MySQL.query.await('SELECT * FROM savings_accounts WHERE id = @Id', {
                    ['@Id'] = Array.accountId
                })

                SavingsTransactions = json.decode(Savings[1].account_transactions)

                table.insert(SavingsTransactions, {
                    Account = 'Savings Account ' .. Array.accountId,
                    Comment = Array.Comment,
                    Amount = Array.Amount,
                    Date = Array.Date
                })

                exports['oxmysql']:execute('UPDATE savings_accounts SET account_balance = @Balance WHERE id = @Id', {
                    ['@Id'] = Array.accountId,
                    ['@Balance'] = Savings[1].account_balance + Array.Amount,
                })

                exports['oxmysql']:execute('UPDATE savings_accounts SET account_transactions = @Transactions WHERE id = @Id', {
                    ['@Id'] = Array.accountId,
                    ['@Transactions'] = json.encode(SavingsTransactions)
                })
            end

            exports["Framework"]:RemoveCash(src, Array.Amount)
        end
    end
end)