const discord = require('discord.js')
const { createAudioResource, createAudioPlayer, joinVoiceChannel, AudioPlayerStatus} = require('@discordjs/voice');
require('dotenv').config();
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES ]
})
const /*you can have any prefix you want here*/ prefix = "?"
const player = createAudioPlayer();
const resource = createAudioResource('/var/www/new/bots/bingus.mp3');
const loop = false;

Client.on("ready", () => {
	console.log('ready to do heroin')
    Client.channels.cache.get('983823952075948062').send('online and ready to smoke black tar heroin')
})

Client.on('messageCreate', message => {
    if(message.content === `${prefix}bingus loop`) {
        loop === true
        message.channel.send('bingus loop is now on')
    }
    if(message.content === `${prefix}bingus loop off`) {
        loop === false
        message.channel.send('bingus loop is now off')
    }
    if(message.content === `${prefix}bingus join`) {
        const connection = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })

        player.play(resource);
        connection.subscribe(player)

        player.on(AudioPlayerStatus.Playing, () => {
            console.log('The audio player has started playing!');
            console.log('The audio player is currently playing: ' + player.currentTrack.title);
            console,log('loop is: ' + loop)
        });
        player.on(AudioPlayerStatus.Idle, () => {
            if(loop === true){
                player.play(resource);
                connection.subscribe(player)
            }
            console.log('The audio player has finished playing!');
        });
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