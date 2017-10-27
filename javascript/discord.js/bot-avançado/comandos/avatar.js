exports.run = (client, message, arg) => {
  let user = message.mentions.users.first() || message.author;
  let avatar = user.avatarURL
      const Discord = require('discord.js');
          const embed = new Discord.RichEmbed()
          .setDescription(':frame_photo: **Avatar de ' + user + `** \n Clique [aqui](${message.author.avatarURL}) para ver o avatar melhor!`)
          .setImage(avatar)
          .setColor(0xffff)
          message.channel.send({embed: embed});
}
