import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

// Setup environment variables
dotenv.config({
	path: path.resolve("env", `.env.${process.env.NODE_ENV}`),
});

chai.use(chaiAsPromised);

before((done) => {
	try {
		mongoose.connect(process.env.MONGO_URI || "", {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false,
		});
		mongoose.connection
			.once("open", () => { done(); })
			.on("error", (err) => {
				console.error(err);
				done();
			});
	} catch (err) {
		console.error(err);
	}
});

after((done) => {
	try {
		mongoose.connection.close()
			.then(() => { done(); })
			.catch((err) => {
				console.error(err);
				done();
			});
	} catch (err) {
		console.error(err);
	}
});
