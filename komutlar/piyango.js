const Discord = require ("discord.js")
const client = new Discord.Client();


exports.run = (client, message) => {
  
  message.channel.send("Bakalım Büyük Ödülü Kazanabilecek Misin...").then(message => {
  var sonuçlar = ["Tebrikler, Piyangodan 100.000.000€ Kazandınız!", "Maalesef 1 Kuruş Kazandınız, Umarız Bir Daha Ki Sefere Piyango Çıkar..."]
  var sonuç = sonuçlar[Math.floor(Math.random() * sonuçlar.length)];
    message.edit(`${sonuç}`);
  
 
  
  
  });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "piyango",
  description: "piyango işte ne sandın",
  usage: "piyango"
};