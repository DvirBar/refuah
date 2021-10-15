import mongoose from "mongoose";
import { IError } from "./errors.types";

const { Schema } = mongoose;

// Create schema
const ErrorHandlerSchema = new Schema<IError>({
	title: {
		type: String,
	},
	request: {
		url: {
			type: String,
		},
		method: {
			type: String,
		},
		timestamp: {
			type: Date,
			default: Date.now,
		},
	},
	content: {
		type: String,
	},
});

export default mongoose.model<IError>("ErrorHandler", ErrorHandlerSchema);
