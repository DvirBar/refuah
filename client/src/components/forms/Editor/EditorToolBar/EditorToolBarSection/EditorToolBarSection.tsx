import React from "react";
import styled, { css } from "styled-components";
import { Theme } from "styles/types";

export interface EditorToolBarSectionProps {
    devider?: boolean,
    children: React.ReactNode
}

function EditorToolBarSection({ devider, children }: EditorToolBarSectionProps): JSX.Element {
  return (
    <DivWrapper $devider={!!devider}>
      {children}
    </DivWrapper>
  );
}

interface ComponentParams extends Theme {
  $devider: boolean
}

const DivWrapper = styled.div`
  ::after {
    width: 2px;
    height: 100%;
    ${({ $devider, theme }: ComponentParams) => {
    if ($devider) {
      return css`
          background-color: ${theme.colors.strongGray};
        `;
    }

    return css``;
  }}
    ;
  }
`;

export default EditorToolBarSection;
