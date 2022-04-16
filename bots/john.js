const discord = require('discord.js')
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES ]
})
const /*you can have any prefix you want here*/ prefix = "?"

Client.on("ready", () => {
	console.log('literally anything you want goes here')
    Client.channels.cache.get('964284632390578196').send('online and ready to smoke black tar heroin')
})

//SUPER BASIC COMMAND: BASICALLY SHOWS THAT YOUR BOT CAN SPEAK
Client.on('message', message => {
	if(message.content === (`ping`) || message.content === ('Ping')){
    	message.reply({content:'pong hehehe'});
        message.react('👍')
        message.author.send('I AM IN YOUR WALLS');
        const channel = Client.channels.cache.get("964296416149270658");
        channel.join()
    }
})


//EXTREMELY IMPORTANT: GET YOUR TOKEN FROM THE DISCORD DEVELOPER PORTAL
//NEVER EVER EVER EVER TELL/GIVE ANYONE YOUR TOKEN!
Client.login('');