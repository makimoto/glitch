const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if (!args[0]) return message.channel.send("**Lütfen Bir Rol Girin!**")
        let rol = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!rol) return message.channel.send("**Lütfen Geçerli Bir Rol Girin!**");

        const bahset = {
            false: "Hayır",
            true: "Evet"
        }

        let enes = new MessageEmbed()
            .setColor("#00ff00")
            .setAuthor("Rol Bilgi")
            .setThumbnail(message.guild.iconURL())
            .addField("**Rol ID**", `\`${rol.id}\``, true)
            .addField("**Rol İsmi**", rol.name, true)
            .addField("**Renk Kodu**", rol.hexColor)
            .addField("**Sahip Üyeler**", rol.members.size)
            .addField("**Poziyon**", rol.position)
            .addField("**Bahsedilebilir**", bahset[rol.mentionable])
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(enes);
    }
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['rolbilgi'],
  permLevel: 0
};

exports.help = {
  name: 'Rolbilgi',
  description: 'Rol Hakkında Bilgi Verir.',
  usage: 'rolbilgi'
};