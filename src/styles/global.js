import { createGlobalStyle } from "styled-components";
import Merriweather from "../assets/fonts/Merriweather/Merriweather-Black.ttf"
import OpenSans from "../assets/fonts/Open_Sans/OpenSans-Regular.ttf"
import Roboto from "../assets/fonts/Roboto/Roboto-Regular.ttf"
// CSS GLobal Styles
export default createGlobalStyle`

@font-face {
    font-family: "Merriweather";
    src: url(${Merriweather});
}
@font-face {
    font-family: "OpenSans";
    src: url(${OpenSans});
}
@font-face {
    font-family: "Roboto";
    src: url(${Roboto});
}

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
