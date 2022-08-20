import Typography from "components/typography/Typography";
import React from "react";
import { X } from "react-feather";
import styled from "styled-components";
import { Theme } from "styles/types";
import { darken } from "polished";

export interface CardHeaderProps {
    title?: string;
    subTitle?: string;
    closeAction?: () => void
}

export default function CardHeader({
  title,
  subTitle,
  closeAction,
}: CardHeaderProps): JSX.Element {
  return (
    <Header>
      {closeAction
        && (
        <CloseWrapper>
          <CloseButton
            onClick={() => closeAction()}
          >
            <CloseIcon size={24} />
          </CloseButton>
        </CloseWrapper>
        )}
      {(title || subTitle)
        && (
          <Titles>
            {title
          && <Typography variant="h1">{title}</Typography>}
            {subTitle
          && <Typography variant="subtitle">{subTitle}</Typography>}
          </Titles>
        )}

    </Header>
  );
}

const Header = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 1rem;
  width: 100%;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const CloseButton = styled.div`
  background-color: ${(props: Theme) => props.theme.colors.strongGray};
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props: Theme) => props.theme.colors.strongGray};
  border-radius: 50%;
  cursor: pointer;
  margin: 0.5rem;
  margin-bottom: 0;

  transition: border 150ms linear;
  @media (hover: hover) {
      &:hover {
          border-color: #464646;
      }
  }

  &:active {
      background-color: ${(props: Theme) => darken(0.1, props.theme.colors.strongGray)};
  }
`;

const CloseIcon = styled(X)`
  color: ${(props: Theme) => props.theme.colors.iconMain};
  stroke-width: 1px;
`;

const Titles = styled.div`
  text-align: center;
`;
