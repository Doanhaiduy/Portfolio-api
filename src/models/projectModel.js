const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    technologies: {
        type: [String],
        required: true,
    },
    image: { type: String, required: true },
    live: { type: String, required: true },
    source: { type: String, required: true },
    active: { type: Boolean, required: true },
    views: {
        type: Number,
        default: 0,
        min: 0,
    },
});

const ProjectModel = mongoose.model('Project', projectSchema);

module.exports = ProjectModel;
