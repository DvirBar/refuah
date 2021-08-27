import bcrypt from "bcryptjs";
import User from "./db/model";
import { UserAlreadyExists, InvalidCredentials, UserIsBlocked } from "./messages.json";
import { Payload, UserAccess } from "./types";
import { IUser, UserDoc, UserSecureDetails } from "./db/types";
import {
    createAccessToken,
    createRefreshToken,
    userWithoutPassword,
    verifyAccessToken,
    verifyRefreshToken,
} from "./utils";
import { findUserByIdOrFail } from "./db/methods";

export async function getUserByToken(token: string): Promise<IUser> {
    const decoded = verifyAccessToken(token) as Payload;
    const user = await findUserByIdOrFail(User, decoded.id);

    return user;
}

export async function register(userDetails: IUser): Promise<UserAccess> {
    // Check for user with the requested email
    const possibleEmail = await User.getUserByEmail(userDetails.email);
    if (possibleEmail) {
        throw UserAlreadyExists;
    }

    // Create user
    const user = await User.createUser(userDetails);

    const payload: Payload = { id: user.id };
    // Sign and return token with created user id as payload
    const accessToken = createAccessToken(payload);
    const refreshToken = createRefreshToken(payload);

    const userObj = userWithoutPassword(user);

    return {
        accessToken,
        refreshToken,
        user: userObj,
    };
}

export async function login(email: string, loginPassword: string): Promise<UserAccess> {
    const user = await User.getUserByEmail(email);

    // Validating creadentials and checking that user is not blocked
    if (!user) {
        throw InvalidCredentials;
    }

    if (User.isUserBlocked(user)) {
        throw UserIsBlocked;
    }

    const isMatch = await bcrypt.compare(loginPassword, user.password);

    if (!isMatch) {
        const failedAttempts = await User.addFailedAttempt(user);

        if (failedAttempts >= 5) {
            User.blockUser(user);
            throw UserIsBlocked;
        }

        throw InvalidCredentials;
    }

    // Authorization completed, log user in
    User.resetFailedAttempts(user);
    const tokenPayload = { id: user.id };
    const accessToken = createAccessToken(tokenPayload);
    const refreshToken = createRefreshToken(tokenPayload);
    const userObj = userWithoutPassword(user);

    return {
        accessToken,
        refreshToken,
        user: userObj,
    };
}

export async function refreshOldToken(refreshToken: string): Promise<string> {
    const decoded = verifyRefreshToken(refreshToken) as Payload;

    const user = await findUserByIdOrFail(User, decoded.id);

    return createAccessToken({ id: user.id });
}

export function isUserBlocked(user: UserDoc): boolean {
    return User.isUserBlocked(user);
}

export async function editUser(user: IUser, userId: string): Promise<UserSecureDetails> {
    // TODO: add verification email if email was changed
    const editedUser = await User.editUser(userId, user);
    return userWithoutPassword(editedUser);
}

export async function removeUser(delUserId: string): Promise<void> {
    return User.removeUser(delUserId);
}
