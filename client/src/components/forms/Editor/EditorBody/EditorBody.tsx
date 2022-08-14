import React, { useCallback } from "react";
import { Descendant } from "slate";
import {
  DefaultElement, Editable, ReactEditor, RenderElementProps, Slate,
} from "slate-react";
import { CodeElement } from "../Elements/Elements";

export interface EditorBodyProps {
    editor: ReactEditor
}

const initialValue: Descendant[] = [];

function EditorBody({ editor }: EditorBodyProps): JSX.Element {
  const renderElement = useCallback((props: RenderElementProps) => {
    switch (props.element.type) {
      case "code":
        return <CodeElement {...props} />;
      default:
        return <DefaultElement {...props} />;
    }
  }, []);

  return (
    <Slate editor={editor} value={initialValue}>
      <Editable
        renderElement={renderElement}
      />
    </Slate>
  );
}

export default EditorBody;
