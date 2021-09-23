const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Dragon | :loading: Renk Yükleniyor.').then(message => {
      var espriler = ['Kırmızı','Mavi','Beyaz.','Siyah.','Lacivert.','Sarı.','Mor.','Pembe.','Yeşil.','Camgöbeği.','Turuncu.','Eflatun.','Bordo.','Kahverengi.','Deniz mavisi.','Gri.'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rastgele-renk', 'renk-seç', 'seç-renk', 'seçbi-renk'],
  permLevel: 0
};

exports.help = {
  name: 'şanslırengim',
  description: 'Espri yapar.',
  usage: 'rastgele-renk'
}; 