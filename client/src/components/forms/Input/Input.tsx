/* eslint-disable no-undef */
import React, { InputHTMLAttributes, useState } from "react";
import InputError from "../InputError/InputError";
import InputStyle from "./InputStyle";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClick?: (e: React.MouseEvent) => void;
    value: number | string | undefined;
    name: string;
    label: string;
    error?: string;
    startChip?: React.ReactNode;
    endChip?: React.ReactNode;
    isFocused?: boolean;
    readOnly?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref): JSX.Element => {
  const {
    name,
    value,
    onChange,
    onClick,
    label,
    error,
    startChip,
    endChip,
    readOnly,
    isFocused,
  } = props;

  const [isInternalFocused, setIsInternalFocused] = useState(false);

  const isElementFocused = typeof isFocused === "boolean" ? isFocused : isInternalFocused;

  return (
    <InputStyle.Wrapper
      onClick={onClick}
      role="none"
      onFocus={() => setIsInternalFocused(true)}
      onBlur={() => setIsInternalFocused(false)}
      $isElementFocused={isElementFocused}
      $error={!!error}
      $readOnly={!!readOnly}
    >
      <InputStyle.Label>
        {label}
      </InputStyle.Label>
      <InputStyle.Container>
        {startChip
          && (
          <InputStyle.Chip>
            {startChip}
          </InputStyle.Chip>
          )}
        <InputStyle.Input
          {...props}
          ref={ref}
          name={name}
          value={value}
          onChange={e => onChange(e)}
        />
        {endChip
          && (
          <InputStyle.Chip>
            {endChip}
          </InputStyle.Chip>
          )}
      </InputStyle.Container>
      <InputError error={error} />
    </InputStyle.Wrapper>
  );
});

export default Input;
