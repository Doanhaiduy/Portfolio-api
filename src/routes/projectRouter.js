const {
    GetAllProjects,
    GetProjectById,
    CreateProject,
    UpdateProject,
    DeleteProject,
    IncrementViews,
} = require('../controllers/projectController');
const { verifyToken } = require('../middlewares/authMiddleware');

const Router = require('express').Router();

Router.get('/get-all', GetAllProjects);
Router.get('/:id', GetProjectById);
Router.post('/create', verifyToken, CreateProject);
Router.post('/increment-views/:id', IncrementViews);
Router.put('/update/:id', verifyToken, UpdateProject);
Router.delete('/delete/:id', verifyToken, DeleteProject);

module.exports = Router;
