import Typography from "components/typography/Typography";
import React from "react";
import { RenderElementProps } from "slate-react";

const CodeElement = ({
  attributes,
  children,
}: RenderElementProps): JSX.Element => (
  <pre {...attributes}>
    <code>{children}</code>
  </pre>
);

const BoldElementInline = ({
  children,
}: RenderElementProps): JSX.Element => (
  <Typography variant="bold">
    {children}
  </Typography>
);

const DefaultElement = ({
  attributes,
  children,
}: RenderElementProps): JSX.Element => (
  <p {...attributes}>{children}</p>
);

export {
  CodeElement,
  BoldElementInline,
  DefaultElement,
};
