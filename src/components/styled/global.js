import { createGlobalStyle } from "styled-components";
import * as theme from "../themeSwitching/themeSwitching.styled";
export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: monospace;
  overflow-x: hidden;

}
ul{
  margin:0;
  padding:0;
  list-style:none;
}
.light {
  background-color: ${({ theme }) => theme.colors.header};
}
.dark {
  background-color: ${({ theme }) => theme.colors.header};
}

.active{
    border: 3px solid ${({ theme }) => theme.colors.border};
}
`