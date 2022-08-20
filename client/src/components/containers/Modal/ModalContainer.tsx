import useOnClickOutside from "components/utils/layout/useOnClickOutside";
import React, { useRef } from "react";
import styled from "styled-components";
import Card from "../card/Card";
import CardBody from "../card/CardBody/CardBody";
import CardHeader from "../card/CardHeader/CardHeader";
import { ModalProps } from "./Modal";

export default function ModalContainer({
  display,
  setDisplay,
  title,
  subTitle,
  children,
}: ModalProps): JSX.Element | null {
  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, display, () => setDisplay(false));
  if (!display) return null;
  return (
    <CardStyled
      ref={ref}
    >
      <CardHeader
        title={title}
        subTitle={subTitle}
        closeAction={() => setDisplay(false)}
      />
      <CardBody>
        {children}
      </CardBody>
    </CardStyled>
  );
}

const CardStyled = styled(Card)`
  position: absolute;
  width: 70rem;
  z-index: 2;
  right: 50%;
  transform: translateX(50%);

  @media only screen and(max-width: 500px) {
      width: 100%;
  }
`;
