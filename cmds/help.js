const { MessageEmbed, Message } = require('discord.js');
const { prefix } = require('../db/config.json')

module.exports.run = async (bot,message,args) => {
        
    if(args[0] == "help") return message.channel.send(`Vous devez faire : ${prefix}help.`);

    if(args[0]) {
        let command = args[0];
        if(bot.command.has (command)) {
            command = bot.commands.get(command)
            let Hembed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(`Air Publicity 🛫 | Help`, message.guild.iconURL({dynamic: true, size: 52}))
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
            .setDescription(`Préfix du bot : \`${prefix}\`\n\n`)
            message.channel.send(Hembed)
    }}

    let cmdmember = `\`help\` \`userinfo\` \`serverinfo\``
    let cmdadmin = `Aucune pour le moment !`
    if(!args[0]) {
        message.delete()
        let embed = new MessageEmbed()
        .setAuthor(`Commande d'aide`, message.guild.iconURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
        .setDescription(`${message.author.username} va voir tes MP's !`)

        let Hembed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`Air Publicity 🛫 | Help`, message.guild.iconURL({dynamic: true, size: 512}))
        .setThumbnail(bot.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Voici toutes les commandes disponibles : \`${bot.user.username}\` \n Le préfix du bot est : \`${prefix}\``)
        .addField('Commande membres :', cmdmember)
        .addField('Commande administrateurs :', cmdadmin)
        .setFooter('Air Publicity 🛫 | Help', bot.user.displayAvatarURL({dynamic: true, size: 512}))
        message.channel.send(embed)
        .then(m => m.delete(5000))
        .catch(() => message.channel.send('La personne à désactiver ses MPs !'))
        message.author.send(Hembed)
    }
}

module.exports.config = {
    name: 'help'
}