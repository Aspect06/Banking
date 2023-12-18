Savings = {
    Create = function(data)
        RPC.execute('Banking:createSavings', {
            Name = data.Name
        })

        Wait(500)

        NUI.GetData();
    end
}