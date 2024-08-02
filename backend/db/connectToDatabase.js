const mongoose = require("mongoose");

const connectToDb = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { connectToDb };
