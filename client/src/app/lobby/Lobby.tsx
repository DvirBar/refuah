import React from "react";
import Card from "components/containers/card/Card";
import styled from "styled-components";
import LogoMain from "./LogoMain/LogoMain";
import Auth from "./auth/Auth";

export default function Lobby(): JSX.Element {
  const backgroundColor = "#486974";
  return (
    <DivWrapper>
      <LogoMain backgroundColor={backgroundColor} />
      <CardAuthWrapper>
        <Auth />
      </CardAuthWrapper>
    </DivWrapper>
  );
}

const DivWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  position: fixed;
  flex-direction: column;
  align-items: center;
  background-color: $color-main;
`;

const CardAuthWrapper = styled(Card)`
  width: 60rem;
  display: flex;
  justify-content: center;
`;
