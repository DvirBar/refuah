import { BaseEditor } from "slate";
import { ReactEditor } from "slate-react";

export type CustomEditor = BaseEditor & ReactEditor;

type CustomText = { text: string }

export type ParagraphElement = {
    type: "paragraph"
    children: CustomText[]
}

export type HeadingElement = {
    type: "heading"
    level: number
    children: CustomText[]
}

export type CodeElement = {
    type: "code"
    children: CustomText[]
}

export type CustomElement = ParagraphElement | HeadingElement | CodeElement;
export type EditorType = BaseEditor & ReactEditor

declare module "slate" {
    interface CustomTypes {
        Editor: EditorType
        Element: CustomElement
        Text: CustomText
    }
}
