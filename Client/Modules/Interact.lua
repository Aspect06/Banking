Interact = {
    BankPeds = {},

    SpawnPeds = function()
        for k, v in ipairs(Interact.BankPeds) do
            exports['Target']:SpawnPed({
                model = v.model,
                coords = v.coords,
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