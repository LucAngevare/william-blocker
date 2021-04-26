const Discord = require('discord.js');
const client = new Discord.Client();
let WilliamStalker = require(`./commands/${command}.js`);

//Automaticlly abort all operations if a William is online
WilliamStalker.blockWilliam(Discord, client);

//Manually check if a William is online
console.log(WilliamStalker.checkWilliam(Discord, client))

client.login('sample token')