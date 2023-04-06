import React, { useState } from "react";
import { createEditor, Descendant } from "slate";
import { Slate, withReact } from "slate-react";
import EditorBody from "./EditorBody/EditorBody";

const initialValue: Descendant[] = [];

function Editor(): JSX.Element {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <Slate editor={editor} value={initialValue}>
      <EditorBody />
    </Slate>
  );
}

export default Editor;
