const discord = require('discord.js')
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES ]
})

Client.on("ready", () => {
	console.log('literally anything you want goes here')
    Client.channels.cache.get('971832700556161067').send('online and ready to smoke black tar heroin')
    Client.channels.cache.get('971832700556161067').send('https://discordapp.com/channels/971832700073832449/971832700556161067/971853551875805195')
})

Client.login('');