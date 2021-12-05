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
  height: 100vh;
}

#navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 15vh;
  padding: 0 15px;
  color: var(--white-color);
  background-color: var(--red-color-dark);
  box-sizing: border-box;
  text-shadow: 2px 2px 2px var(--red-color-dark);
}

#header-logo, #nav-dots {
  display: flex;
  justify-content: center;
  align-items: center;
}

#header-logo>h1 {
  font-size: medium;
}

#nav-button {
  color: var(--white-color);
}

.dots {
  filter: drop-shadow(2px 2px 2px var(--slate-color-dark));
  position: fixed;
  right: 0;
  top: 5%;
}

@media screen and (max-width: 360px) {
  #navbar {
    height: 15vh;
    padding: 0 5px;
  }

  #header-logo>h1 {
    font-size: small;
    padding-left: 10px;
  }
}

@media screen and (min-width: 375px) and (max-width: 411px) {
  #navbar {
    height: 15vh;
  }

  #header-logo>h1 {
    text-align: left;
    padding-left: 15px;
  }
}

@media screen and (min-width: 540px) and (max-width: 768px) {
  #navbar {
    width: 100%;
    height: 15vh;
  }

  #header-logo>h1 {
    text-align: left;
    padding-left: 20px;
    font-size: large;
  }
}

@media screen and (min-width: 1200px) {
  #navbar {
    justify-content: space-between !important;
  }

  #header-logo>h1 {
    width: 60vw;
    text-align: left;
    padding-left: 15px;
  }
}
-----------------------------

.MuiIconButton-label, #meet-nick {
  color: var(--white-color);
}

#intro-div {
  height: 800px;
}
  
#intro-pic {
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}

#enter-icon {
  color: var(--red-color-primary);
  box-shadow: 2px 2px 2px var(--red-color-dark);
  z-index: 0;
  position: absolute;
  right: 10px;
  top: 95vh;
}

#meet-nick {
  background-color: var(--slate-color-primary);
  width: 100vw;
  position: absolute;
  top: 110rem;
  right: 0px;
  left: 0px;
  padding: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

#nick-text {
  padding: 20px;
  text-align: center;
  width: 75vw;
}

#nick-pic {
  height: 500px;
  width: 330px;
}

#service-cards {
  position: absolute;
  top: 174rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: space-around;
}
`;
