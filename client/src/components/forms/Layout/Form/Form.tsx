import React, { FormHTMLAttributes } from "react";
import styled from "styled-components";

export default function Form({
  children,
  onSubmit,
}: FormHTMLAttributes<HTMLFormElement>): JSX.Element {
  return (
    <Wrapper onSubmit={onSubmit}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  & > :not(:last-child) {
      margin-bottom: 1rem;
  }
`;
