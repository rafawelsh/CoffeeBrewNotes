import { createGlobalStyle } from "styled-components";
import { colors } from "./MediaQueries";
const GlobalStyle = createGlobalStyle`
  
  html{
    min-height:100vh;
  }
  
  body {
    min-height:100vh;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 0 auto;
    background-color: ${colors.backgroundLight};
    font-family: 'Roboto Slab', serif;
  }
`;

export default GlobalStyle;
