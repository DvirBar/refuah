import React, { useState } from "react";
import { createEditor } from "slate";
import { withReact } from "slate-react";
import EditorBody from "./EditorBody/EditorBody";

function Editor(): JSX.Element {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <div>
      <EditorBody editor={editor} />
    </div>
  );
}

export default Editor;
