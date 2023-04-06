import React from "react";
import EditorToolBarButton from "./EditorToolBarButton/EditorToolBarButton";

interface EditorSwitchProps {
  selected?: boolean
  icon: React.ReactNode
}

function EditorSwitch({ selected, icon }: EditorSwitchProps): JSX.Element {
  return (
    <EditorToolBarButton stayOn={selected} icon={icon} />
  );
}

export default EditorSwitch;
