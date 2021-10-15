import useOnClickOutside from "components/utils/layout/useOnClickOutside";
import React, { useRef } from "react";
import Card from "../card/Card";
import CardBody from "../card/CardBody/CardBody";
import CardHeader from "../card/CardHeader/CardHeader";
import { ModalProps } from "./Modal";
import styles from "./Modal.module.scss";

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
    <Card
      ref={ref}
      className={styles.card}
    >
      <CardHeader
        title={title}
        subTitle={subTitle}
        closeAction={() => setDisplay(false)}
      />
      <CardBody>
        {children}
      </CardBody>
    </Card>
  );
}
