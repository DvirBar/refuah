import { GenObj } from "./types";

export const isEmptyObject = (obj: GenObj<unknown>): boolean => Object.keys(obj).length === 0;
