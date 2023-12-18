NUI = {
    SendReactMessage = function(action, data)
        SendNUIMessage({
            action = action,
            data = data,
        })
    end,

    GetData = function()
        NUI.SendReactMessage('Banking:setCharacterData', {
            Name = RPC.execute('Banking:getData', { Type = 'Name' }),
            StateId = exports['Framework']:getCid(),
            Cash = RPC.execute('Banking:getData', { Type = 'Cash' }),
            savingsAvailable = Accounts.isSavingsAvailable() >= 2,
            selectedAccount = {
                accountId = exports['Framework']:getCid(),
                accountType = 'Personal Account'
            },
            Accounts = Accounts.getAccounts(),
        })
    end,

    OpenBanking = function()
        NUI.GetData();
        NUI.SendReactMessage('Banking:Open');
        Callbacks.getPersonalTransactions();
        SetNuiFocus(true, true)
    end,

    CloseBanking = function()
        SetNuiFocus(false, false)
    end
}

RegisterNUICallback('Banking:Close', function()
    NUI.CloseBanking();
end)