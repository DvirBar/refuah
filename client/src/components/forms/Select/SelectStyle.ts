import { ChevronDown } from "react-feather";
import styled, { css } from "styled-components";
import { Theme } from "styles/types";

const Wrapper = styled.div`
    min-width: 10rem;
`;

interface ChipParams {
    $isOpen: boolean
}

const isOpenStyle = (isOpen: boolean) => {
  if (isOpen) {
    return css`
      transform: rotate(180deg);
    `;
  }
  return css``;
};

const Chip = styled(ChevronDown)`
    transition: transform 200ms ease-in-out;
    ${({ $isOpen }: ChipParams) => isOpenStyle($isOpen)}
`;

const OptionWrapper = styled.ul`
    padding: 1rem 0;
    border-radius: 4px;
    box-shadow: 0px 3px 6px ${(props: Theme) => props.theme.colors.mainOpacityBackground};
    max-height: 30rem;
    overflow-y: auto;
`;

export default {
  Wrapper,
  Chip,
  OptionWrapper,
};
