import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * { 
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        height:100%;
        min-height: 100vh;
    }
    
    body {
        height:100%;
        min-height: 100vh;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`
