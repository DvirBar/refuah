import React, { useCallback } from "react";
import {
  DefaultElement, Editable, RenderElementProps,
} from "slate-react";
import { BoldElementInline, CodeElement } from "../Elements/Elements";

function EditorBody(): JSX.Element {
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "bold":
        return <BoldElementInline {...props} />;
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Editable
      renderElement={renderElement}
    />
  );
}

export default EditorBody;
