import bcrypt from "bcryptjs";
import { SendMailOptions } from "nodemailer";
import { sendEmail } from "../../services/email/service";
import User from "./db";
import {
	UserAlreadyExists,
	InvalidCredentials,
	UserIsBlocked,
	PasswordAlreadyUsed,
	NoMatchingUserForEmail,
} from "./messages.json";
import { Payload, UserAccess } from "./types";
import { IUser, UserDoc, UserSecureDetails } from "./db/types";
import {
	createAccessToken,
	createPasswordResetToken,
	createRefreshToken,
	hashPassword,
	userWithoutPassword,
	verifyAccessToken,
	verifyPasswordToken,
	verifyRefreshToken,
} from "./utils";
import { changePassword, findUserByIdOrFail } from "./db/methods";

export async function getUserByToken(token: string): Promise<UserDoc> {
	const decoded = verifyAccessToken(token) as Payload;
	const user = await findUserByIdOrFail(User, decoded.id);
	return user;
}

export async function register(userDetails: IUser): Promise<UserAccess> {
	// Check for user with the requested email
	const possibleEmail = await User.getUserByEmail(userDetails.email);
	if (possibleEmail) {
		throw UserAlreadyExists;
	}

	// Create user
	const user = await User.createUser(userDetails);

	const payload: Payload = { id: user.id };
	// Sign and return token with created user id as payload
	const accessToken = createAccessToken(payload);
	const refreshToken = createRefreshToken(payload);

	const userObj = userWithoutPassword(user);

	return {
		accessToken,
		refreshToken,
		user: userObj,
	};
}

export async function login(email: string, loginPassword: string): Promise<UserAccess> {
	const user = await User.getUserByEmail(email);
	// Validating creadentials and checking that user is not blocked
	if (!user) {
		throw InvalidCredentials;
	}

	if (await User.isUserBlocked(user)) {
		throw UserIsBlocked;
	}

	const isMatch = await bcrypt.compare(loginPassword, user.password);

	if (!isMatch) {
		const failedAttempts = await User.addFailedAttempt(user);

		if (failedAttempts >= 5) {
			User.blockUser(user);
			throw UserIsBlocked;
		}

		throw InvalidCredentials;
	}

	// Authentication completed, log user in
	User.resetFailedAttempts(user);
	const tokenPayload = { id: user.id };
	const accessToken = createAccessToken(tokenPayload);
	const refreshToken = createRefreshToken(tokenPayload);
	const userObj = userWithoutPassword(user);

	return {
		accessToken,
		refreshToken,
		user: userObj,
	};
}

export async function refreshOldToken(refreshToken: string): Promise<string> {
	const decoded = verifyRefreshToken(refreshToken) as Payload;

	const user = await findUserByIdOrFail(User, decoded.id);

	return createAccessToken({ id: user.id });
}

export async function validateAndChangePassword(user: UserDoc, newPassword: string) {
	const matchCurrentPassword = await bcrypt.compare(newPassword, user.password);

	if (matchCurrentPassword) {
		throw PasswordAlreadyUsed;
	}

	if (user.formerPasswords) {
		for (const password of user.formerPasswords) {
			// eslint-disable-next-line no-await-in-loop
			const match = await bcrypt.compare(newPassword, password);

			if (match) {
				throw PasswordAlreadyUsed;
			}
		}
	}

	changePassword(user, newPassword);
}

export function isUserBlocked(user: UserDoc): Promise<boolean> {
	return User.isUserBlocked(user);
}

export async function editUser(user: IUser, userId: string): Promise<UserSecureDetails> {
	// TODO: add verification email if email was changed
	const editedUser = await User.editUser(userId, user);
	return userWithoutPassword(editedUser);
}

export async function sendResetPasswordEmail(email: string) {
	const user = await User.getUserByEmail(email);

	if (!user) {
		throw NoMatchingUserForEmail;
	}
	const user1 = new User();
	const payload: Payload = { id: user.id };
	const token = createPasswordResetToken(payload);
	const emailOptions: SendMailOptions = {
		from: "מועמדים לרפואה <info@refuah.org.il>",
		to: email,
		subject: "איפוס סיסמה באתר המועמדים",
		html: `<p>
	    בחרת לאפס את הסיסמה שלך. לאיפוס   
		<a href="${process.env.CLIENT_URI}/resetPassword/${token}">לחצ/י כאן</a>.</br>
		תוקף הקישור יפוג בתוך 10 דקות. אם לא את/ה ביקשת לאפס את הסיסמה, ניתן להתעלם ממייל זה.
		</p>`,
	};

	const info = await sendEmail(emailOptions);

	let success = false;
	if (info.accepted.includes(email)) {
		success = true;
	}

	return success;
}

export async function resetPassword(token: string, newPassword: string) {
	const decoded = verifyPasswordToken(token) as Payload;
	const user = await findUserByIdOrFail(User, decoded.id);

	await validateAndChangePassword(user, newPassword);
}

export async function removeUser(delUserId: string): Promise<void> {
	return User.removeUser(delUserId);
}
