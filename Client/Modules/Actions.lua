Actions = {
    Withdraw = function(data)
        RPC.execute('Banking:withdrawMoney', data)

        Wait(250)

        Callbacks.SwitchAccount({
            AccountId = data.accountId,
            AccountType = data.Account
        })

        NUI.GetData({
            selectedAccountId = data.accountId,
            selectedAccountType = data.Account
        });
    end,

    Deposit = function(data)
        RPC.execute('Banking:depositMoney', data)

        Wait(250)

        Callbacks.SwitchAccount({
            AccountId = data.accountId,
            AccountType = data.Account
        })

        NUI.GetData({
            selectedAccountId = data.accountId,
            selectedAccountType = data.Account
        });
    end,

    Transfer = function(data)
    end,
}