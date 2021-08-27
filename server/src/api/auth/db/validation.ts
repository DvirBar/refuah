import { splitSentence } from "../../../utils/strings/strings";

export function validateName(value: string): boolean {
    const validateEnglish = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]+[\s,.'-]*$/;
    // Escape starting punctuation
    if (/[\s,.'-]/.test(value[0])) {
        return false;
    }
    if (!splitSentence(value).some((string) => !validateEnglish.test(string))) {
        return true;
    }

    const validateHebrew = /^[א-ת'\s-]{2,}$/;
    const passedHebrew = !splitSentence(value).some((string) => !validateHebrew.test(string));

    return passedHebrew;
}

export function validateEmail(value: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

export function validatePassword(value: string): boolean {
    const hasReCapital = /([A-Z])+/.test(value);
    const hasReLetter = /([a-z])+/.test(value);
    const hasReDigit = /\d/.test(value);
    return value.length >= 8 && hasReCapital && hasReLetter && hasReDigit;
}
