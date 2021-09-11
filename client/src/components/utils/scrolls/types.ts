export enum ElementVisibility {
    Visible = "Visible",
    Hidden = "Hidden",
    Partial = "Partial"
}

export interface ScrollParameters {
    elemTop: number,
    elemHeight: number,
    parentScroll: number,
    parentHeight: number,
}
