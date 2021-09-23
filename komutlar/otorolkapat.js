const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)

    let hgbbkanal = db.fetch(`hgbbkanal_${message.guild.id}`)

    if (hgbbkanal) {
        db.delete(`hgbbkanal_${message.guild.id}`)
        message.channel.send(`:white_check_mark: HGBB kanalı başarılı bir şekilde sıfırlandı.`)
    } else {
        if (!hgbbkanal) {

            return message.channel.send(`:warning: Bu sunucuda daha önceden ayarlanmış kanal mevcut değil. Ayarlamak için: hgbbkanal-ayarla`)

        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgbbkanal-sıfırla'],
    permLevel: 0
}

exports.help = {
    name: 'hgbbkanalsıfırla',
    description: 'HGBB kanalını sıfırlarsınız.',
    usage: 'hgbbkanalsıfırla #kanal'
}