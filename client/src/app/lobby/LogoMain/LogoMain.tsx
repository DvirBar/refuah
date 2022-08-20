import React from "react";
import logo from "assets/logo.svg";
import styled from "styled-components";
import { Theme } from "styles/types";

interface IProps {
  backgroundColor: string;
}

export default function LogoMain({ backgroundColor }: IProps): JSX.Element {
  return (
    <DivWrapper style={{ backgroundColor }}>
      <ImgLogo src={logo} alt="logo" />
      <DivLogoText>מועמדים לרפואה בישראל</DivLogoText>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  padding: 1rem;
  color: ${(props: Theme) => props.theme.colors.inverse};
`;

const ImgLogo = styled.img`
  height: 50px;   
`;

const DivLogoText = styled.div`
  color: ${(props: Theme) => props.theme.colors.inverse};
  font-size: 2.5rem;
  margin-right: 1rem;
`;
