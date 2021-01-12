const Discord = require('discord.js')

module.exports.run = async (bot,message,args) => {
        
        let UserEmbed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true, size: 512}))
        .addField('Nom de l\'utilisateur', `${message.author.username}`)
        .addField('Tag', message.author.discriminator)
        .addField('ID', message.author.id)
        .addField('Statut', message.author.presence.status)
        .addField('Compte créer le', message.author.createdAt)
        .setFooter('Vos informations')

        message.channel.send(UserEmbed)

}

module.exports.config = {
    name: 'userinfo'
}