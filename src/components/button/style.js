import Styled from "styled-components";
import Button from "react-bootstrap/Button";
const outline = (theme, type) => {
  return `
          background: transparent;
          border: 1px solid ${
            type !== "light" ? theme["primary-color"] : theme["primary-color"]
          };
          color: ${type !== "default" && theme[`${type}-color`]};
    
          &:hover, &:focus {
            background: transparent;
            border: 1px solid ${type !== "default" && theme[`${type}-hover`]};
            color: ${type !== "default" && theme[`${type}-hover`]};
          }
      `;
};
const transparents = (theme, type) => {
  return `
          background: ${type !== "default" && theme["#515D70"]};
          border-width: 0px;
          color: ${type !== "default" && theme[`${type}-color`]};
          &:hover, &:focus {
              background: ${type !== "default" && theme[`${type}-hover`]}15;
              border-width: 0px;
              color: ${type !== "default" && theme[`${type}-hover`]}; 
          }
      `;
};

const ButtonStyled = Styled(Button)`
    font-size: 13px;
    line-height: 16px;
    border:1px solid #000;
    padding: 7px 24px;
    border-width: 0px;
    border-style: ${({ type }) => (type !== "dashed" ? "solid" : "dashed")};
    background: ${({ type, theme }) =>type !== "default" && theme[`${type}-color`]};
    color: ${({ type }) => (type !== "default" ? "#ffffff" : "#5A5F7D")};
    font-weight: 500;
    box-shadow: 0 0;
    &:hover, &:focus {
        background: ${({ type, theme }) =>
          type !== "default" && theme[`${type}-hover`]};
        color: ${({ type }) => (type !== "default" ? "#ffffff" : "#5A5F7D")};
    } 
    i,
    svg,
    img{
        width: 16px;
        height: 16px;
        +span{
            ${({ theme }) => (theme.rtl ? "margin-right" : "margin-left")}: 6px;
        }
    }
    ${({ outlined, theme, type }) => outlined && outline(theme, type)};
    ${({ transparent, theme, type }) => transparent && transparents(theme, type)};
    
`;
export { ButtonStyled };
