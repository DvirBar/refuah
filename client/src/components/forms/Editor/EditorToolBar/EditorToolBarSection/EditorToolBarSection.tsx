import React from "react";

export interface EditorToolBarSectionProps {
    devider?: boolean,
    children: React.ReactNode
}

function EditorToolBarSection({ children }: EditorToolBarSectionProps): JSX.Element {
  return (
    <div>
      {children}
    </div>
  );
}

export default EditorToolBarSection;
