const ErrorHanlder = require("../utils/errorHandler")
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const User = require("../models/userModel");

// Register a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {

  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "This is my avatar",
      url: "Profile pic url"
    },
  });
  const token = user.getJWTToken();

  res.status(201).json({
    success: true, token
  })
})

// Login user
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  // checking email and password is not empty
  if (!email || !password) {
    return next(new ErrorHanlder("Please enter email and password"))
  }

  const user = await User.findOne({ email }).select("+password")

  if (!user) {
    return next(new ErrorHanlder(" Invalid  email or password"))
  }

  const isMatched = user.comparePassword();
  if (!isMatched) {
    return next(new ErrorHanlder(" Invalid  email or password"))
  }

  const token = user.getJWTToken();

  res.status(200).json({
    success: true, messsage: "Login Successfully.", token: token
  })

})







