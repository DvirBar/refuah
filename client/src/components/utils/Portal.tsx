import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export interface PortalProps {
  children: React.ReactNode[] | React.ReactNode
}

export default function Portal({ children }: PortalProps): JSX.Element {
  const rootElemRef = useRef<HTMLDivElement>(document.createElement("div"));
  useEffect(() => {
    const parentElement = document.getElementById("presentation");
    const currentRootElem = rootElemRef.current;
    parentElement?.appendChild(currentRootElem);

    return function removeElement() {
      currentRootElem.remove();
    };
  }, [rootElemRef]);
  return ReactDOM.createPortal(
    <>{children}</>,
    rootElemRef.current,
  );
}
