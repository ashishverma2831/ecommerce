
// Create token and save in the cookie
const sendToken = (user, statusCode, res) => {
    // Create JWT Token
    const token = user.getJWTToken();
    console.log('sendToken:',token);
    
    // Options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRATION * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
        secure: false,
        sameSite: 'none',
        path: '/',
        // domain: process.env.CLIENT_URL
    };
    res.status(statusCode).cookie('token', token, options).json({
        success: true,
        token,
        user
    });

    // signedCookies.token = token;
};

module.exports = sendToken;