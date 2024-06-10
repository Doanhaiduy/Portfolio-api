const Router = require('express').Router();
const { GetProfile, UpdateProfile } = require('../controllers/profileController');

Router.get('/', GetProfile);
Router.put('/', UpdateProfile);

module.exports = Router;
