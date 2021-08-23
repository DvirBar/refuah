import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import errorHandler from "./middleware/errorHandler";
import initRoutes from "./router";
import initMongoose from "./db/init";

const app = express();
app.use(helmet());

// Setup environment variables
dotenv.config({
  path: path.resolve("env", `.env.${process.env.NODE_ENV}`),
});

// Middlewares
app.use(express.json());
app.use(morgan("tiny"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

initRoutes(app);

app.use(errorHandler);

// Create connection
const port = process.env.PORT;
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server started on port ${port}`));

// Connect to MongoDB
initMongoose();
