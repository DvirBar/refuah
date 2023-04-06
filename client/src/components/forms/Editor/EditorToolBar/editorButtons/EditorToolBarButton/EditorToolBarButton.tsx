import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "styles/types";

export interface EditorToolBarButtonProps {
  icon: React.ReactNode
  disabled?: boolean
  stayOn?: boolean
}

function EditorToolBarButton({ icon, disabled, stayOn }: EditorToolBarButtonProps): JSX.Element {
  return (
    <Wrapper $stayOn={!!stayOn} $disabled={!!disabled}>
      {icon}
    </Wrapper>
  );
}

interface ComponentParams extends Theme {
  $disabled: boolean
  $stayOn: boolean
}

const editorButtonSelectedStyle = css`
  background-color: ${({ theme }: Theme) => theme.colors.inverseHover}
`;

const Wrapper = styled.span`
  border-radius: 0.8rem;
  padding: 0.5rem 1rem;

  ${({ $disabled, $stayOn }: ComponentParams) => {
    if (!$disabled) {
      if ($stayOn) {
        return editorButtonSelectedStyle;
      }
      return css`
       &:hover {
        ${editorButtonSelectedStyle}
       }`;
    }

    return css``;
  }}
 
`;

export default EditorToolBarButton;
