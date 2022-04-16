const Discord = require('discord.js');
const client = new Discord.Client();
const /*you can have any prefix you want here*/ prefix = "?"

client.on("ready", () => {
	console.log('literally anything you want goes here')
})

//SUPER BASIC COMMAND: BASICALLY SHOWS THAT YOUR BOT CAN SPEAK
client.on('message', message => {
	if(message.content.startsWith(`${prefix}ping`)){
    	message.channel.send('pong!');
    }
})


//EXTREMELY IMPORTANT: GET YOUR TOKEN FROM THE DISCORD DEVELOPER PORTAL
//NEVER EVER EVER EVER TELL/GIVE ANYONE YOUR TOKEN!
client.login('OTQ3MzA3NzI1ODc0OTMzNzkw.YhrXEQ.67HNKVIH3n1HxLoPHdjJuRP7xa4');