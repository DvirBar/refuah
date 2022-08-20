import styled, { css } from "styled-components";
import { Theme, ThemeVars } from "styles/types";

interface StyleParams extends Theme {
    $isSelected: boolean
    $isFocused: boolean
}

const isSelectedStyle = (isSelected: boolean, isFocused: boolean, theme: ThemeVars) => {
  if (isSelected || isFocused) {
    return css`
            background-color: ${theme.colors.mainOpacityBackground};
            color: ${theme.colors.main};
        `;
  }

  return css``;
};

const Wrapper = styled.div`
    width: 100%;
    height: 4rem;
    padding: 1rem;
    cursor: pointer;
    color: ${(props: Theme) => props.theme.colors.secondary};
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: rgba(${(props: Theme) => props.theme.colors.main}, 0.08);
    }

    ${({ $isSelected, $isFocused, theme }: StyleParams) => isSelectedStyle($isSelected, $isFocused, theme)}
`;

export default {
  Wrapper,
};
