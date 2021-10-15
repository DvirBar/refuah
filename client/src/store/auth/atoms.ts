import { atom } from "recoil";
import { AuthAtom } from "./types";

export const authAtom = atom<AuthAtom>({
  key: "authAtom",
  default: {
    isAuthenticated: false,
    user: null,
  },
});
