const { GetAllSkills, CreateSkill } = require('../controllers/skillController');
const Router = require('express').Router();

Router.get('/get-all', GetAllSkills);
Router.post('/create', CreateSkill);

module.exports = Router;
