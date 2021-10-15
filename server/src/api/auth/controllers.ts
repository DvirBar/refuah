import { Request, Response, NextFunction } from "express";
import * as UserService from "./services";
import {
	clearAccessCookie,
	clearRefreshCookie,
	createAccessCookie,
	createRefreshCookie,
	getRefreshCookie,
	userWithoutPassword,
} from "./utils";
import {
	SuccessEdit,
	SuccessDelete,
	PasswordResetEmailSentSuccessfully,
	PasswordResetEmailNotSent,
	EmailIsRequiredForPasswordReset
} from "./messages.json";

export function getUserByToken(_req: Request, res: Response): Response {
	return res.send(userWithoutPassword(res.locals.user));
}

export async function register(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> {
	try {
		const {
			accessToken,
			refreshToken,
			user,
		} = await UserService.register(req.body);

		createAccessCookie(res, accessToken);
		createRefreshCookie(res, refreshToken);

		return res.send(user);
	} catch (err) {
		return next(err);
	}
}

export async function login(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> {
	const {
		email,
		password,
	} = req.body;

	try {
		const {
			accessToken,
			refreshToken,
			user,
		} = await UserService.login(email, password);

		createAccessCookie(res, accessToken);
		createRefreshCookie(res, refreshToken);

		return res.send(user);
	} catch (err) {
		return next(err);
	}
}

export async function refreshOldToken(
	req: Request,
	res: Response,
): Promise<Response> {
	try {
		const refreshToken = getRefreshCookie(req);

		if (refreshToken) {
			const accessToken = await UserService.refreshOldToken(refreshToken);
			createAccessCookie(res, accessToken);
			return res.send();
		}

		throw new Error();
	} catch (err) {
		// Clear access token
		clearAccessCookie(res);

		// Clear refresh token
		clearRefreshCookie(res);
		return res.status(401).send();
	}
}

export function logout(
	_req: Request,
	res: Response,
	next: NextFunction,
): Response | void {
	try {
		// Clear access token
		clearAccessCookie(res);
		// Clear refresh token
		clearRefreshCookie(res);
		return res.send({ msg: "Logged out successfully" });
	} catch (err) {
		return next(err);
	}
}

export async function editUser(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> {
	try {
		const editedUser = await UserService.editUser(req.body, res.locals.user.id);
		return res.status(SuccessEdit.status).send({
			msg: SuccessEdit.message,
			user: editedUser,
		});
	} catch (err) {
		return next(err);
	}
}

export async function resetPassword(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> {
	const { token } = req.params;
	const { newPassword } = req.body;
	if (!token) {
		return res.status(400).send("No token provided");
	}
	try {
		await UserService.resetPassword(token, newPassword);
		return res.send("Password reset successfully");
	} catch (err) {
		return next(err);
	}
}

export async function sendResetPasswordEmail(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> {
	const { email } = req.body;
	if (!email) {
		return res
			.status(EmailIsRequiredForPasswordReset.status)
			.send(EmailIsRequiredForPasswordReset.message);
	}
	try {
		const success = await UserService.sendResetPasswordEmail(email);

		if (success) {
			return res
				.status(PasswordResetEmailSentSuccessfully.status)
				.send(PasswordResetEmailSentSuccessfully.message);
		}

		return res
			.status(PasswordResetEmailNotSent.status)
			.send(PasswordResetEmailNotSent.message);
	} catch (err) {
		return next(err);
	}
}

export async function removeUser(
	req: Request,
	res: Response,
	next: NextFunction,
): Promise<Response | void> {
	const delUserId = req.params.id;

	try {
		await UserService.removeUser(delUserId);

		return res.status(SuccessDelete.status).send(SuccessDelete.message);
	} catch (err) {
		return next(err);
	}
}
