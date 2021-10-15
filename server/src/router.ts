import { Express } from "express";
import auth from "./api/auth/router";

function initRoutes(app: Express) {
	app.use("/api/auth", auth);
}

export default initRoutes;
