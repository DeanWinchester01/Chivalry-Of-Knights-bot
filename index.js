const discord = require("discord.js");
const bot = new discord.Client();

var guild;
var general;

bot.on("ready",()=>{
    guild = bot.guilds.cache.get("716394235212988496");
    general = bot.guild.channels.cache.get("716394235212988500");
    general.send("hi guys! I'm the new personal bot for this server, please give me suggestions in the server and <@400458098612895755> might implement them :)");
});


bot.login("NzE2NDE5MzQ2MjcxODMwMDU2.XtLlMg.P0OALt4pqX2-66hMTErlVi6gkIs");