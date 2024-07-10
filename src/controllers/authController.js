const asyncHandler = require('express-async-handler');
const { getJwtToken } = require('../helpers');

const Login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        res.status(200).json({
            status: 'success',
            message: 'Login successfully',
            token: await getJwtToken(email, process.env.ADMIN_FULLNAME),
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

module.exports = { Login };
