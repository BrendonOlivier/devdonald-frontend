import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Merriweather", serif;
        font-weight: 400;
        font-style: normal;
    }

    button {
        cursor: pointer;
    }
`;

export default globalStyles;