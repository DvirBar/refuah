/* eslint-disable no-console */
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

// Setup environment variables
dotenv.config({
    path: path.resolve("env", `.env.${process.env.NODE_ENV}`),
});

const {
    MONGO_URI,
    DB_NAME,
    DB_USER,
    DB_PASS,
    DB_PORT,
    DB_SERVICE,
} = process.env;

// Database config
const db = MONGO_URI
|| `mongodb://${DB_USER}:${DB_PASS}@${DB_SERVICE}:${DB_PORT}/${DB_NAME}?authSource=admin`;

export default function initMongoose() {
    console.log("Connecting to MongoDB...");

    mongoose
        .connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
}
