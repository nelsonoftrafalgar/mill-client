import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.fontDark};
  }  

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

`

export default GlobalStyles
