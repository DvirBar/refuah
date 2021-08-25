import { Model } from "mongoose";
import { dateInPast } from "../../../utils/dates/dates";
import { hashPassword } from "../utils";
import { IUser, UserModel } from "./types";
import { validateEmail } from "./validation";

export function getUserByEmail(
    this: Model<IUser>,
    email: string,
): Promise<IUser | null> {
    if (!validateEmail(email)) {
        throw new Error("Tried to get user with invalid email address");
    }

    return this.findOne({ email }).exec();
}

export async function createUser(
    this: UserModel,
    userDetails: IUser,
): Promise<IUser> {
    const hashedPassword = await hashPassword(userDetails.password);
    const newUser = new this({
        ...userDetails,
        password: hashedPassword,
    });

    return newUser.save();
}

export async function editUser(
    this: UserModel,
    userId: string,
    userDetails: IUser,
): Promise<IUser> {
    const user = await this.getByIdOrFail(userId);
    user.firstName = userDetails.firstName;
    user.lastName = userDetails.lastName;
    user.email = userDetails.email;

    return user.save();
}

export function isUserBlocked(user: IUser): boolean {
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
        user.save();
        return false;
    }

    return false;
}

export async function removeUser(this: UserModel, userId: string): Promise<void> {
    const user = await this.getByIdOrFail(userId);

    await user.remove();
}

export function blockUser(user: IUser, expiry?: Date): Promise<IUser> {
    user.blocked = {
        isBlocked: true,
    };

    if (expiry) {
        user.blocked.expiry = expiry;
    }

    return user.save();
}

export async function addFailedAttempt(user: IUser): Promise<number> {
    if (user.failedAttempts) {
        user.failedAttempts += 1;
        await user.save();
    }

    return user.failedAttempts || 0;
}

export function resetFailedAttempts(user: IUser): Promise<IUser> {
    user.failedAttempts = 0;
    return user.save();
}
