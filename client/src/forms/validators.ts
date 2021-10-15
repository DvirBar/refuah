import validator from "validator";
import { ValidatorFunction, ValidFieldValues } from "./types";

function isRequired(value: number | string | boolean, message: string): string | null {
  if (!value) { return message; }

  return null;
}

function isTooShortPass(value: string, message: string): string | null {
  if (value.length < 8) {
    return message;
  }

  return null;
}

function isNotStrongPass(value: string, message: string): string | null {
  const numPattern = new RegExp("[0-9]+");
  const capitalPattern = new RegExp("[A-Z]+");
  const letterPattern = new RegExp("[a-z]+");

  if (!numPattern.test(value)) {
    return message;
  }

  if (!capitalPattern.test(value)) {
    return message;
  }

  if (!letterPattern.test(value)) {
    return message;
  }

  return null;
}

function isRequiredArray(values: number[] | string [], message: string): string | null {
  if (values.length === 0) { return message; }

  return null;
}
function isNotEmail(value: string, message: string): string | null {
  if (!validator.isEmail(value)) { return message; }

  return null;
}

export const validators: { [functionName: string]: ValidatorFunction } = {
  isRequired,
  isTooShortPass,
  isNotStrongPass,
  isRequiredArray,
  isNotEmail,
};

export default function validate(
  validatorName: string,
  value: ValidFieldValues,
  message: string,
): string | null {
  const validatorFunction = validators[validatorName];

  if (validatorFunction) {
    return validatorFunction(value, message);
  }

  return null;
}
