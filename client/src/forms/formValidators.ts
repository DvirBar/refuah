import { config } from "./config";
import { ValidationError, ValidFieldValues } from "./types";
import validate from "./validators";

const configFields = config.fields;

export function validateField(key: string, value: ValidFieldValues): string {
  const configField = configFields[key];
  let firstError = "";

  if (configField) {
    Object.keys(configField).forEach((configItem) => {
      const { message } = configField[configItem];
      const error = validate(configItem, value, message);
      if (error && !firstError) {
        firstError = error;
      }
    });
  } else {
    console.warn(`No config rule was defined for field: ${key}`);
  }

  return firstError;
}

export default function validateForm<ValuesType extends Record<string, ValidFieldValues>>(
  fields: ValuesType,
): ValidationError {
  const errors: ValidationError = {};

  Object.keys(fields).forEach((fieldKey) => {
    const error = validateField(fieldKey, fields[fieldKey]);
    if (error) {
      errors[fieldKey] = error;
    }
  });

  return errors;
}
