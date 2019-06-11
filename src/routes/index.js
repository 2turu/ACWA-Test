"use strict";

const api = require( "./api" );

module.exports.register = async server => {
   server.route( {
       method: "GET",
       path: "/",
       handler: async ( request, h ) => {
           return "My first hapi server!";
       }
   } );
};