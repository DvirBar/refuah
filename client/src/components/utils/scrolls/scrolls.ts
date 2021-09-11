import { ElementVisibility, ScrollParameters } from "./types";

export function elementVisiblity(
  scrollParams: ScrollParameters,
): {
    visibility: ElementVisibility,
    direction: -1 | 1 | 0
} {
  const {
    elemTop,
    elemHeight,
    parentScroll,
    parentHeight,
  } = scrollParams;

  const bottomBoundary = parentScroll + parentHeight;
  const elemBottom = elemTop + elemHeight;

  if (elemBottom >= parentScroll && elemTop <= bottomBoundary) {
    if (elemTop < parentScroll) {
      return {
        visibility: ElementVisibility.Partial,
        direction: -1,
      };
    }

    if (elemBottom > bottomBoundary) {
      return {
        visibility: ElementVisibility.Partial,
        direction: 1,
      };
    }

    return {
      visibility: ElementVisibility.Visible,
      direction: 0,
    };
  }

  if (elemTop < parentScroll) {
    return {
      visibility: ElementVisibility.Hidden,
      direction: -1,
    };
  }

  return {
    visibility: ElementVisibility.Hidden,
    direction: 1,
  };
}

export function lazyVerticalScroll(scrollParams: ScrollParameters): number {
  const {
    visibility,
    direction,
  } = elementVisiblity(scrollParams);

  const {
    elemTop,
    elemHeight,
    parentScroll,
    parentHeight,
  } = scrollParams;

  if (visibility === ElementVisibility.Visible) {
    return parentScroll;
  }

  if (visibility === ElementVisibility.Partial && direction === 1) {
    const parentBottom = parentScroll + parentHeight;
    const elemBottom = elemTop + elemHeight;
    return parentScroll + elemBottom - parentBottom;
  }

  return elemTop;
}
