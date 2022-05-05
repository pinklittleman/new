const discord = require('discord.js')
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES ]
})

Client.on("ready", () => {
	console.log('literally anything you want goes here')
    Client.channels.cache.get('964284632390578196').send('online and ready to smoke black tar heroin')
})