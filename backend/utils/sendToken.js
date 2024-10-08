// Create token and save in the cookie
const sendToken = (user, statusCode, res) => {
    // Create JWT Token
    const token = user.getJWTToken();
    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };
    res.status(statusCode).cookie('token', token, options).json({
        token,
        user
    });
};

module.exports = sendToken;