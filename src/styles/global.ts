import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
@font-face {
    font-family: "UpgradeCustom", sans-serif;
    src: url(${require("../assets/fonts/38095.otf")}) format("opentype");
}

@font-face {
    font-family: "UpgradeCustom", sans-serif;
    src: url(${require("../assets/fonts/38091.otf")}) format("opentype");
    font-weight: 700;
}

@font-face {
    font-family: "UpgradeCustom", sans-serif;
    src: url(${require("../assets/fonts/38097.otf")}) format("opentype");
    font-style: italic;
}
* {
    font-family: "UpgradeCustom", sans-serif;
}
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

#root {
    margin: 0 auto;
    background-color: ${theme.colors.bgBody};
    height: 100vh;
}
`;
