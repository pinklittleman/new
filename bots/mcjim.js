const discord = require('discord.js')
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES ]
})

Client.on("ready", () => {
	console.log('literally anything you want goes here')
    Client.channels.cache.get('971832700556161067').send('online and ready to smoke black tar heroin')
    Client.channels.cache.get('971832700556161067').send('https://i.kym-cdn.com/entries/icons/original/000/031/279/Screen_Shot_2019-09-26_at_1.07.31_PM.jpg')
    random2()
})

function random2(){
    setInterval(() => {
        
        var time = Math.floor(Math.random()*5)
        console.log(time)
        if(time === '1'){
        
            console.log(time)
        
        }
    }, 1000);
    
}


Client.login('OTcxODM5MTg4NjA3NTg2Mzc0.Gsq0vm.jqzgbPP51sdVoE_itxGWNUslqiyuDGMIWIhBZI');