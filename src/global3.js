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

/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 

}

/* Portrait */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: portrait) { 

}

/* Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 

}

/* ----------- Galaxy S6 ----------- */

/* Portrait and Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) {

}

/* Portrait */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) 
  and (orientation: portrait) {

}

/* Landscape */
@media screen 
  and (device-width: 360px) 
  and (device-height: 640px) 
  and (-webkit-device-pixel-ratio: 4) 
  and (orientation: landscape) {

}

/* ----------- Non-Retina Screens ----------- */
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
}

/* ----------- Retina Screens ----------- */
@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 2)
  and (min-resolution: 192dpi) { 
}
`;
