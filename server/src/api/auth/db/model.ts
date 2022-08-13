import { Schema } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./types";
import { validateEmail, validateName, validateUsername } from "./validation";

export const USER_MODEL = "User";

const UserSchema = new Schema<IUser, UserModel, IUserMethods>({
	firstName: {
		type: String,
		validate: {
			validator: validateName,
			message: "First name is invalid",
		},
		required: [true, "First name is required"],
	},
	lastName: {
		type: String,
		validate: {
			validator: validateName,
			message: "Last name is invalid",
		},
		required: [true, "Last name is required"],
	},
	username: {
		type: String,
		required: [true, "Username is required"],
		validate: {
			validator: validateUsername,
			message: "Username is invalid",
		},
	},
	email: {
		type: String,
		validate: {
			validator: validateEmail,
			message: "Email is invalid",
		},
		required: [true, "Email is required"],
		unique: true,
	},
	failedAttempts: {
		type: Number,
		default: 0,
	},
	password: {
		type: String,
		required: [true, "Password is required"],
	},
	formerPasswords: [{
		type: String,
	}],
	// passwordLastChanged: {
	// 	type: Date,
	// },
	// passwordTimesChanged: {
	// 	type: Number,
	// 	default: 0,
	// },
	blocked: {
		isBlocked: {
			type: Boolean,
		},
		expiry: {
			type: Date,
		},
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
	dateCreated: {
		type: Date,
		default: Date.now,
	},
});

export default UserSchema;
