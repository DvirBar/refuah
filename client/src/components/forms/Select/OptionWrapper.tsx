import React, { KeyboardEvent } from "react";

export interface OptionWrapperProps<T> {
    value: T;
    children: React.ReactNode;
    onClick: (value: T) => void;
    selectedValue: T | null
}

export default function OptionWrapper<T>({
  value,
  children,
  onClick,
  selectedValue,
}: OptionWrapperProps<T>): JSX.Element {
  const handleEnter = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onClick(value);
    }
  };

  return (
    <li
      role="option"
      onClick={() => onClick(value)}
      onKeyDown={e => handleEnter(e)}
      aria-selected={selectedValue === value ? "true" : "false"}
    >
      {children}
    </li>
  );
}
