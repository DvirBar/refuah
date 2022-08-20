import Portal from "components/utils/Portal";
import React from "react";
import { X } from "react-feather";
import styled from "styled-components";
import { Theme } from "styles/types";

export interface InformativeProps {
    message: string;
    isError: boolean;
}

export default function Informative({ message, isError }: InformativeProps): JSX.Element | null {
  if (!message) return null;

  return (
    <Portal>
      <Wrapper
        $isError={isError}
      >
        <CloseIcon size={20} />
        <div>
          {message}
        </div>
      </Wrapper>
    </Portal>
  );
}

interface WrapperStyle extends Theme {
  $isError: boolean
}

const Wrapper = styled.div`
  position: absolute;
  right: 50%;
  bottom: 5rem;
  transform: translateX(50%);
  width: 50rem;
  height: 5rem;
  box-shadow: $shadow-main;
  padding: 0 1rem;
  border-radius: 4px;
  z-index: 5;
  color: #fff;
  display: flex;
  align-items: center;
  background-color: ${({ $isError, theme }: WrapperStyle) => ($isError ? theme.colors.danger : theme.colors.success)};

  @media only screen and(max-width: 550px) {
      width: 95%;
  }
`;

const CloseIcon = styled(X)`
  position: absolute;
  left: 5px;
  top: 5px;
  cursor: pointer;

  &:hover {
      opacity: 0.7;
  }
`;
