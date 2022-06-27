const Discord = require('discord.js');
const prefix = '!';
const client = new Discord.Client({ intents : ['GUILDS', 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS'] });

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('createMessage', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).split(/ +/);
        const command = args.shift().toLowerCase();
        if (command === 'ping') {
            message.channel.send('Pong!');
        }
    }
})