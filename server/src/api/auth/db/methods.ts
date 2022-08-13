import { Error, model } from "mongoose";
import { dateInPast } from "../../../utils/dates/dates";
import {
	IUser,
	UserDoc,
	UserEdit,
	UserModel,
} from "./types";
import { validateEmail } from "./validation";
import { hashPassword } from "../utils";
import UserSchema, { USER_MODEL } from "./model";

const User = model<IUser, UserModel>(USER_MODEL);

UserSchema.statics = {
	async findUserByIdOrFail(
		userId: string,
	): Promise<UserDoc> {
		const user = await User.findById(userId);

		if (!user) {
			throw new Error(`Couldn't find user with id ${userId}`);
		}

		return user;
	},
	getUserByEmail(
		email: string,
	): Promise<UserDoc | null> {
		if (!validateEmail(email)) {
			// TODO: Put this error in const
			throw new Error("Tried to get user with invalid email address");
		}
		return User.findOne({ email }).exec();
	},
	async createUser(
		userDetails: IUser,
	): Promise<UserDoc> {
		const hashedPassword = await hashPassword(userDetails.password);

		const newUser = new User({
			...userDetails,
			password: hashedPassword,
		});

		return newUser.save();
	},
};

UserSchema.methods = {
	edit(userDetails: UserEdit) {
		this.firstName = userDetails.firstName;
		this.lastName = userDetails.lastName;
		this.email = userDetails.email;
		this.save();
	},
	async isBlocked(): Promise<boolean> {
		if (this.blocked?.isBlocked) {
			const { expiry } = this.blocked;

			if (!expiry || !dateInPast(expiry)) {
				return true;
			}

			this.blocked = undefined;
			await this.save();
			return false;
		}

		return false;
	},
	changePassword(newPassword: string) {
		const hashedPasssword = await hashPassword(newPassword);
		this.password = hashedPasssword;
		this.formerPasswords?.push(this.password);

		this.save();
	},
	async removeUser(): Promise<void> {
		// TODO: delete all associated stuff
		this.remove();
	},
	block(expiry?: Date) {
		this.blocked = {
			isBlocked: true,
		};

		if (expiry) {
			this.blocked.expiry = expiry;
		}

		this.save();
	},
	async addFailedAttempt(): Promise<number> {
		if (this.failedAttempts) {
			this.failedAttempts += 1;
			await this.save();
		}

		return this.failedAttempts || 0;
	},
	resetFailedAttempts() {
		this.failedAttempts = 0;
		this.save();
	},
};

export default UserSchema;
