Interact = {
    BankPeds = {
        vector4(149.3798, -1042.03, 29.36798, 334.9853),
        vector4(-1211.998, -331.9554, 37.78091, 21.04107),
        vector4(-2961.048, 482.9393, 15.697, 79.82337),
        vector4(313.7743, -280.4581, 54.16467, 339.9439),
        vector4(-351.357, -51.26687, 49.03653, 336.766),
        vector4(258.5535, 227.6291, 106.2822, 152.7807),
        vector4(1175.012, 2708.217, 38.08797, 177.2182),
        vector4(-111.1742, 6469.98, 31.62672, 130.0418)
    },

    SpawnPeds = function()
        for k, v in ipairs(Interact.BankPeds) do
            exports['Target']:SpawnPed({
                model = "cs_bankman",
                coords = v,
                minusOne = true,
                freeze = true,
                invincible = true,
                blockevents = true,
                target = {
                    options = {
                        {
                            label = "Open Banking",
                            action = function()
                                NUI.OpenBanking();
                            end,
                        },
                        {
                            label = "Collect Paycheck",
                        },
                    },
                    distance = 2.5,
                },
                spawnNow = true,
            })
        end
    end
}

Citizen.CreateThread(function()
    Interact.SpawnPeds()
end)