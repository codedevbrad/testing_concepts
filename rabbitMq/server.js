const express = require('express');
const app = express();

// body parser middleware
app.use( express.urlencoded({ extended: true }))
// parse application/json
app.use( express.json());

app.get('/' , ( req , res ) => res.status( 200 ).send('rabbitmq test'));

app.get('/publish'   , require('./src/publisher') );
app.get('/subscribe' , require('./src/subscriber') );


app.listen( 5000 , ( ) => console.log(`writable service running in env 5000`));