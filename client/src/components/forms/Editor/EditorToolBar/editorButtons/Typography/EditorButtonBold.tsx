import { CustomEditor } from "components/forms/Editor/types";
import React from "react";
import { Editor, Transforms } from "slate";

function isBoldMarkActive(editor: CustomEditor) {
  const [match] = Editor.nodes(editor, {
    match: n => n.bold
  });
}

function EditorButtonBold(): JSX.Element {
  return (
    <div>EditorButtonBold</div>
  );
}

export default EditorButtonBold;
