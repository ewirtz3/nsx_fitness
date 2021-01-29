import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
    --slate-color: #5c5a5a;
    --red-color: #c7162b;
    --teal-color: #16C7B2;
    }
  
  @mixin transition-all {
      -webkit-transition: all 200ms ease-in-out;
      -moz-transition: all 200ms ease-in-out;
      -o-transition: all 200ms ease-in-out;
      transition: all 200ms ease-in-out;
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
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      text-shadow: 2px 2px var(--slate-color);
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
     #contact {
        background-color: var(--slate-color);
         color: white;
         padding: 10px;
     }
      .contact-container {
         display: flex;
        flex-flow: column wrap;
          padding: 20px;
          margin: 20px 0;
          width: 1050px;
          background-color: #ffffff;
          border: 1px solid #000000;
          box-shadow: 2px 2px var(--slate-color);
      }
      
      #name-email {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
      }
      #name, #email {
          width: 50%;
      }
      .contact-input {
          margin: 5px;
      }
      .btn {
        color: var(--red-color);
        cursor: pointer;
        display: inline-block;
        letter-spacing: 0.075em;
        padding: .8em 1em;
        margin: auto 2em;
        position: relative;
        align-self: center;
        text-transform: uppercase;
        border: 3px var(--red-color) solid;
        border-image: linear-gradient(45deg, var(--red-color) 0%, var(--teal-color) 100%);
        border-image-slice: 1 1 0 0;
        z-index: 1;
        box-shadow: -0.5em .5em transparentize(var(--slate-color),1);
        transform-origin: left bottom;
        @include transition-all;
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
