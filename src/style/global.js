import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *{
       padding:0;
       margin:0;
       box-sizing: border-box;
   }

   html{
       height: 100%;
       font-family: sans-serif
   }

   body {
       margin: 3rem;
       padding: 3rem
   }
`;

export default GlobalStyle;
