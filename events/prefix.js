const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('nrc.db')


module.exports.run = async (client, message, args) => {

    let sıfırla = args[0]
    let p = db.fetch(`prefix_${message.guild.id}`)

  if (sıfırla == "sıfırla") {
      if (!p) return message.channel.send('Prefix ayarlamamışsınız!')
      db.delete(`prefix_${message.guild.id}`)
      message.channel.send('Tebrikler Prefix Başarıyla Eski Haline Döndü Artık Prefix **/**`')
      return;
  }

  let prefix = args.slice(0).join(" ");
  if (!prefix) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`Lütfen bir prefix belirtiniz!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
    return;
  }
  const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setDescription(`Prefix; \`${prefix}\` olarak ayarlandı!`)
      .setFooter(client.user.username, client.user.avatarURL);

    message.channel.send(embed);
  db.set(`prefix_${message.guild.id}`, prefix)
};

module.exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['prefix'],
  permLevel: 3
};

module.exports.help = {
  name: "prefix",
  description: "prefix",
  usage: "prefix"
};