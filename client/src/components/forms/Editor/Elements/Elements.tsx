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

const DefaultElement = ({
  attributes,
  children,
}: RenderElementProps): JSX.Element => (
  <p {...attributes}>{children}</p>
);

export {
  CodeElement,
  DefaultElement,
};
