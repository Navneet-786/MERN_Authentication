const User = require("../models/users");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const registerHandler = async (req, res, next) => {
  try {
    const { userName, password, email } = req.body;
    if (!userName || !password || !email) {
      const error = new Error("Please Enter all Fields");
      error.status = 400;
      next(error);
      return;
    }
    //check into db
    const preUser = await User.findOne({ email });
    if (preUser) {
      const error = new Error("User Already registered");
      error.status = 409; // Conflict
      next(error);
      return;
    }
    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({
      userName,
      email,
      password: hashPassword,
    });
    const userSavedData = await newUser.save();
    if (userSavedData) {
      return res.status(201).json({
        status: true,
        message: "user Register successfully",
        userData: userSavedData,
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("Fill all fields");
      error.status = 401;
      next(error);
      return;
    }
    const preUser = await User.findOne({ email });
    if (!preUser) {
      const error = new Error("User not found");
      error.status = 401;
      next(error);
      return;
    }
    //check the passsword

    if (!bcrypt.compare(password, preUser.password)) {
      const error = new Error("Password Not Matched");
      error.status = 401;
      next(error);
      return;
    } else {
      //create jwt token
      const token = await jwt.sign(
        { _id: preUser._id },
        process.env.JWT_SECRET
      );
      const { password, ...rest } = preUser._doc;
      // cookie with expiry date
      const expiryDate = new Date(Date.now() + 3600000); //1hours
      return res
        .cookie("myCookie", token, {
          httpOnly: true,
          expires: expiryDate,
          secure: true,
        })
        .status(200)
        .json({
          message: "user Login successfully",
          user: rest,
        });
    }
  } catch (err) {
    next(err);
  }
};
module.exports = { registerHandler, loginUser };
