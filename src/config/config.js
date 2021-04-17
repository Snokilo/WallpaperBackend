require('dotenv').config()
module.exports = {
 discord : {
  token: process.env.DISCORDTOKEN,
  defaultStatus: 'Snokilo 😎😎'
 },
 mongo : {
  user : process.env.MONGOUSER || 'root',
  password: process.env.MONGOPASSWORD || 'root',
  name: 'wallpaper'
 },
 server : { "host": "localhost", "port": 3004 }
};