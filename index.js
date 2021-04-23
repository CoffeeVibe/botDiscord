const Discord = require('discord.js');
const client = new Discord.Client();
const {token, prefix} = require('./config.json') 

client.on("ready",() =>{
	console.log("Bot On")

	client.user.setPresence({
		statut:"online", 
		activity:{
			name: "membre :", 			type:"LISTENING"
		}
	}) 
});

client.on("message", message => {
	if(!message.content.startsWith(prefix)) return;
	if(message.author.bit) return;
		
	if(message.content === prefix + "ping") {
	message.channel.send("pong") 
	}
	if(message.content === prefix + 'a') {
		if(message.author.id !== "300335147377623041") return message.reply("Tu n'as pas l'autorisation d'utiliser cette commande")
	message.channel.send("b") 
	}
	if(message.content === prefix + "help"){
		
		const embedhelp = new Discord.MessageEmbed() 
		.setColor("#CD5C5C")
		.setTitle("Aide")
		.setAuthor(message.author.username,message.author.avatarURL({dynamic: true}))
		.setDescription("Voici les commandes disponibles.")
		.setThumbnail(client.user.avatarURL())
		.addField("Mes commandes :","!ping,a",true)
		.setFooter("Bot créé par Kyuuu",client.user.avatarURL())
		.setTimestamp() 
		
		message.channel.send(embedhelp)
		}
})

client.on("guildMemberAdd", async member => {
  let channel = member.guild.channels.cache.get("834865473320910888");
	if (!channel) return;

  channel.send({embed: { color: "RANDOM", description: `${member} **est entrée dans le café, installe toi et commande quelque chose !**`}});
  
let role = member.guild.roles.cache.find(role => role.id === "833303713011466250");
		member.roles.add(role);
});

client.login(process.env.TOKEN);