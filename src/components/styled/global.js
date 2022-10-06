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
.border-gradient {
    position:relative;
    &:before {
      content: "";
      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.primaryColor} 0%,
        ${({ theme }) => theme.colors.secondaryColor} 100%
      );
      background: linear-gradient(
          105deg,
          ${({ theme }) => theme.colors.primaryColor} 0%,
          ${({ theme }) => theme.colors.secondaryColor} 100%
        )
        no-repeat padding-box;
      -webkit-mask: -webkit-linear-gradient(
            345deg,
            ${({ theme }) => theme.colors.primaryColor} 0%,
            #7c0953 100%
          )
          content-box,
        -webkit-linear-gradient(345deg, #f55d0d 0%, #7c0953 100%);
      -webkit-mask-composite: xor;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 1px;
      border-radius: 8px;
      transition: 0.3s all ease-in;
    }
  }
`