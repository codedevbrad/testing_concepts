const express  = require('express');
const { uuid } = require('uuidv4');

const api_a  = express.Router();

api_a.get('/' , ( req , res , next ) => {
    let id = uuid();
    res.status( 200 ).send({
        api: 'component a' , 
        unique: id
    });
});

module.exports = api_a;
