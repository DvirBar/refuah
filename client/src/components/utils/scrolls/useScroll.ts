/* eslint-disable no-undef */
import {
  RefObject,
  //   useCallback,
  useEffect,
  useState,
} from "react";

export default function useScroll(ref: RefObject<HTMLElement>): number {
  const [scrollTop, setScrollTop] = useState(0);

  //   const listener = useCallback((currentRef: HTMLElement | null) => {
  //     if (currentRef) {
  //       setScrollTop(currentRef.scrollTop);
  //     }
  //   }, [setScrollTop]);

  useEffect(() => {
    const currentRef = ref.current;
    currentRef?.addEventListener("scroll", () => {
      setScrollTop(currentRef.scrollTop);
    });

    return function cleanup() {
      currentRef?.removeEventListener("scroll", () => {
        setScrollTop(currentRef.scrollTop);
      });
    };
  }, [ref, setScrollTop]);

  return scrollTop;
}
