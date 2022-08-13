import { Document, Model, Schema } from "mongoose";

export interface UserSecureDetails {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    isAdmin?: boolean;
    passwordLastChange?: Date;
    passwordTimesChanged?: number;
    dateCreated?: Date;
}

export interface IUser extends UserSecureDetails {
    password: string;
    formerPasswords?: string[];
    failedAttempts?: number;
    blocked?: {
        isBlocked: boolean;
        expiry?: Date;
    };
}

export type UserDoc = IUser & Document<IUser>
export type UserEdit = Pick<IUser, "firstName" | "lastName" | "email">

export interface IUserMethods extends UserDoc {
    edit(userDetails: UserEdit): Promise<UserDoc>,
    isBlocked(): Promise<boolean>,
    changePassword(newPassword: string): Promise<void>,
    removeUser(): Promise<void>,
    block(expiry?: Date): Promise<UserDoc>,
    addFailedAttempt(): Promise<number>,
    resetFailedAttempts(): Promise<UserDoc>
}

export interface UserModel extends Model<IUserMethods> {
    findUserByIdOrFail(userId: string): Promise<UserDoc>,
    getUserByEmail(email: string,): Promise<UserDoc | null>,
    createUser(userDetails: IUser): Promise<UserDoc>
}
