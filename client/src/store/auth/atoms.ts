import { atom } from "recoil";
import { StatusType } from "store/types";
import { AuthAtom } from "./types";

export const authAtom = atom<AuthAtom>({
  key: "authAtom",
  default: {
    isAuthenticated: false,
    user: null,
  },
});

export const resetPasswordAtom = atom<StatusType | undefined>({
  key: "resetPasswordAtom",
  default: undefined,
});
