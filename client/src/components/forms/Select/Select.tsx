/* eslint-disable no-undef */
import useKeyboardNavigation from "components/utils/controls/useKeyboardNavigation";
import useOnClickOutside from "components/utils/layout/useOnClickOutside";
import React, { useRef, useState } from "react";
import { ChevronDown } from "react-feather";
import composeClassNames from "styles/composeClassNames";
import { Transition, TransitionStatus } from "react-transition-group";
import Input from "../Input/Input";
import { OptionProps } from "./Option";
import styles from "./Select.module.scss";

interface SelectProps {
    children: React.ReactElement<OptionProps>[];
    label: string;
    value?: string | number;
    name: string;
    onChange: (e: React.ChangeEvent<{value: string | number}>) => void,
}

function Select({
  children,
  label,
  value,
  name,
  onChange,
}: SelectProps): JSX.Element {
  const parentRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const [valueToDisplay, setValueToDisplay] = useState({
    name: children.find(child => child.props.value === value)?.props.children?.toString(),
    value,
  });

  if (valueToDisplay.value !== value) {
    setValueToDisplay({
      name: children.find(child => child.props.value === value)?.props.children?.toString(),
      value,
    });
  }
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (changeValue: string | number | undefined) => {
    const setValue = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value")?.set;
    setValue?.call(inputRef.current, changeValue);
    const event = new Event("change", { bubbles: true });
    inputRef.current?.dispatchEvent(event);
    setIsOpen(false);
  };

  const handleClick = (changeValue: string| number | undefined) => {
    handleChange(changeValue);
  };

  const onEnter = (index: number) => {
    handleChange(children[index].props.value);
  };

  const {
    focusedIndex,
    handleKeyDown,
  } = useKeyboardNavigation({ elements: children, value, onEnter });

  const onKeyDown = (e: React.KeyboardEvent) => {
    e.preventDefault();
    if (e.key === "Enter" && !isOpen) {
      setIsOpen(true);
    } else {
      handleKeyDown(e);
    }
  };

  const scrollParent = (yScroll: number) => {
    listRef.current?.scroll({
      top: yScroll,
      left: 0,
      behavior: "smooth",
    });
  };

  // const handleFocus = (event: React.FocusEvent) => {
  //   if (parentRef.current?.contains(event.target)) {
  //     setIsOpen(true);
  //   }
  // };

  // const handleBlur = (event: React.FocusEvent) => {
  //   if (!parentRef.current?.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  useOnClickOutside(parentRef, isOpen, () => setIsOpen(false));

  const handleParentClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (isOpen) {
      parentRef.current?.blur();
    }
  };

  const style = {
    transition: `opacity ${200}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles: { [key in TransitionStatus]?: { opacity: number } } = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <div
      ref={parentRef}
      tabIndex={0}
      role="menu"
      onKeyDown={onKeyDown}
      className={styles.select}
      onClick={handleParentClick}
      // onFocus={handleFocus}
      // onBlur={handleBlur}
    >
      <Input
        ref={inputRef}
        readOnly
        tabIndex={-1}
        aria-hidden="true"
        name={name}
        value={valueToDisplay.name || ""}
        onChange={e => onChange(e)}
        onClick={() => setIsOpen(!isOpen)}
        label={label}
        endChip={<ChevronDown className={composeClassNames(styles.chevron, isOpen ? styles.flip : "")} />}
      />
      <Transition unmountOnExit in={isOpen} timeout={200}>
        {state => (
          <ul
            tabIndex={-1}
            ref={listRef}
            style={{ ...style, ...transitionStyles[state] }}
            className={styles.optionsContainer}
          >
            {React.Children.map(children, (child, index) => React.cloneElement<OptionProps>(child, {
              onClick: handleClick,
              selectedValue: value,
              isFocused: index === focusedIndex,
              parentTop: listRef.current?.offsetTop,
              parentHeight: listRef.current?.offsetHeight,
              parentScrollTop: listRef.current?.scrollTop,
              scrollParent,
            }))}
          </ul>
        )}
      </Transition>

    </div>
  );
}

export default Select;
