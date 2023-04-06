import { createGlobalStyle } from 'styled-components';

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
        font-family: ${({ theme }) => theme.fonts.text};
    }

    h1, h2, h3, h4, h5, h6 {
      font-family: ${({ theme }) => theme.fonts.heading};
    }

    button{
      font-family: ${({ theme }) => theme.fonts.labels};
    }

    button:hover {
        cursor: pointer;
    }

    img {
        max-width: 100%;
    }

`;
