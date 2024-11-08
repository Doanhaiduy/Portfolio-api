const ProjectModel = require('../models/projectModel');
const asyncHandler = require('express-async-handler');

const GetAllProjects = asyncHandler(async (req, res) => {
    const projects = await ProjectModel.find().sort({ views: -1 }).select('-__v');
    if (projects) {
        res.status(200).json({
            status: 'success',
            data: projects,
        });
    } else {
        res.status(404);
        throw new Error('Projects not found');
    }
});

const GetProjectById = asyncHandler(async (req, res) => {
    const project = await ProjectModel.findById(req.params.id).select('-__v');
    if (project) {
        res.status(200).json({
            status: 'success',
            data: project,
        });
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});

const CreateProject = asyncHandler(async (req, res) => {
    const project = new ProjectModel({
        name: req.body.name,
        description: req.body.description,
        technologies: req.body.technologies,
        image: req.body.image,
        live: req.body.live,
        source: req.body.source,
        active: req.body.active,
    });

    const createdProject = await project.save();
    res.status(201).json({
        status: 'success',
        data: createdProject,
    });
});

const IncrementViews = asyncHandler(async (req, res) => {
    const project = await ProjectModel.findById(req.params.id);
    if (project) {
        project.views = project.views + 1;
        const updatedProject = await project.save();
        res.status(200).json({
            status: 'success',
            data: updatedProject,
        });
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});

const UpdateProject = asyncHandler(async (req, res) => {
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
        res.status(404);
        throw new Error('Project not found');
    }
});

const DeleteProject = asyncHandler(async (req, res) => {
    const project = await ProjectModel.findById(req.params.id);
    if (project) {
        await project.remove();
        res.status(200).json({
            status: 'success',
            message: 'Project deleted',
        });
    } else {
        res.status(404);
        throw new Error('Project not found');
    }
});

module.exports = {
    GetAllProjects,
    GetProjectById,
    CreateProject,
    UpdateProject,
    DeleteProject,
    IncrementViews,
};
