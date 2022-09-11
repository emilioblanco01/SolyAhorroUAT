import { createGlobalStyle } from 'styled-components';
import './assets/fonts/fonts.css';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Orkney';
    src: url('assets/fonts/Orkney-Regular.ttf') format('truetype');
  }

  * {
    box-sizing: border-box;
    font-family: 'Quicksand', sans-serif;
  }

  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: gray;
  }
`;