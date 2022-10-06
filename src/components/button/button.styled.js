import styled from "styled-components";
import { Button } from "@mui/material";
const ButtonStyled = styled(Button)`
  &.MuiButton-root {
    font-size: 13px;
    line-height: 16px;
    padding: 12px 24px;
    border-radius: 8px;
    margin-bottom: 0px;
    font-weight: 700;
    text-transform: none;
    width: ${(props)=> props.fullWidth ? "100%" : ''};
    /* border: 1px solid ${({ theme }) => theme.colors.primaryColor}; */
    border: 0px;
    color: ${({ theme }) => theme.colors.onPrimary};
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryColor} 0%,
      ${({ theme }) => theme.colors.secondaryColor} 100%
    );
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.onPrimary};
      border: 0px;
    }
    &.MuiButton-sizeLarge{
      padding:13px 60px;
    }
    ${(props) =>
      props.size === "large" &&
      `
      padding:14px 24px;
      `}
    ${(props) =>
      props.variant === "outlined" &&
      `
        background:transparent;
        border:0px;
      &:before{
      content:'';  background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryColor} 0%,
      ${({ theme }) => theme.colors.secondaryColor} 100%
    );
      background: linear-gradient(105deg, ${
        props.theme.colors.primaryColor
      } 0%, ${props.theme.colors.secondaryColor} 100%) no-repeat padding-box;
    -webkit-mask: -webkit-linear-gradient(345deg, ${
      props.theme.colors.primaryColor
    } 0%, #7C0953 100%) content-box, -webkit-linear-gradient(345deg, #F55D0D 0%, #7C0953 100%);
    -webkit-mask-composite: xor;
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    right:0;
    bottom:0;
    padding:1px;
    border-radius:8px;
    }
      color: ${props.theme.colors.onPrimary};
      &:hover{
        border:0px;
      color: ${props.theme.colors.onPrimary};
      }
      ${
        props.size === "large" &&
        `
      padding:15px 24px;
      `
      }
  `}
      ${(props) =>
        props.variant === "text" &&
        `
        -webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
      `
      }
  }
`;
export default ButtonStyled;
