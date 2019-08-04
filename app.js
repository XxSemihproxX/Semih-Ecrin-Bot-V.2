const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('online oldum!');
});

bot.on('message',msg => {
    if(msg.content === 'ping') {msg.reply('Pong');}
});


bot.login('token'); "NTk3NDgxOTQwMTY1MzI4OTEy.XUWvCQ.DPPGpbhPhZ8zDZYmXe_Oi6RmQPo"
