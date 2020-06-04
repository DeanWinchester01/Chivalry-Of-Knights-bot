local discordia = require("discordia")
local client = discordia.Client()
local token = "NzE3OTcwODAyMzE3NzIxNjUy.XtiEcA.VniGY1f2FQL9mDKPJSp2UBIiQpo"
client:on("messageCreate",function(message))
    if message.content == "test" then
        message.channel:send("This was a success")
    end
end)
client:run("Bot "..token)