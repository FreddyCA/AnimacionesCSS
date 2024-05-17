import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    html {
        font-size: 16px;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyle;
