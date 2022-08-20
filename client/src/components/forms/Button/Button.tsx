/* eslint-disable no-undef */
import React, { ButtonHTMLAttributes } from "react";
import { Variants } from "components/types";
import styled, { css } from "styled-components";
import { Theme } from "styles/types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variants;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent) => void
}

export default function Button(props: ButtonProps): JSX.Element {
  const {
    variant = "main",
    children,
  } = props;

  return (
    <ButtonStyled
      tabIndex={-1}
      $variant={variant}
      {...props}
    >
      {children}
    </ButtonStyled>
  );
}

interface ButtonStyle extends Theme {
  $variant: Variants
}

const ButtonStyled = styled.button`
  background-color: ${(props: Theme) => props.theme.colors.main};
  border: 1px solid ${(props: Theme) => props.theme.colors.main};;
  color: ${(props: Theme) => props.theme.colors.inverse};;
  min-width: 12rem;
  width: 100%;
  height: 4.5rem;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.5rem;
  transition: background 150ms linear;
  font-weight: 400;

  &:active {
    opacity: 0.9;
  }


  ${(props: ButtonStyle) => {
    switch (props.$variant) {
      case "danger":
        return css`
          border-color: ${props.theme.colors.danger};
          background-color: ${props.theme.colors.danger};

          @media (hover: hover) and (pointer: fine) {
            &:hover {
              border-color: ${props.theme.colors.dangerLighter};
              background-color: ${props.theme.colors.dangerLighter};
            }
          }
        `;
      case "secondary":
        return css`
          background-color: ${props.theme.colors.inverse};
          border-color: ${props.theme.colors.secondary};
          color: ${props.theme.colors.textColor};

          @media (hover: hover) and (pointer: fine) { 
            &:hover {
              border-color: ${props.theme.colors.secondary};
              background-color: ${props.theme.colors.inverseHover};
            }
          }
        `;
      case "success":
        return css`
          border-color: ${props.theme.colors.success};
          background-color: ${props.theme.colors.success};

          @media (hover: hover) and (pointer: fine) { 
            &:hover {
              border-color: ${props.theme.colors.successLighter};
              background-color: ${props.theme.colors.successLighter};;
            }
          }
        `;
      default:
        return css`
          @media (hover: hover) and (pointer: fine) { 
            &:hover {
              border-color: ${props.theme.colors.mainDark};
              background-color: ${props.theme.colors.mainDark};
            }
          }
        `;
    }
  }} 
`;
