const { start: api } = require('./api/app');
const { start: discordBot } = require('./discord/app');

api();
discordBot();