import { model } from "mongoose";
import { IUser, UserModel } from "./types";
import UserSchema from "./methods";

export default model<IUser, UserModel>("User", UserSchema);
