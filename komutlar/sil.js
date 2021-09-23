const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(`**Lütfen Silinicek Mesaj Miktarını (1-100) Yazın!**`);
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Sildim. `).then(msg => msg.delete(10000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil','temizle','süpür'],
  permLevel: 1,
};

exports.help = {
  name:'temizle',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'temizle <silinicek mesaj sayısı>'
};