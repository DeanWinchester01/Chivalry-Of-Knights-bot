const discord = require("discord.js");
const bot = new discord.Client();

var guild;
var general;

bot.on("ready",()=>{
    guild = bot.guilds.cache.get("716394235212988496");
    general = guild.channels.cache.get("716394235212988500");
    general.send("<@everyone>");
});


bot.login("NzE2NDE5MzQ2MjcxODMwMDU2.XtLlMg.P0OALt4pqX2-66hMTErlVi6gkIs");