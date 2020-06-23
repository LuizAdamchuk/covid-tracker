import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

  body{
  background-color: rgb(250,250,250);
  font-family: Roboto, sans-serif !important;

  }

  .container{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;

  }
`;
