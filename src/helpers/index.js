const jwt = require('jsonwebtoken');

const getJwtToken = async (email, adminName) => {
    return jwt.sign({ email, adminName }, process.env.JWT_SECRET, {
        expiresIn: '5h',
    });
};

module.exports = {
    getJwtToken,
};
