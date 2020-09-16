const Discord = require('discord.js')
var jimp = require('jimp');
const db = require("quick.db")

module.exports.run = async (bot, message, args) => {

	let permission = message.member.hasPermission("ADMINISTRATOR");

if(!permission) return message.channel.send("You are missing the permission *ADMINISTRATOR*")

 let cArgs = args[0]
 
 if(isNaN(cArgs)) return message.channel.send("**YOU MUST ENTER A SPECIFIC CHANNEL ID FOR THE WELCOME CHANNEL !**")
	 
 try{
	 bot.guilds.get(message.guild.id).channels.get(cArgs).send("**WELCOME CHANNEL SET**")
	 
 db.set(`${message.guild.id}`, cArgs)
 
 message.channel.send("**WELCOME CHANNEL SET TO **<#" + cArgs + ">")
return;
 }catch(e){
	return message.channel.send("Error: missing permissions or channel doesn't exist")
 }
 
 
}
module.exports.help = {
  name: "setup"
}
