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

        Callbacks.SwitchAccount({
            AccountId = exports['Framework']:getCid(),
            AccountType = 'Personal Account'
        });
    end,

    OpenBanking = function()
        local Finished = exports['Taskbar']:TaskBar({
            length = 5000,
            text = 'Opening Banking...'
        })

        if Finished then
            NUI.GetData();
            NUI.SendReactMessage('Banking:Open');
            SetNuiFocus(true, true);
        end
    end,

    CloseBanking = function()
        SetNuiFocus(false, false)
    end
}

RegisterNUICallback('Banking:Close', function()
    NUI.CloseBanking();
end)

RegisterCommand('OpenBanking', function()
    NUI.OpenBanking();
end)