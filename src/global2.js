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

@media only screen and (max-width: 360px) {
  #navbar {
    background-color: var(--red-color-dark);
  }

  #header-logo {
    display: inline-flex;
    flex-direction: row;
  }

  #header-logo>h1 {
    font-size: 25px;
    text-align: right;
  }

  #logo {
    width: 50%;
    padding-left: 10px;
  }

  #nav-dots {
    width: 15%;
  }
}

#navbar {
  display: inline-flex;
  flex-direction: row;
  height: 40vw;
  margin: 0px;
  color: var(--white-color);
  box-sizing: border-box;
  text-shadow: 2px 2px 2px var(--red-color-dark);
}

#header-logo {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
}

#nav-dots {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.dots{
  filter: drop-shadow(2px 2px 2px var(--red-color-dark));
}

#header-logo>h1 {
  align-self: center;
  padding: 2px;
  margin: 0px;
}

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
