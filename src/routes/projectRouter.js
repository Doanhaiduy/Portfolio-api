const {
    GetAllProjects,
    GetProjectById,
    CreateProject,
    UpdateProject,
    DeleteProject,
} = require('../controllers/projectController');

const Router = require('express').Router();

Router.get('/get-all', GetAllProjects);
Router.get('/:id', GetProjectById);
Router.post('/create', CreateProject);
Router.put('/update/:id', UpdateProject);
Router.delete('/delete/:id', DeleteProject);

module.exports = Router;
