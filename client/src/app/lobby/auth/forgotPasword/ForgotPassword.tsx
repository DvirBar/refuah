import Modal from "components/containers/Modal/Modal";
import React from "react";
import styled from "styled-components";
import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";

export interface IProps {
    display: boolean,
    setDisplay: (display: boolean) => void
}

export default function ForgotPassword({
  display,
  setDisplay,
}: IProps): JSX.Element {
  return (
    <Modal
      title="איפוס סיסמה"
      display={display}
      setDisplay={setDisplay}
    >
      <Wrapper>
        <ForgotPasswordForm />
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
