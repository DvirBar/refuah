/* eslint-disable no-undef */
import { lazyVerticalScroll } from "components/utils/scrolls/scrolls";
import React, { useRef } from "react";
import OptionStyle from "./OptionStyle";

export interface OptionProps {
    value: string | number | undefined;
    children: React.ReactNode;
    onClick?: (value: string | number | undefined) => void;
    selectedValue?: string | number | null;
    parentHeight?: number;
    parentTop?: number;
    isFocused?: boolean;
    parentScrollTop?: number;
    scrollParent?: (yScroll: number) => void;
}

function Option({
  value,
  children,
  onClick,
  selectedValue,
  parentHeight,
  parentScrollTop,
  parentTop,
  scrollParent,
  isFocused,
}: OptionProps): JSX.Element | null {
  const isSelected = selectedValue === value;
  const ref = useRef<HTMLDivElement>(null);
  const currentRef = ref.current;

  if (isFocused && currentRef && parentHeight
    && parentScrollTop !== undefined && parentTop !== undefined) {
    const {
      offsetTop,
      offsetHeight,
    } = currentRef;

    if (scrollParent) {
      const scrollY = lazyVerticalScroll({
        parentHeight,
        parentScroll: parentScrollTop,
        elemHeight: offsetHeight,
        elemTop: offsetTop - parentTop,
      });
      scrollParent(scrollY);
    }
  }

  if (onClick) {
    return (
      <li>
        <OptionStyle.Wrapper
          ref={ref}
          role="option"
          aria-selected={isSelected ? "true" : "false"}
          onKeyPress={() => {}}
          onClick={() => onClick(value)}
          tabIndex={-1}
          $isSelected={isSelected}
          $isFocused={!!isFocused}
        >
          {children}
        </OptionStyle.Wrapper>

      </li>
    );
  }

  return null;
}

export default Option;
