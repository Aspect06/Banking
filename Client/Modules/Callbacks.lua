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