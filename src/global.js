import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    --slate-color: rgb(30,30,40);
    --red-color: #c7162b;
    --teal-color: #0096a1;
    }
  
    html, body {
        margin: 0;
        padding: 0;
    }
    *, *::after, *::before {
        box-sizing: border-box;
    }
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-family: "Montserrat", sans-serif;
    }
    #nav-dots {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
    #header-logo {
        font-family: "Barlow Condensed", sans-serif;
        color: var(--red-color);
        margin-left: 25px;
        text-shadow: 2px 2px var(--slate-color);
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
    #header-name {
        font-size: 40px;
        line-height: 0px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    div>h1, div>h5 {
        align-self: center;
        background: blue;
    }
    #header-icon {
        font-size: 40px;
    }
    #header-logo:hover, #instagram:hover, #facebook:hover, #tik-tok:hover {
        cursor: pointer;
        color: var(--slate-color);
    }
    .fa-dumbbell {
        transform: rotate(30deg);
        padding: 5px;
        color: var(--red-color);
    }
    // .nav-content {
    //     display: flex;
    //     flex-direction: row;
    //     justify-content: space-between;
    //     align-items: center;
    //     height: 100%;
    //     text-shadow: 1px 1px var(--slate-color);
    //     width: 100vw;
    // }
    // .nav-item {
    //     display: inline;
    //     margin-left: 25px;
    //     margin-right: 25px;
    //     font-size: 25px;
    // }

    .navBar {
        position: relative;
    }
    .navBar button {
        position: fixed;
        left: 40px;
        top: 40px;
        z-index: 10;
        cursor: pointer;
    }
    .menuNav {
        overflow-y: scroll;
        list-style: none;
        position: fixed:
        top: 0;
        background: darkcyan;
        left: 0;
        bottom: 0;
        height: 100vh;
        width: 0;
        overflow: hidden;
        max-width: 290px;
        z-index: 9;
    }
    .menuNav .showMenu {
        width: 100%;
    }
    a {
        display: block;
        padding: 10px 40px;
        text-decoration: none;
        color: #3fffd2;
        text-transform: uppercase;
        font-weight: bold;
    }
    .menuNav li:first-child {
        margin-top: 7rem;
    }

    .nav-item:hover {
        cursor: pointer;
        color: var(--red-color);
    }
     
  .fa-instagram, .fa-facebook, .fa-tiktok {
      padding: 10px;
  }
     .intro {
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;
         padding: 10px;
     }
     .intro img {
         margin: 15px;
         box-sizing: border-box;
         border-radius: 5px;
         border: 2px solid var(--slate-color);
     }
     .container {
         color: white;
         box-sizing: border-box;
         border-radius: 5px;
         border: 2px solid var(--red-color);
         background-color: var(--slate-color);
         width: 50%;
         padding: 10px;
     }
     .meet-nick {
         padding: 5px;
         font-size: 18px;
     }
     #fit-tip {
         display: flex;
         flex-direction: row;
         align-items: center;
         margin: 30px;
         font-size: 18px;
     }
     .fit-tip-text {
         color: white;
         box-sizing: border-box;
         border-radius: 5px;
         border: 2px solid var(--red-color);
         background-color: var(--slate-color);
         padding: 15px;
     }
     #card-container {
         padding: 20px;
     }
     #services {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
     }
     .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        flex: 0 1 30%;
        box-sizing: border-box;
        border-radius: 5px;
        border: 2px solid var(--red-color);
        background-color: var(--slate-color);
        padding: 20px;
        color: white;
     }
    //  .card-img-top {
    //      width: 100%;
    //  }
    .card-title {
        text-transform: uppercase;
        font-weight: bold;
        padding-bottom: 25px;
    }
     .horizontal-rule {
         opacity: 0.75;
     }
     form {
         max-width: 420px;
         margin: 50px auto;
     }
     .contact-header {
         max-width: 420px;
         margin: 50px auto;
         text-align: center;
     }
     .contact-input {
         color: white;
         font-weight: 500;
         font-size: 18px;
         border-radius: 5px;
         line-height: 22px;
         background-color: var(--slate-color);
         border: 2px solid var(--red-color);
         transition: all 0.3s;
         padding: 13px;
         margin-bottom: 15px;
         width: 100%;
         box-sizing: border-box;
         outline: 0;
     }
     textarea {
         height: 150px;
         line-height: 150%;
         resize: vertical;
     }
     [type="submit"] {
         width: 100%;
         background: var(--red-color);
         border-radius: 5px;
         border: 0;
         cursor: pointer;
         color: var(--slate-color);
         font-size: 24px;
         padding-top: 10px;
         padding-bottom: 10px;
         transition: all 0.3s;
         margin-top: -4px;
         font-weight: 700;
     }
     [type="submit"]:hover {
         background: #cc6666;
     }
     #footer{
        bottom: 0;
        left: 0;
        right: 0;
        div.social-links{
            background: var(--slate-color);
            color: white;
            overflow: hidden;
            padding-bottom: 4px;
            text-align: center;
            ul {
                margin: 0;
                padding: 0;
            }
            li {
                display: inline;
                margin: 0;
                padding: 0;
            }
        }
    }
     @media screen and (max-width: 1400px) {
      .service-card-container {
          display: flex;
          flex-flow: row wrap;
          align-items: center;
          justify-content: center;
          height: 750px;
          background-color: var(--red-color);
      }
     }
`;
