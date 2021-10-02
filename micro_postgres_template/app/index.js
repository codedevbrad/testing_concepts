const express = require('express');
const sequelize = require('./src/util/database');
const cors = require('cors');
const app  = express();
const port = 5000 || process.env.PORT;

// const bcrypt = require('bcrypt');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use( cors() );

//Set proper Headers on Backend
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

app.get('/' , async ( req , res ) => {
    // try {
    //   let hash =await bcrypt.hash(myPlaintextPassword, saltRounds );
    //   res.status( 200 ).send( hash );
    // }
    // catch( err ) {
      res.status( 500 ).send( 'data' );
    // }
});

app.use('/api' , require('./src/api'));

(async () => {
    try {
      await sequelize.sync(
        { force: false } //Reset db every time
      );
      app.listen(port, () => console.log(`running in ${ process.env.NODE_ENV } on port ${ process.env.PORT} `))
    } 
    catch (error) {
      console.log(error);
    }
})();