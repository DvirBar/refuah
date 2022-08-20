import React from "react";
import styled from "styled-components";
import { Theme } from "styles/types";

function EditorToolBar(): JSX.Element {
  return (
    <Wrapper />
  );
}

const Wrapper = styled.div`
  border-radius: 1.5rem;
  box-shadow: ${({ theme }: Theme) => theme.shadows.main};
  background-color: ${({ theme }: Theme) => theme.colors.utilsBack};
  width: 100%;
  height: 6rem;
  padding: 1rem 2rem;
`;

export default EditorToolBar;
