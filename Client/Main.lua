NUI = {
    SendReactMessage = function(action, data)
        SendNUIMessage({
            action = action,
            data = data,
        })
    end,

    GetData = function(Array)
        NUI.SendReactMessage('Banking:setCharacterData', {
            Name = RPC.execute('Banking:getData', { Type = 'Name' }),
            StateId = exports['Framework']:getCid(),
            Cash = RPC.execute('Banking:getData', { Type = 'Cash' }),
            savingsAvailable = Accounts.isSavingsAvailable() >= 2,
            selectedAccount = {
                accountId = Array.selectedAccountId,
                accountType = Array.selectedAccountType
            },
            Accounts = Accounts.getAccounts(),
        })
    end,

    OpenBanking = function()
        local Finished = exports['Taskbar']:TaskBar({
            length = 5000,
            text = 'Opening Banking...'
        })

        if Finished then
            NUI.GetData({
                selectedAccountId = exports['Framework']:getCid(),
                selectedAccountType = 'Personal Account'
            });

            Callbacks.SwitchAccount({
                AccountId = exports['Framework']:getCid(),
                AccountType = 'Personal Account'
            });
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