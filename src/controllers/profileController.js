const ProfileModel = require('../models/profileModel');

const GetProfile = async (req, res) => {
    try {
        const profile = await ProfileModel.findOne();
        res.status(200).json({
            status: 'success',
            data: profile,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

const UpdateProfile = async (req, res) => {
    try {
        const profile = await ProfileModel.findOne();
        if (profile) {
            profile.name = req.body.name || profile.name;
            profile.email = req.body.email || profile.email;
            profile.image = req.body.image || profile.image;
            profile.bio = req.body.bio || profile.bio;
            profile.socials = req.body.socials || profile.socials;

            const updatedProfile = await profile.save();
            res.status(200).json({
                status: 'success',
                data: updatedProfile,
            });
        } else {
            res.status(404).json({
                status: 'error',
                message: 'Profile not found',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};

module.exports = { GetProfile, UpdateProfile };
