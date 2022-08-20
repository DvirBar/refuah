import React from "react";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import styled from "styled-components";
import { Theme } from "styles/types";

interface IProps {
  text: string,
  toggleLogin: () => void
}

export default function NavigateAuth({ text, toggleLogin }: IProps): JSX.Element {
  return (
    <ButtonLink onClick={toggleLogin}>
      <DivRegisterLink>
        <DivText>{text}</DivText>
      </DivRegisterLink>
    </ButtonLink>
  );
}

const DivRegisterLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props: Theme) => props.theme.colors.main};
  cursor: pointer;
`;

const DivText = styled.div`
  font-size: 1.8rem;
`;
