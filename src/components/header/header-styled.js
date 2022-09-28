import styled from "styled-components";

export const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.header};  
  color: ${({ theme }) => theme.colors.color} ;
  padding: 20px;
  text-align: center;
  font-weight: bold;
`;