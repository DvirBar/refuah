import { Express } from "express";
import auth from "./api/auth/routes";

function initRoutes(app: Express) {
	app.use("/api/auth", auth);
}

export default initRoutes;
