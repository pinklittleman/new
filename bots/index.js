const Discord = require('discord.js');
const prefix = '!';
const client = new Discord.Client({ intents : 32767 });

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('createMessage', async message => {
    function isCommand(command){
        return !!message.content.toLowerCase().startsWith(prefix + command);
    }
    if(isCommand('ping')){
        const channel = message.member.voice.channel;
        message.channel.send('Pong!');
    }
})

client.login('');