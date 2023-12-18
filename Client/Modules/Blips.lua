local BankBlips = {
    {name = "Bank", id = 108, x = 150.266, y = -1040.203, z = 29.374},
    {name = "Bank", id = 108, x = -1212.980, y = -330.841, z = 37.787},
    {name = "Bank", id = 108, x = -2962.582, y = 482.627, z = 15.703},
    {name = "Bank", id = 108, x = 314.187, y = -278.621, z = 54.170},
    {name = "Bank", id = 108, x = -351.534, y = -49.529, z = 49.042},
    {name = "Bank", id = 108, x = 243.25128, y = 224.68969, z = 106.28698},
    {name = "Bank", id = 108, x = 1176.0833740234, y = 2706.3386230469, z = 38.157722473145},
    {name = "Bank", id = 108, x = -112.09, y = 6470.12, z = 31.63},
}

Citizen.CreateThread(function()
    for _, item in pairs(BankBlips) do
        item.blip = AddBlipForCoord(item.x, item.y, item.z)
        SetBlipSprite(item.blip, item.id)
        SetBlipScale(item.blip, 0.7)
        SetBlipColour(item.blip, 2)
        SetBlipAsShortRange(item.blip, true)
        BeginTextCommandSetBlipName("STRING")
        AddTextComponentString(item.name)
        EndTextCommandSetBlipName(item.blip)
    end
end)