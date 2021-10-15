import { JwtPayload } from "jsonwebtoken";
import { UserSecureDetails } from "./db/types";

export interface Payload extends JwtPayload {
    id: string
}

export type UserAccess = {
    accessToken: string;
    refreshToken: string;
    user: UserSecureDetails;
};
