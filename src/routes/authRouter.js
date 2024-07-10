const { Login } = require('../controllers/authController');

const Router = require('express').Router();

Router.post('/login', Login);

module.exports = Router;
