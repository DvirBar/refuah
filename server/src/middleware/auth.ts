import { Request, Response, NextFunction } from "express";
import * as UserService from "../api/auth/services";
import { getAccessCookie } from "../api/auth/utils";

async function auth(req: Request, res: Response, next: NextFunction): Promise<void | Response> {
	const accessToken = getAccessCookie(req);

	try {
		if (!accessToken) {
			throw new Error("No access token provided");
		}

		const user = await UserService.getUserByToken(accessToken);

		// Check that user isn't blocked
		if (await UserService.isUserBlocked(user)) {
			throw new Error("Blocked user attempted to get protected resource");
		}

		res.locals.user = user;
		next();
	} catch (err) {
		return res.status(401).send("Unauthorized");
	}

	return res.status(401).send("Unauthorized");
}

export default auth;
