const express = require('express');
const api_b   = express.Router();

api_b.get('/' , ( req , res , next ) => {
    res.status( 200 ).send('component b');
});

module.exports = api_b;