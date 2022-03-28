// Creating Token and saving in cookie
const sendToken = (user, statusCode, res) => {
    const token = user.getJWTToken();

    // option for cookie
    const options = {
        expires: new Date(
            Date.now() + 7 * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    };

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
}

module.exports = sendToken;