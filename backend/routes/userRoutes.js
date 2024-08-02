const express = require("express");
const { registerSchema } = require("../Validator/auth-validator");
const { validate } = require("../middlewares/validate-middleware");
const router = express.Router();
const { registerHandler, loginUser } = require("../controller/userController");
router.post("/register", validate(registerSchema), registerHandler);
router.post("/login", loginUser);
module.exports = router;
