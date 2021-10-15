import express, { Request, Response } from "express";
import { sendEmail } from "../../services/email/service";
import auth from "../../middleware/auth";
import authAdmin from "../../middleware/authAdmin";
import * as UserController from "./controllers";

const router = express.Router();

// @route   GET api/auth/user
// @desc    Get user by id from token
// @access  Private
router.get("/user", auth, UserController.getUserByToken);

// @route   POST api/auth/register
// @desc    Register
// @access  Public
router.post("/register", UserController.register);

// @route   POST api/auth/login
// @desc    Login
// @access  Public
router.post("/login", UserController.login);

// @route   POST api/auth/refreshToken
// @desc    Use refresh token to get a new access token
// @access  Private
router.post("/refreshToken", UserController.refreshOldToken);

// @route   POST api/auth/logout
// @desc    Log user out
// @access  Private
router.post("/logout", UserController.logout);

// @route   POST api/auth/logout
// @desc    Log user out
// @access  Private
router.post("/forgotPassword", UserController.sendResetPasswordEmail);

// @route   POST api/auth/logout
// @desc    Log user out
// @access  Private
router.post("/resetPassword", UserController.resetPassword);

// @route   PUT api/auth/user/:id
// @desc    Update user details
// @access  Private
router.put("/user", auth, UserController.editUser);

// @route   DELETE api/auth/user/:id
// @desc    Delete user
// @access  Admin
router.delete("/user/:id", [auth, authAdmin], UserController.removeUser);

export default router;
