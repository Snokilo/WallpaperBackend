const Discord = require('discord.js');
const client = new Discord.Client();
const { discord: config } = require('../config/config');


module.exports.start = () => {
  client.on('ready', () => {
    client.user.setPresence({
      game: { name: config.defaultStatus },
    });
  });
  client.on('message', async (message) => {
    if (!message.guild) return;
    if (message.content.startsWith('!addImage')) {
      console.log('penis')
    } 
  });
  client.login(config.token);
};

module.exports.getUserInfo = async (discordId) => {
  var user = {}
  await client.users.fetch(discordId).then((result) => {
    user = result
  })
  return user
}
