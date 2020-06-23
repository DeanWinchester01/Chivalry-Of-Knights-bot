const discord = require("discord.js");
const bot = new discord.Client();
var server;
var general;
var array = [1="one",2="two",3="three",4="four",5="five",6="six",7="seven",8="eight",9="nine"];

bot.on("ready",()=>{
    server = bot.guilds.cache.get("716394235212988496");
    general = server.channels.cache.get("716394235212988500");
    console.log("ready");
});

bot.on("message",message=>{
    var world = server.member("400458098612895755");
    if(!message.guild){
        if(message.content.startsWith("-suggest")){
            var suggestion = message.content.slice(9);
            world.send(message.author.username+" made the suggestion\n"+suggestion).then(()=>message.channel.send("Thank you for your suggestion"));
        }
    }
    if(message.content.startsWith("-poll")){
        var words = message.content.split(" ");
        if(Number(words[1])){
            for(var i = 1; i < Number(words[1]); i++){
                message.guild.channels.cache.get("717158666125705246").send(array[i]);
            }
        }else{
            message.react("👍").then(()=>{
                message.react("👎")
            });
        }
    }
    if(message.content.startsWith("-lua")){
        var message_to_send = message.content.slice(4);
        message.delete();
        message.channel.send("Posted by "+message.member.displayName+"\n\`\`\`lua\n"+message_to_send+"\n\`\`\`");
    }
    if(message.content.startsWith("-js")){
        var message_to_send = message.content.slice(3);
        message.delete();
        message.channel.send("Posted by "+message.member.displayName+"\n\`\`\`js\n"+message_to_send+"\n\`\`\`");
    }
    if(message.content.startsWith("-html")){
        var message_to_send = message.content.slice(5);
        message.delete();
        message.channel.send("Posted by "+message.member.displayName+"\n\`\`\`html\n"+message_to_send+"\n\`\`\`");
    }
});


bot.login("NzE2NDE5MzQ2MjcxODMwMDU2.XtLlMg.P0OALt4pqX2-66hMTErlVi6gkIs");