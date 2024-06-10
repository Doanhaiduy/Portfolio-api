const ProjectModel = require('../models/projectModel');

const GetAllProjects = async (req, res) => {
    try {
        const projects = await ProjectModel.find({});
        res.status(200).json({
            count: projects.length,
            status: 'success',
            data: projects,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

const GetProjectById = async (req, res) => {
    try {
        const project = await ProjectModel.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: project,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

const CreateProject = async (req, res) => {
    try {
        const project = new ProjectModel({
            name: req.body.name,
            description: req.body.description,
            technologies: req.body.technologies,
            image: req.body.image,
            live: req.body.live,
            source: req.body.source,
            active: req.body.active,
        });
        const newProject = await project.save();
        res.status(201).json({
            status: 'success',
            data: newProject,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

const UpdateProject = async (req, res) => {
    try {
        const project = await ProjectModel.findById(req.params.id);
        if (project) {
            project.name = req.body.name || project.name;
            project.description = req.body.description || project.description;
            project.technologies = req.body.technologies || project.technologies;
            project.image = req.body.image || project.image;
            project.live = req.body.live || project.live;
            project.source = req.body.source || project.source;
            project.active = req.body.active || project.active;

            const updatedProject = await project.save();
            res.status(200).json({
                status: 'success',
                data: updatedProject,
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'Project not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

const DeleteProject = async (req, res) => {
    try {
        const project = await ProjectModel.findById(req.params.id);
        if (project) {
            await project.remove();
            res.status(200).json({
                status: 'success',
                message: 'Project deleted',
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'Project not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

module.exports = {
    GetAllProjects,
    GetProjectById,
    CreateProject,
    UpdateProject,
    DeleteProject,
};
