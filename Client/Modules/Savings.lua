Savings = {
    Create = function(data)
        RPC.execute('Banking:createSavings', {
            Name = data.Name
        })

        Wait(500)

        NUI.GetData();
    end,

    deleteAccount = function(data)
        RPC.execute('Banking:deleteSavings', {
            Id = data.accountId
        })

        Wait(500)

        NUI.GetData();
    end,

    addAccess = function(data)
        RPC.execute('Banking:addAccountAccess', data)
    end,

    removeAccess = function(data)
        RPC.execute('Banking:removeAccountAccess', data)
    end,

    getAccess = function(data)
        NUI.SendReactMesage('Banking:setAccountAccess', RPC.execute('Banking:getAccountAccess', data))
    end
}