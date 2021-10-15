import { Document, Model, Schema } from "mongoose";
import { UserEdit } from "./methods";

export interface UserSecureDetails {
    firstName: string;
    lastName: string
    email: string;
    isAdmin?: boolean;
    isPremium?: boolean;
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

export interface UserModel extends Model<IUser> {
    getUserByEmail: (this: Model<IUser>, email: string) => Promise<UserDoc | null>;
    createUser: (this: Model<IUser>, userDetails: IUser) => Promise<UserDoc>;
    editUser: (this: Model<IUser>, userId: string, userDetails: UserEdit) => Promise<UserDoc>;
    isUserBlocked: (user: UserDoc) => Promise<boolean>;
    blockUser: (user: UserDoc, expiry?: Date) => Promise<UserDoc>;
    addFailedAttempt: (user: UserDoc) => Promise<number>;
    resetFailedAttempts: (user: UserDoc) => Promise<UserDoc>;
    resetPassword: (this: Model<IUser>, user: UserDoc, newPassword: string) => Promise<void>
    removeUser: (this: Model<IUser>, userId: string) => Promise<void>;
}
