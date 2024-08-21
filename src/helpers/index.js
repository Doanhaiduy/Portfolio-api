const jwt = require('jsonwebtoken');
const { transporter } = require('../configs/nodemailer');

const getJwtToken = async (email, adminName) => {
    return jwt.sign({ email, adminName }, process.env.JWT_SECRET, {
        expiresIn: '5h',
    });
};

const handleSendMail = async (val) => {
    try {
        await transporter.sendMail(val);
        return 'OK';
    } catch (error) {
        console.log('ERROR', error);
        return error;
    }
};

const validateEmail = (email) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return re.test(email);
};

module.exports = {
    getJwtToken,
    handleSendMail,
    validateEmail,
};
