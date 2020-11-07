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
    .header-logo {
        font-family: 'Barlow Condensed', sans-serif;
        color: #f5390f;
        font-size: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 25px;
    }
    .logo:hover, #instagram:hover, #facebook:hover, #tik-tok:hover {
        cursor: pointer;
        color: #4a403e;
    }
    .fa-dumbbell {
        transform: rotate(30deg);
        padding: 5px;
        color: #f5390f;
    }
    .column {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
    }
    .nav-content, .nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        text-shadow: 1px 1px #000000;
        width: 100%;
    }
    .nav-item {
        display: inline;
        margin-left: 25px;
        margin-right: 25px;
    }
   .nav-item:hover {
       cursor: pointer;
       color: #f5390f;
   }
   .footer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #f5390f;
    color: #ffffff;
    text-shadow: 2px 2px #4a403e;
}
.fa-instagram, .fa-facebook, .fa-tiktok {
    padding: 10px;
}
   #meet-nick {
       background-color: #f5390f;
   }
   .meet-nick {
       padding: 20px;
       margin: 30px 100px;
       color: #ffffff;
       font-size: 20px;
   }
   #fit-tip {
       display: flex;
       flex-direction: row;
       align-items: center;
       margin: 20px 250px 20px 250px;
   }
`;
