  const Discord = require('discord.js');


exports.run = (client, message, params) => {
    if(message.author.id === message.guild.owner.id) {
      
            message.channel.send(new Discord.MessageEmbed().setColor('#000000').setTitle('Sunucu Kuruyorsunuz!').setDescription('Gerekli Kanallar Kurulsunmu?. **Dikkat Sunucuyu Kurduğunuzda Eski Kanallar Silinmez Elinizle Tek Tek Silmeniz Gerekir**').setFooter('Bu eylemi onaylıyorsan "evet" yazman yeterlidir.Bu eylem 30 saniye içinde sona erecek'))
.then(() => {
message.channel.awaitMessages(response => response.content === 'evet', {
max: 1,
time: 30000,
errors: ['time'],
})
.then((collected) => {
  
 message.guild.channels.create(`🔒┇Dromic-Bot`, {type : "voice"})

            message.guild.channels.create(`💫 | Sunucu Hakkında`, { type: 'category'});
   message.guild.channels.create(`📚┇kurallar`, {type : "text"})
    .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "💫 | Sunucu Hakkında")))
   message.guild.channels.create(`🔒┇rol-kazanma`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "💫 | Sunucu Hakkında")))
   message.guild.channels.create(`📊┇gelen-giden`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "💫 | Sunucu Hakkında")))

             message.guild.channels.create(`🔔 | Duyuru`, { type: 'category'});
   message.guild.channels.create(`📢┇duyuru`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔔 | Duyuru")))
   message.guild.channels.create(`📣┇video-duyuru`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔔 | Duyuru")))
   message.guild.channels.create(`🚀┇boost-basanlar`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔔 | Duyuru")))
  
          message.guild.channels.create(`🌍┇Genel Alan`, { type: 'category'});
      message.guild.channels.create(`💬┇sohbet`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🌍┇Genel Alan")))
      message.guild.channels.create(`🚨┇bot-komut`, {type : "text"})
     .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🌍┇Genel Alan")))
      message.guild.channels.create(`📷┇foto-chat`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🌍┇Genel Alan")))
      message.guild.channels.create(`🐦┇kuş-dili`, {type : "text"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🌍┇Genel Alan")))
    
              message.guild.channels.create(`🔊SES KANALLARI`, { type: 'category'});
   message.guild.channels.create(` 🎥┇Video Odası `, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔊SES KANALLARI")))
   message.guild.channels.create(`  👑┇Yönetim Özel`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔊SES KANALLARI")))
   message.guild.channels.create(` 🔉 ┇Sesli Sohbet 1`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔊SES KANALLARI")))
      message.guild.channels.create(` 🔉 ┇Sesli Sohbet 2`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔊SES KANALLARI")))
      message.guild.channels.create(` 🔉 ┇Sesli Sohbet 3`, {type : "voice"})
      .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "🔊SES KANALLARI")))

            message.guild.channels.create(`Eğlence Kanalları`, { type: 'category'});
message.guild.channels.create(`🔤┇kelime-türetmece`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "Eğlence Kanalları")))
 message.guild.channels.create(`🔢┇sayı-sayma`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "Eğlence Kanalları")))
 message.guild.channels.create(`🍬┇doğruluk-mu-cesaretlik-mi`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "Eğlence Kanalları")))
 message.guild.channels.create(`🍎┇tuttu-tutmadı`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "Eğlence Kanalları")))
  message.guild.channels.create(`✍┇özlü-bir-söz-yaz`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "Eğlence Kanalları")))
   message.guild.channels.create(`😵┇adam-asmaca`, {type : "text"})
  .then(channel => channel.setParent(message.guild.channels.cache.find(channel => channel.name === "Eğlence Kanalları")))
  message.channel.send("Gerekli kanallar kuruluyor.")
          });
});
        
    } else {
        message.channel.send(':x: **Üzgünüm ama bu komutu sadece sunucu sahibi kullanabilir!**');
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sunucu-kur","sunucukur"],
  permLevel: 3,
  kategori: "mod"
};


exports.help = {
  name: 'sunucukur',
  description: 'Sunucuyu kurar.',
  usage: 'sunucukur'
};