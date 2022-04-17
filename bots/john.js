const discord = require('discord.js')
const Client = new discord.Client({
  intents: [ discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_VOICE_STATES ]
})
const /*you can have any prefix you want here*/ prefix = "?"

Client.on("ready", () => {
	console.log('literally anything you want goes here')
    Client.channels.cache.get('964284632390578196').send('online and ready to smoke black tar heroin')
})

let resource = createAudioResource(createReadStream(join(__dirname, 'hell.mp3')));
const player = createAudioPlayer();

const { joinVoiceChannel } = require('@discordjs/voice');
Client.on('messageCreate', message => {
    if(message.content === `${prefix}bingus join`) {
        joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        })

        connection.subscribe(player);
            player.play(resource)
            console.log("done");
    }
})

//SUPER BASIC COMMAND: BASICALLY SHOWS THAT YOUR BOT CAN SPEAK
Client.on('messageCreate', message => {
	if(message.content === (`ping`) || message.content === ('Ping')){
    	message.reply({content:'pong hehehe'});
        message.react('👍')
        // message.author.send('I AM IN YOUR WALLS');
    }
})


//EXTREMELY IMPORTANT: GET YOUR TOKEN FROM THE DISCORD DEVELOPER PORTAL
//NEVER EVER EVER EVER TELL/GIVE ANYONE YOUR TOKEN!
Client.login('');