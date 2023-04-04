import { createGlobalStyle } from "styled-components";

// CSS GLobal Styles
export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        box-sizing: border-box;
        outline: none;
    }

    :root, html {
        font-size: 62.5%;
        font-family: serif;
    }

    body {
        font-size: 1.6rem;
    }

    button:hover {
        cursor: pointer;
    }

    img {
        max-width: 100%;
    }

`;
