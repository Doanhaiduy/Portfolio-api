const ProfileModel = require('../models/profileModel');
const asyncHandler = require('express-async-handler');
const { handleSendMail, validateEmail } = require('../helpers');
const MessageModel = require('../models/messageModel');

const GetProfile = asyncHandler(async (req, res) => {
    const profile = await ProfileModel.findOne().select('-__v');
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

const SendMessage = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400);
        throw new Error('All fields are required');
    }

    if (!validateEmail(email)) {
        res.status(400);
        throw new Error('Invalid email');
    }

    const mailOptions = {
        from: email,
        to: process.env.ADMIN_EMAIL,
        subject: `Message from ${name} - ${email}`,
        text: message,
    };

    const result = await handleSendMail(mailOptions);

    if (result === 'OK') {
        const newMessage = new MessageModel({
            name,
            email,
            message,
        });
        await newMessage.save();

        res.status(200).json({
            status: 'success',
            data: {
                message: 'Your message has been sent successfully.',
            },
        });
    } else {
        res.status(400);
        throw new Error('Something went wrong');
    }
});

module.exports = { GetProfile, UpdateProfile, SendMessage };
