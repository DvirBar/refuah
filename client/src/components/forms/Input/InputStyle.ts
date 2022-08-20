import styled, { css } from "styled-components";
import { Theme, ThemeVars } from "styles/types";

interface StyleParams extends Theme {
    $isElementFocused: boolean,
    $error: boolean,
    $readOnly: boolean
}

const elementFocusedStyle = (isFocused: boolean, theme: ThemeVars) => {
  if (isFocused) {
    return css`
        color: ${theme.colors.main};
        & > ${Container} {
            border: 2.5px solid;
            border-color: $color-main;
            color: $color-main;
        }
    `;
  }

  return css``;
};

const errorStyle = (error: boolean, theme: ThemeVars) => {
  if (error) {
    return css`
            color: ${theme.colors.danger};
            & > ${Container} {
                border-color: ${theme.colors.danger};
            }
        `;
  }

  return css``;
};

const readOnlyStyle = (readOnly: boolean) => {
  if (readOnly) {
    return css`
            cursor: pointer !important;
        `;
  }

  return css``;
};

const Wrapper = styled.div`
    color: ${(props: Theme) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    width: 100%;

    ${({ $isElementFocused, theme }: StyleParams) => elementFocusedStyle($isElementFocused, theme)}
    ${({ $error, theme }: StyleParams) => errorStyle($error, theme)}
    ${({ $readOnly }: StyleParams) => readOnlyStyle($readOnly)}
`;

const Container = styled.div`
    border: 1px solid ${(props: Theme) => props.theme.colors.secondary};
    padding: 0 0.5rem;
    height: 4.5rem;
    border-radius: 4px;
    color: ${(props: Theme) => props.theme.colors.secondary};
    margin-bottom: 0.5rem;
    display: flex;
    transition: border 200ms linear;
    background-color: #fff;

    @media (hover: hover) {
        &:hover {
            border-color: ${(props: Theme) => props.theme.colors.main};
        }
    }
`;

const Label = styled.span`
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
`;

const Chip = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Input = styled.input`
    border: none;
    background-color: transparent;
    flex: 1;
    padding: 0 0.5rem;

    &:read-only {
        cursor: pointer;
    }
`;

const InputStyle = {
  Wrapper,
  Container,
  Label,
  Chip,
  Input,
};

export default InputStyle;
