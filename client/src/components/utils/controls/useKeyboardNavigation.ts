import React, { useState, KeyboardEvent } from "react";

export interface KeyboardNavigationHookProps<T, S> {
    elements: React.ReactElement<S>[],
    value: T,
    onEnter: (focusedIndex: number) => void
}

export interface KeyboardNavigationHookReturn {
    focusedIndex: number,
    handleKeyDown: (event: KeyboardEvent) => void,
}

export default function useKeyboardNavigation<T, S extends { value: T }>({
  elements,
  value,
  onEnter,
}: KeyboardNavigationHookProps<T, S>): KeyboardNavigationHookReturn {
  const [focusedIndex, setFocusedIndex] = useState(-1);

  const handleArrow = (keyCode: string) => {
    function validateIndex(currentIndex: number) {
      if (currentIndex === -1) {
        const childIndex = elements.findIndex(element => element?.props.value === value);

        return childIndex;
      }

      return currentIndex;
    }

    if (keyCode === "ArrowUp") {
      setFocusedIndex(currentIndex => {
        const indexToUse = validateIndex(currentIndex);

        if (indexToUse - 1 >= 0) {
          return indexToUse - 1;
        }

        return currentIndex;
      });
    } else if (keyCode === "ArrowDown") {
      setFocusedIndex(currentIndex => {
        const indexToUse = validateIndex(currentIndex);
        if (indexToUse + 1 < elements.length) {
          return indexToUse + 1;
        }

        return currentIndex;
      });
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter" && focusedIndex >= 0 && focusedIndex < elements.length) {
      onEnter(focusedIndex);
    } else if (e.key === "ArrowUp" || e.key === "ArrowDown") {
      handleArrow(e.key);
    }
  };

  return {
    focusedIndex,
    handleKeyDown,
  };
}
