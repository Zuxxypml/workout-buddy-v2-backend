const express = require("express");
const { signUpUser, loginUser } = require("../controllers/userController.js");
const userRouter = express.Router();

// Sign up Route
userRouter.route("/signup").post(signUpUser);

// Login Route
userRouter.route("/login").post(loginUser);
module.exports = userRouter;
