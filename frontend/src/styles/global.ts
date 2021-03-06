import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #312e38;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    font-size: 100%;
  }
  body, input, button {
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  @media (max-width: 1280px) {
    body {
      font-size: 70%;
    }
  }
`
