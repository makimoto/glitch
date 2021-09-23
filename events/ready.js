//READY CODE
const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'bot prefix'
module.exports = client => {
  
  const aktiviteListesi = [
    `BAKIMDA!`, 
    
  ]

  client.user.setStatus('online')
  //dnd 
  //idle
  //online
  //offline
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite], { type: 'PLAYING'}); 
  }, 5000)
}


//  WATCHING :  izliyor
//  LISTENING :  dinliyor
//  PLAYING  :  oynuyor
// available : YAYINDA