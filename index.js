const discord = require("discord.js");
const bot = new discord.Client();

var server;
var general;

bot.on("ready",()=>{
    server = bot.guilds.cache.get("716394235212988496");
    general = server.channels.cache.get("716394235212988500");
    general.sennd("I've been updated a bit, so now if you want to suggest commands then you will need to dm them to me (this is to make it so the channels dont get filled with commands if there comes a lot)")
});

bot.on("message",message=>{
    var guild = message.guild;
    var world = server.member("400458098612895755");
    if(!message.guild){
        if(message.content.startsWith("-suggest")){
            var suggestion = message.content.slice(9);
            world.send(message.author.username+" made the suggestion\n"+suggestion).then(()=>message.channel.send("Thank you for your suggestion"));
        }
    }
});


bot.login("NzE2NDE5MzQ2MjcxODMwMDU2.XtLlMg.P0OALt4pqX2-66hMTErlVi6gkIs");