import React from "react";
import styled from "styled-components";
import { Theme } from "styles/types";
import { TypographyVariant } from "./types";

interface TypographyProps {
    variant: TypographyVariant,
    children: React.ReactNode,
    className?: string
}

export default function Typography({
  variant,
  children,
  className,
}: TypographyProps): JSX.Element | null {
  switch (variant) {
    case "h1":
      return <StyleH1 className={className}>{children}</StyleH1>;
    case "h2":
      return <StyleH2 className={className}>{children}</StyleH2>;
    case "subtitle":
      return <StyleSubtitle className={className}>{children}</StyleSubtitle>;
    case "content":
      return <StyleContent className={className}>{children}</StyleContent>;
    case "bold":
      return <StyleBold className={className}>{children}</StyleBold>;
    default:
      return null;
  }
}

const StyleH1 = styled.h1`
  font-size: 3.2rem;
  font-weight: 800;
  color: ${(props: Theme) => props.theme.colors.header};
  margin-bottom: 1rem;
`;

const StyleH2 = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  color: ${(props: Theme) => props.theme.colors.header};
  margin-bottom: 1rem;
`;

const StyleSubtitle = styled.div`
  font-size: 2rem;
  font-weight: 400;
  color: ${(props: Theme) => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const StyleContent = styled.div`
  font-weight: 300;
`;

const StyleBold = styled.span`
  font-weight: 600;
`;
