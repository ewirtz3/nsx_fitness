import { createGlobalStyle } from "styled-components";

export const GlobalStyles2 = createGlobalStyle`
:root {
    --slate-color-primary: #1e1e28;
    --slate-color-light: #454550;
    --slate-color-dark: #000000;
    --red-color-primary: #c7162b;
    --red-color-light: #ff5554;
    --red-color-dark: #8e0002;
    --teal-color-primary: #0096a1;
    --teal-color-light: #55c7d2;
    --teal-color-dark: #006872;
    --white-color: #ffffff;
}

html, body {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Montserrat', sans-serif;
}

.positioning-div {
    position: absolute:
    top: 0;
    left: 0;
}

#nav-dots {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  #header-logo {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }
  
  #header-name {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .fa-dumbbell {
    transform: rotate(30deg);
    padding: 5px;
}

#header-name>h1, #header-name>h5 {
    align-self: center;
    padding: 2px;
    margin: 0px;
  }

  #navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0px;
    color: var(--white-color);
    padding: 5px;
  }

  .MuiIconButton-label, #meet-nick {
      color: var(--white-color);
  }

  #intro-div {
      height: 800px;
  }
  
  #intro-pic {
    width: 100vw;
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: -1;
  }

  #enter-icon {
    color: var(--red-color-primary);
    z-index: 0;
    position: absolute;
    right: 40px;
    top: 400px;
  }

#meet-nick {
    background-color: var(--teal-color-primary);
    width: 100vw;
    position: absolute;
    top: 550px;
}
`;
