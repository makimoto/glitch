const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const ömüş = new Discord.MessageEmbed()
  .setTitle("Dromic Bot | Davet Linkleri ")
  .setColor("RANDOM")
    .addField("**Botun Sahibi**", "<@!849729498889977917>")
    .addField("** Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/MxNEuRXmru)", )
    .addField("** Davet Linki**", " [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=761579293104406558&scope=bot&permissions=805314622)", )
  .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
  message.channel.send(ömüş);  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
};