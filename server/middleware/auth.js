const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const User = require("../Model/User");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  console.log(req)
  const { token }  = req.cookies;

  if (!token) {
    return next(new ErrorHander("Please Login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, "STBAEHYJAAAVLSAINAJDKSDJKKDJ");

  req.user = await User.findById(decodedData.id);

  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHander(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};