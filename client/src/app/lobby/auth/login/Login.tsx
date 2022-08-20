import React from "react";
import Typography from "components/typography/Typography";
import Button from "components/forms/Button/Button";
import googleLogo from "assets/googleLogo.svg";
import ButtonLink from "components/navigation/ButtonLink/ButtonLink";
import styled from "styled-components";
import LoginForm from "./LoginForm";

interface IProps {
  toggleLogin: () => void
}

export default function Login({ toggleLogin }: IProps): JSX.Element {
  return (
    <Wrapper>
      <HeaderStyled variant="h1">
        התחברות
      </HeaderStyled>
      <LoginForm />
      <Button
        variant="secondary"
      >
        <ButtonContent>
          <ButtonLogo src={googleLogo} alt="googleLogo" />
          <span>התחברות עם גוגל</span>
        </ButtonContent>
      </Button>
      <NavAuth>
        <NoUserText>עדיין אין משתמש?</NoUserText>
        <ButtonLink onClick={() => toggleLogin()}>
          להרשמה
        </ButtonLink>
      </NavAuth>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeaderStyled = styled(Typography)`
  align-self: center;
`;

const ButtonContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
`;

const ButtonLogo = styled.img`
  align-self: flex-start;
`;

const NavAuth = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoUserText = styled.div`
  margin-bottom: 0.5rem;
`;
