import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Montserrat', sans-serif;
    }
    .logo {
        font-family: 'Barlow Condensed', sans-serif;
        color: black;
    }
    .footer{
        display: flex;
        flex-direction: row;
        background-color: blue;
        color: white;
    }
    .column {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
    }
    .fab {
        padding: 10px;
    }
    .nav {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .fa-dumbbell {
        transform: rotate(30deg);
        padding: 5px;
    }
`;
