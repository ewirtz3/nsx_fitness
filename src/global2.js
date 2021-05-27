import { createGlobalStyle } from "styled-components";

export const GlobalStyles2 = createGlobalStyle`
:root {
    --slate-color: rgb(30,30,40);
    --red-color: #c7162b;
    --teal-color: #0096a1;
}

html, body {
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Montserrat', sans-serif;
}

.red-color {
    color: var(--red-color);
}

#nav-dots {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    color: var(--red-color);
}

#header-name>h1, #header-name>h5 {
    align-self: center;
    padding: 2px;
  }
  
`;
