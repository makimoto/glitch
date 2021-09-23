const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`:warning: Bunu yapabilmek için gerekli yetkiye sahip değilsiniz!`)

    let hgbbkanal = db.fetch(`hgbbkanal_${message.guild.id}`)

    if (!hgbbkanal) {
        let kanal = message.mentions.channels.first();
        if (!kanal) return message.reply(`:question: Mesajların yollanacağı kanalı belirtmediniz`)

        db.set(`hgbbkanal_${message.guild.id}`, kanal.id)
        message.channel.send(`:white_check_mark: HGBB kanalı başarılı bir şekilde ${kanal} olarak ayarlandı.`)

    } else {
        if (hgbbkanal) {

            return message.channel.send(`:warning: Bu sunucuda daha önceden ayarlanmış kanal mevcut. Sıfırlamak için: hgbbkanal-sıfırla`)

        }
    }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['hgbbkanal-ayarla'],
    permLevel: 0
}

exports.help = {
    name: 'hgbbkanalayarla',
    description: 'HGBB kanalını ayarlarsınız.',
    usage: 'hgbbkanalayarla #kanal'
}