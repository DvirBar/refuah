import { Error, Model } from "mongoose";
import { removeFromObject } from "utils/objects/objects";
import { dateInPast } from "../../../utils/dates/dates";
import { hashPassword } from "../utils";
import { IUser, UserDoc } from "./types";
import { validateEmail } from "./validation";

export async function findUserByIdOrFail(
    userModel: Model<IUser>,
    userId: string,
): Promise<UserDoc> {
    const user = await userModel.findById(userId);

    if (!user) {
        throw new Error(`Couldn't find user with id ${userId}`);
    }

    return user;
}

export function getUserByEmail(
    this: Model<IUser>,
    email: string,
): Promise<UserDoc | null> {
    if (!validateEmail(email)) {
        throw new Error("Tried to get user with invalid email address");
    }

    return this.findOne({ email }).exec();
}

export async function createUser(
    this: Model<IUser>,
    userDetails: IUser,
): Promise<UserDoc> {
    const hashedPassword = await hashPassword(userDetails.password);
    const newUser = new this({
        ...userDetails,
        password: hashedPassword,
    });

    return newUser.save();
}

export type UserEdit = Pick<IUser, "firstName" | "lastName" | "email">

export async function editUser(
    this: Model<IUser>,
    userId: string,
    userDetails: UserEdit,
): Promise<UserDoc> {
    const user = await findUserByIdOrFail(this, userId);

    user.firstName = userDetails.firstName;
    user.lastName = userDetails.lastName;
    user.email = userDetails.email;

    return user.save();
}

export async function isUserBlocked(user: UserDoc): Promise<boolean> {
    if (user?.blocked?.isBlocked) {
        const { expiry } = user.blocked;

        // If no expiry and user is blocked
        if (!expiry) {
            return true;
        }

        // If expiry date had not passed
        if (!dateInPast(expiry)) {
            return true;
        }

        // If expiry date had passed, unblock user
        user.blocked = undefined;
        await user.save();
        return false;
    }

    return false;
}

export async function removeUser(this: Model<IUser>, userId: string): Promise<void> {
    const user = await findUserByIdOrFail(this, userId);

    await user.remove();
}

export function blockUser(user: UserDoc, expiry?: Date): Promise<UserDoc> {
    user.blocked = {
        isBlocked: true,
    };

    if (expiry) {
        user.blocked.expiry = expiry;
    }

    return user.save();
}

export async function addFailedAttempt(user: UserDoc): Promise<number> {
    if (user.failedAttempts) {
        user.failedAttempts += 1;
        await user.save();
    }

    return user.failedAttempts || 0;
}

export function resetFailedAttempts(user: UserDoc): Promise<UserDoc> {
    user.failedAttempts = 0;
    return user.save();
}
