'use strict';
const Hapi = require("@hapi/hapi");
const Joi = require("joi");
const { createWallpaper } = require('./handlers/wallpaper')
const { server: serverConfig } = require('../config/config');

const server = new Hapi.Server(serverConfig);

server.route({
 method: "POST",
 path: "/wallpaper",
 options: {
  validate: {
   payload:
    Joi.object({
     url: Joi.string().required(),
     discordId: Joi.string().required(),
    }),
   failAction: (request, h, error) => {
    //Changer les codes d'erreur
    return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover();
   }
  }
 },
 handler: createWallpaper
});

server.route({
 method: "GET",
 path: "/wallpapers",
 handler: async (request, h) => { 
  return h.response('ok').code(200)
 }
});

server.route({
 method: "GET",
 path: "/wallpapers/{id}",
 handler: async (request, h) => { }
});

server.route({
 method: "PUT",
 path: "/wallpapers/{id}",
 options: {
  validate: {}
 },
 handler: async (request, h) => { }
});

server.route({
 method: "DELETE",
 path: "/wallpapers/{id}",
 handler: async (request, h) => { }
});

exports.init = async () => {

 await server.initialize();
 return server;
};

exports.start = async () => {

 await server.start();
 console.log(`Server running at: ${server.info.uri}`);
 return server;
};

process.on('unhandledRejection', (err) => {

 console.log(err);
 process.exit(1);
});