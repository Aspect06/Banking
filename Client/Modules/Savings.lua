Savings = {
    Create = function(data)
        RPC.execute('Banking:createSavings', {
            Name = data.Name
        })

        Wait(500)

        NUI.GetData({
            selectedAccountId = exports['Framework']:getCid(),
            selectedAccountType = 'Personal Account'
        });
    end,

    deleteAccount = function(data)
        RPC.execute('Banking:deleteSavings', {
            Id = data.accountId
        })

        Wait(500)

        NUI.GetData({
            selectedAccountId = exports['Framework']:getCid(),
            selectedAccountType = 'Personal Account'
        });
    end,

    addAccess = function(data)
        RPC.execute('Banking:addAccountAccess', data)
    end,

    removeAccess = function(data)
        RPC.execute('Banking:removeAccountAccess', data)
    end,

    getAccess = function(data)
        local Access = RPC.execute('Banking:getAccountAccess', data)
        NUI.SendReactMessage('Banking:setAccountAccess', Access)
    end
}