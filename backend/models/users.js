const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  {
    timesStamp: true,
  }
);
module.exports = mongoose.model("user", userSchema);
