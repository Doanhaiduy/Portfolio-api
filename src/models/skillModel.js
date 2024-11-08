const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    href: {
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
});

const SkillModel = mongoose.model('Skill', skillSchema);

module.exports = SkillModel;
