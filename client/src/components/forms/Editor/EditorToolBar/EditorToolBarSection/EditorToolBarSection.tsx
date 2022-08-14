import React from "react";
import styles from "./EditorToolBarSection.module.scss";

export interface EditorToolBarSectionProps {
    devider?: boolean,
    children: React.ReactNode
}

function EditorToolBarSection({ devider, children }: EditorToolBarSectionProps): JSX.Element {
  return (
    <div className={devider ? styles.devider : ""}>
      {children}
    </div>
  );
}

export default EditorToolBarSection;
