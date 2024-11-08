const SkillModel = require('../models/skillModel');
const asyncHandler = require('express-async-handler');

const GetAllSkills = asyncHandler(async (req, res) => {
    const skills = await SkillModel.find().select('-__v -_id');
    if (skills) {
        res.status(200).json({
            status: 'success',
            data: skills,
        });
    } else {
        res.status(404);
        throw new Error('Skills not found');
    }
});

const CreateSkill = asyncHandler(async (req, res) => {
    const { name, image, href } = req.body;
    const skill = new SkillModel({
        name,
        image,
        href,
    });
    const createdSkill = await skill.save();
    res.status(201).json({
        status: 'success',
        data: createdSkill,
    });
});

module.exports = {
    GetAllSkills,
    CreateSkill,
};
