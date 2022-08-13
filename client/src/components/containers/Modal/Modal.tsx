import ModalLayout from "components/layout/ModalLayout/ModalLayout";
import Portal from "components/utils/Portal";
import React from "react";
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
  return (
    <Portal>
      <ModalLayout
        display={display}
        setDisplay={setDisplay}
      />
      <ModalContainer
        display={display}
        setDisplay={setDisplay}
        title={title}
        subTitle={subTitle}
      >
        {children}
      </ModalContainer>
    </Portal>

  );
}
