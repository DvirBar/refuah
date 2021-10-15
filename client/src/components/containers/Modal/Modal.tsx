import ModalLayout from "components/layout/ModalLayout/ModalLayout";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CardProps } from "../card/Card";
import { CardBodyProps } from "../card/CardBody/CardBody";
import { CardHeaderProps } from "../card/CardHeader/CardHeader";
import ModalContainer from "./ModalContainer";

export interface ModalProps extends
  CardProps,
  Omit<CardHeaderProps, "closeAction">,
  CardBodyProps
{
  display: boolean;
  setDisplay: (display: boolean) => void;
}

export default function Modal({
  display,
  setDisplay,
  title,
  subTitle,
  children,
}: ModalProps): JSX.Element {
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
    <>
      <ModalLayout
        display={display}
        setDisplay={setDisplay}
      />
      <div>
        testing ferew
      </div>
      <ModalContainer
        display={display}
        setDisplay={setDisplay}
        title={title}
        subTitle={subTitle}
      >
        {children}
      </ModalContainer>
    </>,
    rootElemRef.current,
  );
}
