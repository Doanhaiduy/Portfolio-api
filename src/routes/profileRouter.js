const Router = require('express').Router();
const { GetProfile, UpdateProfile } = require('../controllers/profileController');
const { verifyToken } = require('../middlewares/authMiddleware');

Router.get('/', GetProfile);
Router.put('/', verifyToken, UpdateProfile);

module.exports = Router;
