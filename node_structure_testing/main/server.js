const express = require('express');

const app     = express();
const PORT    = 5000;
const server  = require('http').createServer( app );

// api's
app.use('/api/a' , require('../componentA/api') );
app.use('/api/b' , require('../componentB/api') );

server.listen( PORT, ( ) => console.log(`Listening on ${ PORT }`));
