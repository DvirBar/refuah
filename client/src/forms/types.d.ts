import { ChangeEvent, FocusEvent, FormEvent } from "react";
import { GenObj } from "utils/objects/types";

export interface FormHookControls<ValuesType> {
    values: ValuesType;
    errors: ValuesType | GenObj;
    formTriggers: FormTriggers;
    handleSubmit: (
        e: FormEvent<HTMLFormElement>,
        onSubmit: (...args: (string|number)[]) => void
    ) => void;
}

export interface FormTriggers {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onBlur: (e: FocusEvent<HTMLInputElement>) => void;
}

export type ValidationError = {
    [key: string]: string
}

export interface FieldsConfig {
    fields: {
        [fieldName: string]: {
            [validatorName: string]: {
                message: string
            }
        }
    }
}

type ValidFieldValues = string | number | boolean | string[] | number[]

type ValidatorFunction = (value: any, message: string) => string | null;

export interface FormHookOptions {
    dynamicValidation?: boolean
}
