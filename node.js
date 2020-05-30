const discord = require("discord.js");
const bot = new discord.Client();

var guild;
var general;

bot.on("ready",()=>{
    guild = bot.guilds.get("716394235212988496");
    general = guild.channels.get("716394235212988500");
    general.send("hi guys! I'm the new personal bot for this server, please give me suggestions in the server and <@400458098612895755> might implement them :)");
});


bot.login("NzE2NDE5MzQ2MjcxODMwMDU2.XtLfiQ.tOli3UnJO3hrPvYx-P29qJInL0g");