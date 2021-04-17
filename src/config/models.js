const Mongoose = require("mongoose");
const { mongo } = require('./config')
Mongoose.connect(`mongodb://${mongo.user}:${mongo.password}@127.0.0.1:27017/${mongo.name}?authSource=admin&w=1`, {useNewUrlParser: true, useUnifiedTopology: true});

exports.imageModel = Mongoose.model("images", {
 url: String,
 userId: String,
 title: { type: String, default: null },
 date: { type: Date, default: Date.now },
 status: { type: Number, default: 0 },
});

exports.userModel = Mongoose.model("user", {
 discordId: String,
 discordName: String,
 discordImage: String,
 status: { type: Number, default: 0 },
 createdAt: { type: Date, default: Date.now },
 updatedAt: { type: Date, default: null },
});
