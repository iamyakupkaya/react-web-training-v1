import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/*Font Styles
font-family: 'Lavishly Yours', cursive;
font-family: 'Source Sans Pro', sans-serif;

*/


*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
}

*{font-family:'Source Sans Pro', sans-serif;}

h1,h2,h3,h4,h5,h6{
    display:inline-block;
}

body{

    margin:0;
    padding:0;
    overflow-x:hidden;
    font-family:font-family: 'Source Sans Pro', sans-serif;

}
::-webkit-scrollbar {
  display: none;
}



`;

export default GlobalStyle;
