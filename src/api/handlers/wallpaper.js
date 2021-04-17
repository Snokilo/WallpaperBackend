const { imageModel, userModel } = require('../../config/models');
const { getUserInfo: getDiscordUserInfo } = require('../../discord/app')

module.exports.createWallpaper = async (request, h) => {
 try {
  const image = await createImage(request.payload.url, request.payload.discordId);
  return h.response(image).code(200);
 } catch (error) {
  return h.response(error).code(500)
 }
}


const createImage = async (url, discordId) => {
 const userId = await getUserId(request.payload.discordId)
 //TODO verification no duplicate, no troll, etc.
 const imageCreated = await imageModel.create({ url, userId });
 return imageCreated;
}

const getUserId = async (discordId) => {
 let userId = null;
 if(discordId){
  const { id, username, avatar } = await getDiscordUserInfo(discordId);
  await userModel.findOne({discordId}).then(async (res) => {
   if(res){
    if(res.discordName != username || res.discordImage != avatar){ updateUserDiscord(res._id, username, avatar) }
    userId = res._id
   }
   else{
    await userModel.create({discordId: id, discordName: username, discordImage: avatar}).then((res) => {
     userId = res._id
    }).catch(err => console.log(err))
   }
  }).catch((err) => {
   console.log(err)
  })
 }
 return userId
}

const updateUserDiscord = async (userId, username, avatar) => {
 userModel.findByIdAndUpdate({ _id: userId },{ discordName: username, discordImage: avatar, updatedAt: Date.now }).then((res) => {}).catch(err => console.log(err))
}