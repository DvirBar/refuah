import React, { CSSProperties, forwardRef } from "react";
import styled from "styled-components";

export interface CardProps {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
}

const Card = forwardRef<HTMLDivElement, CardProps>((props, ref) => {
  const {
    children,
  } = props;

  return (
    <Wrapper
      ref={ref}
    >
      {children}
    </Wrapper>
  );
});

const Wrapper = styled.div`
    border-radius: 15px;
    padding-bottom: 1rem;
    background-color: #fff;
    display: block;
    box-shadow: ${props => props.theme.shadows.main};
`;

export default Card;
