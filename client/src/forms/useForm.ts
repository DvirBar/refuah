import {
  useState,
  ChangeEvent,
  FormEvent,
  FocusEvent,
} from "react";
import { isEmptyObject } from "utils/objects/objects";
import {
  FormHookControls, FormHookOptions, ValidationError, ValidFieldValues,
} from "./types";
import validateForm from "./formValidators";

export enum Status {
  Loading = "loading",
  Success = "success",
  Fail = "fail"
}

function useForm<ValuesType extends Record<keyof ValuesType, ValidFieldValues>>(
  defaultValues: ValuesType,
  options?: FormHookOptions,
): FormHookControls<ValuesType> {
  const [values, setValues] = useState<ValuesType>(defaultValues);
  const [errors, setErrors] = useState<ValidationError>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (options?.dynamicValidation) {
      const value = values[e.target.name as keyof ValuesType];
      const currentError = validateForm({ [e.target.name]: value });

      setErrors(prevErrors => {
        let newErrorsState = {
          ...prevErrors,
          ...currentError,
        };
        if (Object.keys(currentError).length === 0) {
          const newErrors: ValidationError = {};
          Object.keys(prevErrors).forEach(fieldName => {
            if (fieldName !== e.target.name) {
              newErrors[fieldName] = prevErrors[fieldName];
            }
          });
          newErrorsState = newErrors;
        }

        return newErrorsState;
      });
    }
  };

  const handleSubmit = (
    e: FormEvent<HTMLFormElement>,
    onSubmit: (...args: (string|number)[]) => void,
  ) => {
    e.preventDefault();

    const formErrors = validateForm(values);

    if (isEmptyObject(formErrors)) {
      setErrors(formErrors);
      onSubmit();
    } else {
      setErrors(formErrors);
    }
  };

  const formTriggers = {
    onChange: handleChange,
    onBlur: handleBlur,
  };

  return {
    values,
    errors,
    formTriggers,
    handleSubmit,
  };
}

export default useForm;
