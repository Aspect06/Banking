Actions = {
    Withdraw = function(data)
        RPC.execute('Banking:withdrawMoney', data)

        Wait(250)

        NUI.GetData();
    end,

    Deposit = function(data)
        RPC.execute('Banking:depositMoney', data)

        Wait(250)

        NUI.GetData();
    end,

    Transfer = function(data)
    end,
}