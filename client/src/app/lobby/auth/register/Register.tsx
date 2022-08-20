import Typography from "components/typography/Typography";
import React from "react";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import styled from "styled-components";
import RegisterForm from "./RegisterForm";

interface IProps {
  toggleLogin: () => void
}

export default function Register({ toggleLogin }: IProps): JSX.Element {
  return (
    <DivRegister>
      <TypographyHeader variant="h1">
        הרשמה
      </TypographyHeader>
      <RegisterForm />
      <ButtonLink onClick={() => toggleLogin()}>
        להתחברות
      </ButtonLink>
    </DivRegister>
  );
}

const DivRegister = styled.div`
  display: flex;
  flex-direction: column;
`;

const TypographyHeader = styled(Typography)`
  align-self: center;
`;
