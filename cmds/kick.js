const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot,message,args) => {
        
    let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!kickedUser) {
        return message.channel.send('L\'utilisateur n\'a pas été trouver !')
    }

    let kickReason = args.join(' ').slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send('Vous n\'avez pas la permission !')
    if(!kickReason) kickReason = "Aucune raison"
    }
    if(kickedUser.hasPermission('KICK_MEMBERS')) {
        return message.channel.send("Vous ne pouvez pas exclure un membre du staff !")
    }

    let kickEmbed = new MessageEmbed()
    .setDescription('Expulsion')
    .setColor('RANDOM')
    .addField('Membre expulsé', `${kickedUser} (ID: ${kickedUser.id})`)
    .addField('Expulsé par :', `${message.author} (ID/ ${message.author.id})`)
    .addField('Raison :', kickReason)
    
    let kickChannel = message.guild.channels.cache.get('797333656770707486')
    if(!kickChannel) {
        return message.channel.send('Le salon 【🧾】logs-staff n\'a pas été trouver !')
    }

    message.guild.member(kickedUser).kick(kickReason)
    kickChannel.send(kickEmbed)
}

module.exports.config = {
    name: 'kick'
}