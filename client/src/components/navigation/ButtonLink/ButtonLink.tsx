/* eslint-disable no-undef */
import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Theme } from "styles/types";

export default function ButtonLink(props: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element {
  const {
    children,
    className,
  } = props;

  return (
    <Wrapper
      {...props}
      type="button"
      className={className}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props: Theme) => props.theme.colors.main};
  cursor: pointer;
  text-decoration: none;

  &:hover {
      text-decoration: underline;
  }
`;
