import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  body {
    color: red;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  p,
  ul {
    margin: 0;
    padding: 0;
  }
`
