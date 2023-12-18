Callbacks = {
    SwitchAccount = function(data)
        NUI.SendReactMessage('Transactions:setTransactions', {
            Transactions = RPC.execute('Banking:getTransactions', {Account = data.AccountType, Id = data.AccountId})
        })
    end,

    getPersonalTransactions = function()
        NUI.SendReactMessage('Transactions:setTransactions', {
            Transactions = RPC.execute('Banking:getTransactions', {Account = 'Personal Account'})
        })
    end,
}

RegisterNUICallback('swapAccount', function(DATA)
    Callbacks.SwitchAccount(DATA);
end)

RegisterNUICallback('createSavings', function(DATA)
    Savings.Create(DATA)
end)

RegisterNUICallback('Banking:deleteSavings', function(DATA)
    Savings.deleteAccount(DATA);
end)

RegisterNUICallback('Banking:addSavingsAccess', function(DATA)
    Savings.addAccess(DATA)
end)

RegisterNUICallback('Banking:getAccountAccess', function(DATA)
    Savings.getAccess(DATA)
end)

RegisterNUICallback('Banking:removeSavingsAccount', function(DATA)
    Savings.removeAccess(DATA)
end)

RegisterNUICallback('Banking:depositMoney', function(DATA)
    Actions.Deposit(DATA)
end)

RegisterNUICallback('Banking:withdrawMoney', function(DATA)
    Actions.Withdraw(DATA)
end)

RegisterNUICallback('Banking:transferMoney', function(DATA)
    Actions.Transfer(DATA)
end)