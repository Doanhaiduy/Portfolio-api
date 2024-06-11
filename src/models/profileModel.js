const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    overViewImage: { type: String, required: true },
    overViewTextAnimate: {
        type: [String],
        required: true,
    },
    overViewDurationAnimate: {
        type: Number,
        required: true,
    },
    aboutImage: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    githubUrl: { type: String, required: true },
    facebookUrl: { type: String, required: true },
    CV: { type: String, required: true },
});

const ProfileModel = mongoose.model('Profile', profileSchema);

module.exports = ProfileModel;
