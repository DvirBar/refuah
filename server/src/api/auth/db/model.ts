import mongoose, { Schema } from "mongoose";
import { IUser, UserModel } from "./types";
import { validateEmail, validateName } from "./validation";
import * as staticMethods from "./methods";

export const UserSchema = new Schema<IUser>({
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
    dataCreated: {
        type: Date,
        default: Date.now,
    },
});

// Define static methods
UserSchema.statics = staticMethods;

export default mongoose.model<IUser, UserModel>("User", UserSchema);
