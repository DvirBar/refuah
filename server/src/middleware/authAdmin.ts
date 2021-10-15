import { Request, Response, NextFunction } from "express";

function authAdmin(_req: Request, res: Response, next: NextFunction): void | Response {
	try {
		if (!res.locals.user.isAdmin) { return res.status(403).send("Forbidden resource"); }

		next();
	} catch (e) {
		// TODO: Log error instead
		return res.status(500).send({ msg: "Internal server error" });
	}

	return res.status(500).send({ msg: "Internal server error" });
}

export default authAdmin;
