const discord = require('discord.js')
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES ]
})
const /*you can have any prefix you want here*/ prefix = "?"

Client.on("ready", () => {
	console.log('literally anything you want goes here')
})

//SUPER BASIC COMMAND: BASICALLY SHOWS THAT YOUR BOT CAN SPEAK
Client.on('message', message => {
	if(message.content === (`ping`)){
    	message.channel.send('pong!');
    }
})


//EXTREMELY IMPORTANT: GET YOUR TOKEN FROM THE DISCORD DEVELOPER PORTAL
//NEVER EVER EVER EVER TELL/GIVE ANYONE YOUR TOKEN!
Client.login('');