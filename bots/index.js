const Discord = require('discord.js');
const prefix = '!';
const client = new Discord.Client({ intents : 32767 });

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('createMessage', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        if (command === 'ping') {
            message.channel.send('Pong!');
        }
    }
})

client.login('');