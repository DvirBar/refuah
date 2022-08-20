import React from "react";
import styled from "styled-components";
import { Theme } from "styles/types";
// import { Transition, TransitionStatus } from "react-transition-group";

export interface InputErrorProps {
    error?: string;
}
export default function InputError({ error }: InputErrorProps): JSX.Element {
  // const style = {
  //   transition: `transform ${200}ms ease-in-out, opacity ${200}ms ease-in-out`,
  //   opacity: 0,
  // };

  // const transitionStyles: { [key in TransitionStatus]?:
  // { opacity: number, transform: string } } = {
  //   entering: { opacity: 1, transform: "translateX(0)" },
  //   entered: { opacity: 1, transform: "translateX(0)" },
  //   exiting: { opacity: 0, transform: "translateX(30px)" },
  //   exited: { opacity: 0, transform: "translateX(30px)" },
  // };

  return (
  // <Transition unmountOnExit mountOnEnter in={!!error} timeout={200}>
  // {state => (
    <Wrapper>
      {error || ""}
    </Wrapper>
  //   )}
  // </Transition>
  );
}

const Wrapper = styled.span`
    font-size: 1.3rem; 
    color: ${(props: Theme) => props.theme.colors.danger};
    height: 1.5rem;
`;
