const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var prefix = ayarlar.prefix;

//////////////prefix//////////////
  var prefix = ayarlar.prefix;

  client.on('message', message => {
      if (message.content === `<@${client.user.id}>`) {
      message.reply(`Prefix'im: **d!**!`)
      }
      });

//////////////prefix//////////////

client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

//---------------------Sa-As---------------------------------\\

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa') {
        msg.reply('Aleyküm Selam Hoşgeldin!');
      }
      }
    });
client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'selam') {
        msg.reply('Aleyküm Selam Hoşgeldin!');
      }
      }
    });

//---------------------Sa-As---------------------------------\\

//---------------------Otorol---------------------------------\\
client.on('guildMemberAdd', async (member, guild, message) => {
    let hgbbkanal = await db.fetch(`hgbbkanal_${member.guild.id}`)

    if (!hgbbkanal) return

    var embed = new Discord.MessageEmbed()
        .setDescription(`<@!${member.user.id}> sunucumuza katıldı :hugging:`)
        .setColor('RANDOM') 
    member.guild.channels.get(hgbbkanal).send(embed)
})

client.on('guildMemberRemove', async (member, guild, message) => {
    let hgbbkanal = await db.fetch(`hgbbkanal_${member.guild.id}`)

    if (!hgbbkanal) return

    var embed = new Discord.MessageEmbed()
        .setDescription(`<@!${member.user.id}> sunucumuzdan ayrıldı :frowning:`)
        .setColor('RANDOM') 
    member.guild.channels.get(hgbbkanal).send(embed)
})
//---------------------Otorol-Bitiş--------------------------------\\

    //----------------------Sahibim-------------------------------------------------//
  //kod PoyrazFTW tarafından yazılmıştır 
  client.on("message", async message => {
      const ms = require('parse-ms')
      let dogrulama = await db.fetch(`sahiponay_${message.author.id}_${message.guild.id}`);
        let gun = 1800000; 
        if (dogrulama !== null && gun - (Date.now() - dogrulama) > 0) {
          
        } else {
              if(message.author.id === ayarlar.sahip){
              db.set(`sahiponay_${message.author.id}_${message.guild.id}`, Date.now())
                message.channel.send("Ooo Sahibimde Burdaymış <@730096504647188531> Hoşgeldin Usta 😋").then(msg => msg.delete (15000))
                }
            }
          
    }); 
    //--------------------------Sahibim Bitiş----------------------------------------//  

////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);//bot sende kafana göre istediğini yap - Ömer Faruk  AYVAZ

client.login(process.env.token); 

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token); //.env Token Olduğu Yer Ellleme

