const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot,message,args) => {
        
    let BanedUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    if(!BanedUser) {
        return message.channel.send('L\'utilisateur n\'a pas été trouver !')
    }

    let BanReason = args.join(' ').slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) {
        return message.channel.send('Vous n\'avez pas la permission !')
    if(!BanReason) BanReason = "Aucune raison"
    }
    if(BanedUser.hasPermission('BAN_MEMBERS')) {
        return message.channel.send("Vous ne pouvez pas bannir un membre du staff !")
    }

    let BanEmbed = new MessageEmbed()
    .setDescription('Bannisement')
    .setColor('RANDOM')
    .addField('Membre banni', `${BanedUser} (ID: ${BanedUser.id})`)
    .addField('bani par :', `${message.author} (ID/ ${message.author.id})`)
    .addField('Raison :', BanReason)
    
    let BanChannel = message.guild.channels.cache.get('797333656770707486')
    if(!BanChannel) {
        return message.channel.send('Le salon 【🧾】logs-staff n\'a pas été trouver !')
    }

    message.guild.member(BanedUser).ban(BanReason)
    BanChannel.send(BanEmbed)
}

module.exports.config = {
    name: 'ban'
}