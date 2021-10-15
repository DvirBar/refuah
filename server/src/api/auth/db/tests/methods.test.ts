import { expect } from "chai";
import { Done } from "mocha";
import mongoose, { Error } from "mongoose";
import { findUserByIdOrFail, isUserBlocked, UserEdit } from "../methods";
import User from "../model";
import { IUser, UserDoc } from "../types";

const createTestUser = async (): Promise<UserDoc> => {
	const user = new User({
		email: "test@gmail.com",
		password: "12345ABCD",
		firstName: "test",
		lastName: "test",
	});

	return user.save();
};

const dropUsersCollection = (done: Done): void => {
	console.log("exec");

	mongoose.connection.dropCollection("users", (err) => {
		if (err) {
			console.error(err);
		}

		done();
	});
};

describe("test auth data layer", () => {
	describe("test functions that require a document", () => {
		let createdUser: UserDoc;
		beforeEach(async (done) => {
			try {
				// Create an id and get it
				const user = await createTestUser();
				createdUser = user;
				done();
			} catch (err) {
				console.error(err);
			}
		});

		afterEach((done) => dropUsersCollection(done));

		describe("test findByIdOrFail", () => {
			it("should return an existing document that has the id provided", async () => {
				try {
					const user = await findUserByIdOrFail(User, createdUser?.id);

					return expect(user.id).to.be.equal(createdUser.id);
				} catch (err) {
					console.log(err);
					throw err;
				}
			});

			it("should throw an error if user doens't exist", async () => {
				try {
					const id = mongoose.Types.ObjectId();
					await expect(findUserByIdOrFail(User, id.toString())).to.be.rejected;
				} catch (err) {
					console.log(err);
					throw err;
				}
			});
		});

		describe("test getUserByEmail", () => {
			it("should find a user by email", async () => {
				const foundUser = await User.getUserByEmail(createdUser.email);
				expect(foundUser?.id).to.be.equal(createdUser.id);
			});

			it("shouldn't find a user if email provided doesn't exist", async () => {
				const foundUser = await User.getUserByEmail("nofound@gmail.com");

				expect(foundUser).to.be.null;
			});

			it("should return null if email is invalid", async () => {
				await expect(User.getUserByEmail("invalidgmai,.co.m")).to.be.rejected;
			});
		});

		describe("test editUser", () => {
			it("should edit user successfully", async () => {
				const userDetails: UserEdit = {
					firstName: "editTest",
					lastName: "editTest",
					email: "test@gmail.com",
				};
				const userObject = (await User.editUser(createdUser?.id, userDetails)).toObject();
				expect(userObject).to.include(userDetails);
			});

			it("should throw an error if user is edited with invalid properties", async () => {
				const userDetails: UserEdit = {
					firstName: "e",
					lastName: "e",
					email: "testgmail.com",
				};
				await expect(User.editUser(createdUser?.id, userDetails)).to.be.rejectedWith(Error);
			});
		});

		describe("test isUserBlocked", () => {
			it("should return true if user is blocked with no expiry", async () => {
				createdUser.blocked = {
					isBlocked: true,
				};

				await createdUser.save();

				expect(await User.isUserBlocked(createdUser)).to.be.true;
			});

			it("should return true is user is blocked with an expiry that hasn't expired", async () => {
				const now = new Date();
				const year = now.getFullYear();
				const month = now.getMonth();
				const day = now.getDate();
				createdUser.blocked = {
					isBlocked: true,
					expiry: (new Date(year + 1, month, day)),
				};

				await createdUser.save();

				expect(await User.isUserBlocked(createdUser)).to.be.true;
			});

			it("should return false if user is not blocked", async () => {
				expect(await User.isUserBlocked(createdUser)).to.be.false;
			});

			it("should remove block and return false if block expiry is over", async () => {
				const now = new Date();
				const year = now.getFullYear();
				const month = now.getMonth();
				const day = now.getDate();
				createdUser.blocked = {
					isBlocked: true,
					expiry: (new Date(year - 1, month, day)),
				};

				await createdUser.save();

				expect(await User.isUserBlocked(createdUser)).to.be.false;
				expect(createdUser.blocked).to.be.undefined;
			});
		});
	});

	describe("test createUser", () => {
		it("should create a user successfully", async () => {
			try {
				const userDetails: IUser = {
					firstName: "Test",
					lastName: "Test",
					email: "test@gmail.com",
					password: "12345ABCd",
				};
				const user = await User.createUser(userDetails);
				const userObject = user.toObject();

				return expect({
					...userObject,
					password: userDetails.password,
				}).to.include(userDetails);
			} catch (err) {
				console.error(err);
				throw err;
			}
		});

		it("should fail with invalid entries", async () => {
			const userDetails: IUser = {
				firstName: "ג",
				lastName: "ג",
				email: "testgmail.com",
				password: "1234",
			};
			await expect(User.createUser(userDetails)).to.be.rejectedWith(Error);
		});

		it("should throw as error if user props are empty", async () => {
			const userDetails: IUser = {
				firstName: "",
				lastName: "",
				email: "",
				password: "",
			};
			await expect(User.createUser(userDetails)).to.be.rejectedWith(Error);
		});
	});
});
