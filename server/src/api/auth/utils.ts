import bcrypt from "bcryptjs";
import { Response, Request, CookieOptions } from "express";
import jwt from "jsonwebtoken";
import { validatePassword } from "./db/validation";
import { Payload } from "./types";
import { IUser, UserSecureDetails } from "./db/types";

export const hashString = async (string: string): Promise<string> => {
  if (string.length <= 64) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(string, salt);
  }

  throw new Error("Dos attempt! user tried to insert password greater than 64.");
};

export const hashPassword = async (password: string): Promise<string> => {
  if (validatePassword(password)) {
    return hashString(password);
  }

  throw new Error("Validation error: password is invalid");
};

const refreshTokenExp = 31536000; // 1 year
const accessTokenExp = 900; // 15 minutes

export const refreshCookieSettings = {
  name: "_rt",
  options: {
    httpOnly: true,
    path: "/api/auth/refreshToken",
    maxAge: refreshTokenExp * 1000,
    secure: process.env.NODE_ENV === "production",
  },
};

const accessCookieSettings = {
  name: "_at",
  options: {
    httpOnly: true,
    maxAge: accessTokenExp * 1000,
    secure: process.env.NODE_ENV === "production",
  },
};

export const cookieSettings = {
  access: accessCookieSettings,
  refresh: refreshCookieSettings,
};

export const verifyAccessToken = (
  token: string,
): string | jwt.JwtPayload => jwt.verify(token, process.env.JWT_SECRET as jwt.Secret);

export const verifyRefreshToken = (
  token: string,
): string | jwt.JwtPayload => jwt.verify(token, process.env.JWT_SECRET_REFRESH as jwt.Secret);

export const createAccessToken = (payload: Payload): string => jwt.sign(
  payload,
        process.env.JWT_SECRET as jwt.Secret,
        { expiresIn: accessTokenExp },
);

export const createRefreshToken = (payload: Payload): string => jwt.sign(
  payload,
        process.env.JWT_SECRET_REFRESH as jwt.Secret,
        { expiresIn: refreshTokenExp },
);

export const createAccessCookie = (res: Response, token: string): Response => res.cookie(
  accessCookieSettings.name,
  token,
  accessCookieSettings.options,
);

export const createRefreshCookie = (res: Response, token: string): Response => res.cookie(
  refreshCookieSettings.name,
  token,
  refreshCookieSettings.options,
);

export const clearAccessCookie = (res: Response): Response => res.clearCookie(
  accessCookieSettings.name,
  accessCookieSettings.options,
);

export const clearRefreshCookie = (res: Response): Response => res.clearCookie(
  refreshCookieSettings.name,
  refreshCookieSettings.options,
);

export const getAccessCookie = (req: Request): string => req.cookies[accessCookieSettings.name];

export const getRefreshCookie = (req: Request): string => req.cookies[refreshCookieSettings.name];

export const userWithoutPassword = (user: IUser): UserSecureDetails => {
  const {
    password,
    formerPasswords,
    failedAttempts,
    blocked,
    ...newUser
  } = user.toObject();

  return newUser;
};
