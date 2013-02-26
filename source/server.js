// This file let's us start the server using the typical 'node' command instead of 'geddy'
// Just use: node server.js

// This will also be used to start the app w/ forever

var geddy = require('geddy');

geddy.start({
  environment: 'development'
});