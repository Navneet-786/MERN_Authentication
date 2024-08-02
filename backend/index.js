require("dotenv").config();
const express = require("express");
const app = express();
const { connectToDb } = require("./db/connectToDatabase");
connectToDb();
const userRoute = require("./routes/userRoutes");
const { errorHandler } = require("./middlewares/error-Handler");

const cors = require("cors");
const port = process.env.PORT || 8080;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//user api
app.use("/api/user", userRoute);
app.use(errorHandler);
app.listen(port, () => {
  console.log("server is running successfuly");
});
