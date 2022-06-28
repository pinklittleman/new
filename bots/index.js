const discord = require('discord.js')
require('dotenv').config();
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES ]
})
const /*you can have any prefix you want here*/ prefix = "?"

Client.on("ready", () => {
	console.log('ready to do heroin')
    Client.channels.cache.get('983823952075948062').send('online and ready to smoke black tar heroin')
})

const { joinVoiceChannel } = require('@discordjs/voice');
Client.on('messageCreate', message => {
    if(message.content === `${prefix}bingus join`) {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).then(connection => {
            connection.play('./bingus.mp3')
        })

    }
})

//SUPER BASIC COMMAND: BASICALLY SHOWS THAT YOUR BOT CAN SPEAK
Client.on('messageCreate', message => {
	if(message.content === (`ping`) || message.content === ('Ping')){
    	message.reply({content:'pong hehehe'});
        message.react('👍')
        message.author.send('I AM IN YOUR WALLS');
    }
})


//EXTREMELY IMPORTANT: GET YOUR TOKEN FROM THE DISCORD DEVELOPER PORTAL
//NEVER EVER EVER EVER TELL/GIVE ANYONE YOUR TOKEN!
Client.login(process.env.DISCORD_TOKEN);