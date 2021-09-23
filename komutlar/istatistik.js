const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");
const ayarlar = require('../ayarlar.json');


exports.run = (client, message) => {
   const DBL = require('dblapi.js')
 const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc2MTU3OTI5MzEwNDQwNjU1OCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjE0MzY2MTk2fQ.mI085-_oKn3VChPMZMmqzngeRzAishsmP8hZIdz44-g', client)

  dbl.hasVoted(message.author.id).then(voted => {
    if(voted) {

//KODLAR

    const istatistikozel = new Discord.MessageEmbed()
    .setColor(0x36393F)
    .setAuthor(`${client.user.username} Bot`, client.user.avatarURL())
.setDescription(`**Dromic Bot** | İstatistik Komutu`)
  .addField(`Bot Sahibi`, `<@466212593867030528>`, )
  .addField("Sunucu Sayısı ", `${client.guilds.cache.size.toLocaleString()}`, true)
  .addField("Toplam Kullanıcı Sayısı ", `${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true)
  .addField("Ping" , `${client.ws.ping}`, true)
  .addField("Discord.js Sürümü ", `${Discord.version}`, true)  
   .addField(`Destek Sunucum`, `[Tıkla](https://discord.gg/7aZz9rAGYj)`, true)
  .addField(`Botu Davet Et`, `[Tıkla](https://discord.com/oauth2/authorize?client_id=761579293104406558&scope=bot&permissions=805314622)`, true)
    .setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
    message.channel.send(istatistikozel)
} else {
    message.channel.send(`Bu komutu kullanabilmek için botumuza oy vermelisin!https://lk.tc/rWLkW`)
  }
})
    };
    

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik', 'i', 'istatistikler', 'botbilgi', 'bilgi', 'hakkında', 'bot hakkında', 'bothakkında'],
      kategori: "Bot",
  permLevel: 0
};

exports.help = {
  name: 'bilgi',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};