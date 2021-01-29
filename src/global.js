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
        font-family: 'Montserrat', sans-serif;
    }
    #header-logo {
        font-family: 'Barlow Condensed', sans-serif;
        color: var(--red-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 25px;
        text-shadow: 2px 2px var(--slate-color);
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
        color: var(--slate-color);
    }
    .fa-dumbbell {
        transform: rotate(30deg);
        padding: 5px;
        color: var(--red-color);
    }
    .nav-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        text-shadow: 1px 1px var(--slate-color);
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
        color: var(--red-color);
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
  .fa-instagram, .fa-facebook, .fa-tiktok {
      padding: 10px;
  }
     #meet-nick {
         display: flex;
         flex-direction: row;
         align-items: center;
         padding: 10px;
     }
     .meet-nick {
         padding: 5px;
         color: #ffffff;
         font-size: 18px;
     }
     #fit-tip {
         display: flex;
         flex-direction: row;
         align-items: center;
         margin: 20px;
         font-size: 18px;
     }
     #card-container {
         padding: 20px;
     }
     .horizontal-rule {
         opacity: 0.75;
     }
     form {
         max-width: 420px;
         margin: 50px auto;
     }
     .contact-header{
         max-width: 420px;
         margin: 50px auto;
         text-align: center;
     }
     .contact-input{
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
     [type="submit"]:hover{
         background: #cc6666;
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
