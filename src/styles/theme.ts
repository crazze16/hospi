import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    primary: "#EA6B26",
    secondary: "#F4EBDA",
    thirdly: "#72310E",
    text: "#032565",
    textDimmed: "#6F7F9E",
    textMuted: "#978E88",
    border: "#DCD6CE",
    place: "#FFFFFF",
    activeRadioBox: "#FFF1D0",
    bgBody: "#FFFCF6",
  },
  font: {
    size: "16px",
    sizeMenu: "14px",
    sizeTitle: "24px",
    sizeSubTitle: "20px",
    weightBold: "700",
    weightMedium: "600",
    weightNormal: "400",
    family: "UpgradeCustom, sans-serif",
  },
  sizes: {
    borderRadius: "4px",
    sliderRunnableTrack: "0.5em",
    input: {
      padding: "0.5em",
    },
    block: {
      padding: "0.5em 1em",
    },
    lineHeight: "130%",
  },
  media: {
    phone: "(max-width: 425px)",
    tablet: "(max-width: 768px) and (min-width: 425px)",
  },
};

export { theme };
