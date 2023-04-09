import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-blackfont-titles: #5f6b6e;
    --color-blackfont-text:#000000;
    --color-background:#F5F5F5;
    --Font-heading-title:"Roboto","sans-serif";
    --font-text:"Roboto", "sans-serif"; 
    
  }
html, body, div, span,  object, iframe,
h1, h2, h3, h4, h5, h6, p,
a, var,
b, u, i, center,
dl, dt, dd, ol, ul, li
{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    font-size: 100%;
    vertical-align: baseline;
    font-family:"Calibri"
}

a{
  text-decoration: none;
  color: currentColor;
}
`;
