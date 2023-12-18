Accounts = {
    getAccounts = function()
        local Accounts = RPC.execute('Banking:getAccounts')
        return Accounts
    end,

    isSavingsAvailable = function()
        return #RPC.execute('Banking:isSavingsAvailable')
    end
}