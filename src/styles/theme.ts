import { css } from "styled-components";

const options = {
  color: {
    primary: "#00254C",
    success: "#38B53E",
    danger: "#FF3333",
    warning: "#CCE5FF",

    primaryH: "#004A84",
    primaryM: "#3396FF",
    primaryL: "#D3E8F8",

    successM: "#8ADB8E",
    successL: "#C5EDC7",

    warningL: "#FFF7CC",

    dangerM: "#FF9999",
    dangerL: "#FFCCCC",

    gray0: "#FAFAFA",
    gray1: "#EDEDED",
    gray2: "#E6E6E6",
    gray3: "#D5D5D5",
    gray4: "#999999",
    gray5: "#2B2B2B",

    black: "#000000",
    white: "#FFFFFF",
  } as const,

  size: {
    xxsm: "0.25rem", // 4px
    xsm: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xlg: "2.5rem", // 40px
    xxlg: "3rem", // 48px
    xxxlg: "3.5rem", // 56px
    xxxxlg: "4rem", // 64px
  } as const,
};

export const theme = {
  ...options,

  // Custom properties
  card: css`
    background-color: ${options.color.white};
    padding: ${options.size.sm};
    border-radius: ${options.size.xxsm};
  `,
};
