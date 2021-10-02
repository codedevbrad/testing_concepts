const controller_writable = require('./services/writable/writable.controller');
const controller_users = require('./services/users/user.controller');

const api = require('express').Router();

api.get('/v0/' , ( req , res ) => res.status(200).send('v0'));

api.get('/v0/writable/',       controller_writable.getAll);
api.post('/v0/writable/',      controller_writable.createOne);
api.get('/v0/writable/belongsto' , controller_writable.getByUser );

api.get('/v0/writable/single/:id',    controller_writable.getOne);
api.put('/v0/writable/single/:id',    controller_writable.updateOne);
api.delete('/v0/writable/single/:id', controller_writable.deleteOne);

api 
  .get('/v0/users/',       controller_users.getAll)
  .get('/v0/users/:id',    controller_users.getOne)
  .post('/v0/users/',      controller_users.createOne)
  .put('/v0/users/:id',    controller_users.updateOne)
  .delete('/v0/users/:id', controller_users.deleteOne);
  

module.exports = api;