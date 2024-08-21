const Router = require('express').Router();
const { GetProfile, UpdateProfile, SendMessage } = require('../controllers/profileController');
const { verifyToken } = require('../middlewares/authMiddleware');

Router.get('/', GetProfile);
Router.post('/send-message', SendMessage);
Router.put('/', verifyToken, UpdateProfile);

module.exports = Router;
