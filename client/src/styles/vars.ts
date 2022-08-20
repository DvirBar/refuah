import { darken, rgba } from "polished";
import { Colors, BaseColors, ThemeVars } from "./types";

const baseColors: BaseColors = {
  main: "#486974",
  strongGray: "#ddd",
  iconMain: "#464646",
  danger: "#d13232",
  success: "#277a2a",
  secondary: "#9F9F9F",
  inverse: "#fff",
  textColor: "#000",
  utilsBack: "#f2f2f2",
  header: "#585858",
};

const colors: Colors = {
  ...baseColors,
  mainDark: darken(0.1, baseColors.main),
  mainOpacityBackground: rgba(baseColors.main, 0.16),
  dangerLighter: "#de3535",
  inverseHover: "#f8f8f8",
  successLighter: "#309634",
};

const theme: ThemeVars = {
  main: "0px 0px 6px rgba(0, 0, 0, 0.16)",
  colors,
  shadows: {
    main: "0px 0px 6px rgba(0, 0, 0, 0.16)",
  },
};

export default theme;
