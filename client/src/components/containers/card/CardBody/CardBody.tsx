import React from "react";
import styled from "styled-components";

export interface CardBodyProps {
    children: React.ReactNode
}

export default function CardBody({ children }: CardBodyProps): JSX.Element {
  return (
    <Body>
      {children}
    </Body>
  );
}

const Body = styled.div`
  padding: 2rem;
  background-color: #fff;
  flex: 1;
`;
