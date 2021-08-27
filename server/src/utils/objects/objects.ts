import { GenObj } from "./types";

export function removeFromObject(obj: GenObj, keys: string[]) {
    const newObject: GenObj = {};
    Object.keys(obj).forEach((key) => {
        if (!keys.includes(key)) {
            newObject[key] = obj[key];
        }
    });

    return newObject;
}
