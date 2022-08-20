import React from "react";
import styled from "styled-components";
import { Theme } from "styles/types";

function EditorToolBarButton(): JSX.Element {
  return (
    <Wrapper>EditorToolBarButton</Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 1.5rem;

  &:hover {
      background-color: ${({ theme }: Theme) => theme.colors.inverseHover};
  }
`;

export default EditorToolBarButton;
