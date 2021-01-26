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
    #header-logo {
        font-family: 'Barlow Condensed', sans-serif;
        color: #E53030;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 25px;
        text-shadow: 2px 2px #353535;
    }
    #header-name {
        display: block;
        font-size: 40px;
        line-height: 0px;
    }
    #header-icon {
        font-size: 40px;
    }
    #header-logo:hover, #instagram:hover, #facebook:hover, #tik-tok:hover {
        cursor: pointer;
        color: #353535;
    }
    .fa-dumbbell {
        transform: rotate(30deg);
        padding: 5px;
        color: #E53030;
    }
    .column {
        display: flex;
        flex-direction: column;
        padding: 10px;
        margin: 10px;
    }
    .nav-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        text-shadow: 1px 1px #353535;
        width: 100vw;
    }
    .nav-item {
        display: inline;
        margin-left: 25px;
        margin-right: 25px;
        font-size: 25px;
    }
   .nav-item:hover {
       cursor: pointer;
       color: #E53030;
   }
   .footer{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #E53030;
    color: #ffffff;
    text-shadow: 2px 2px #353535;
}
.fa-instagram, .fa-facebook, .fa-tiktok {
    padding: 10px;
}
   #meet-nick {
       background-color: #E53030;
   }
   .meet-nick {
       padding: 20px;
       color: #ffffff;
       font-size: 20px;
   }
   #fit-tip {
       display: flex;
       flex-direction: row;
       align-items: center;
       margin: 20px;
       font-size: 20px;
   }
   #card-container {
       padding: 20px;
   }
   .horizontal-rule {
       opacity: 0.75;
   }
   #contact {
       background-color: #353535;
       color: white;
       padding: 10px;
   }
//    .contact-container {
//        display: flex;
//        flex-flow: column wrap;
//        padding: 20px;
//        margin: 20px 0;
//        width: 1050px;
//        background-color: #ffffff;
//        border: 1px solid #000000;
//        box-shadow: 2px 2px #353535;
//    }
//    #name-email {
//        display: flex;
//        flex-direction: row;
//        justify-content: space-evenly;
//    }
//    #name, #email {
//        width: 50%;
//    }
//    .contact-input {
//        margin: 5px;
//    }
//    #submit-button {
//        background-color: #F08888;
//    }

   @media screen and (max-width: 1400px) {
    .service-card-container {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        height: 750px;
        // background-color: #E53030;
    }
   }
`;
