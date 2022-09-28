import styled from "styled-components";

export const Footer = styled.footer`
 background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.background};
  padding: 40px 20px;
  text-align: center;
  color: hsl(0, 0%, 100%);

  a {
    color: ${({ theme }) => theme.colors.background};
  }
`;