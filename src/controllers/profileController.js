const ProfileModel = require('../models/profileModel');
const asyncHandler = require('express-async-handler');

const GetProfile = asyncHandler(async (req, res) => {
    const profile = await ProfileModel.findOne();
    if (profile) {
        res.status(200).json({
            status: 'success',
            data: profile,
        });
    } else {
        res.status(404);
        throw new Error('Profile not found');
    }
});

const UpdateProfile = asyncHandler(async (req, res) => {
    const profile = await ProfileModel.findOne();
    if (profile) {
        profile.overViewImage = req.body.overViewImage || profile.overViewImage;
        profile.overViewTextAnimate = req.body.overViewTextAnimate || profile.overViewTextAnimate;
        profile.overViewDurationAnimate = req.body.overViewDurationAnimate || profile.overViewDurationAnimate;
        profile.aboutImage = req.body.aboutImage || profile.aboutImage;
        profile.phoneNumber = req.body.phoneNumber || profile.phoneNumber;
        profile.email = req.body.email || profile.email;
        profile.githubUrl = req.body.githubUrl || profile.githubUrl;
        profile.facebookUrl = req.body.facebookUrl || profile.facebookUrl;
        profile.CV = req.body.CV || profile.CV;

        const updatedProfile = await profile.save();
        res.status(200).json({
            status: 'success',
            data: updatedProfile,
        });
    } else {
        res.status(404);
        throw new Error('Profile not found');
    }
});

module.exports = { GetProfile, UpdateProfile };
