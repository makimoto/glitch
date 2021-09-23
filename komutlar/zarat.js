const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🎲 Zarın: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['3', '6', '5', '2', '1', '3', '13'];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['zar','zar-at'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'zarat',
  description: 'Zar Atın',
  usage: 'zarat'
};