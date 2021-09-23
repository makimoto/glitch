const Discord = require ("discord.js")

exports.run = async (client, message, args) => {
  
  var durumlar = [new Discord.MessageEmbed().setColor("RANDOM").setDescription("**Olamaz! Şarjın Yok :/**"), new Discord.MessageEmbed().setColor("RANDOM").setDescription("**Bilgisayara Bakıyorsun...**").setImage("https://i.giphy.com/media/l3vR85PnGsBwu1PFK/giphy.gif"), new Discord.MessageEmbed().setColor("RANDOM").setDescription("**Olamaz! Ekran Kartın Patladı :/**")]
  var durum = durumlar[Math.floor(Math.random() * durumlar.length)];
  message.channel.send(durum)
    }



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bigisayarabak", "oyun-oyna", "oyunoyna", "bilgisayar"],
  permLevel: 0
}

exports.help = {
  name: "bilgisayara-bak",
  description: "Bilgisayara Bakarsınız..",
  usage: "bilgisayara-bak"
}