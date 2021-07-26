import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      thirdly: string;
      text: string;
      textDimmed: string;
      textMuted: string;
      border: string;
      place: string;
      activeRadioBox: string;
      bgBody: string;
    };
    font: {
      size: string;
      sizeMenu: string;
      sizeTitle: string;
      sizeSubTitle: string;
      weightBold: string;
      weightMedium: string;
      weightNormal: string;
      family: string;
    };
    sizes: {
      borderRadius: string;
      sliderRunnableTrack: string;
      input: {
        padding: string;
      };
      block: {
        padding: string;
      };
      lineHeight: string;
    };
    media: {
      phone: string;
      tablet: string;
    };
  }
}
