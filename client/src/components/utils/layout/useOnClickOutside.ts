/* eslint-disable no-undef */
import React, { useEffect } from "react";

function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  display: boolean,
  callback: (event?: MouseEvent | TouchEvent) => void,
): void {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      // Do nothing if clicking ref element or descendent elements
      if (
        !ref?.current
        || ref?.current.contains(event.target as Node)
        || !display
      ) { return; }

      callback(event);
    };

    // For mice
    document.addEventListener("mousedown", (event: MouseEvent) => listener(event));
    // For touch screens
    document.addEventListener("touchstart", (event: TouchEvent) => listener(event));

    return () => {
      // Cleanup listeners
      document.removeEventListener("mousedown", (event: MouseEvent) => listener(event));
      document.removeEventListener("touchstart", (event: TouchEvent) => listener(event));
    };
  }, [ref, callback, display]);
}

export default useOnClickOutside;
