"use strict";

const Hapi = require( "hapi" );
const routes = require( "./routes" );

const app = async config => {
   const { host, port } = config;

   // create an instance of hapi
   const server = Hapi.server( { host, port } );

   // store the config for later use
   server.app.config = config;

   // register routes
   await routes.register( server );

   return server;
};

module.exports = app;