import * as theme from "./themeVariables";
import { createGlobalStyle, ThemeConsumer } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
}
    body{
        background-color: ${({ theme }) => theme.colors.background};
        font-size:${({ theme }) => theme.colors.baseFontSize};
        font-weight:400;
        font-family: 'Inter';
        line-height:normal;
        font-feature-settings: inherit;
        font-variant:inherit;
        color:${({ theme }) => theme.colors.whiteColor};
        box-sizing:border-box;
    }
    h1,h2,h3,h4,h5,h6{
        font-weight:700;
        font-family: 'Inter';
    }
    a{
        color:${({ theme }) => theme.colors.primaryColor};
        text-decoration:none;
    }
    ul{
        margin:0;
        padding:0;
        list-style:none;
      }
    .title{
        font-size:${({ theme }) => theme.colors.baseFontSizeXl};
        line-height:44px;
        margin-bottom:32px;
    }
    h1{
        font-size:${({ theme }) => theme.colors.baseFontSizeLg};
    }
    h2{
        font-size:${({ theme }) => theme.colors.baseFontSizeMd};
        line-height:28px;
    }
    h3{
        font-size:${({ theme }) => theme.colors.baseFontSizeSm}
    }
    button{
        font-size:${({ theme }) => theme.colors.baseFontSize} 
    }
    label{
        font-size:${({ theme }) => theme.colors.baseFontSize} 
    }
    .form-label{
        color:${({ theme }) => theme.colors.labelColor};
        &.stripe-label{
            margin-bottom:4px;
        }
    }
    .mt-lg{
        margin-top:32px;
    }
    .stripe-input{
        border: 1px solid ${({ theme }) => theme.colors.secondaryVariant};
        line-height:18px;
        border-radius:4px;
        color: ${({ theme }) => theme.colors.bodyText};
        font-size: ${({ theme }) => theme.colors.baseFontSize};
        height:32px;
        padding:6px 11px;
    }
    .content-wrapper{
        padding:30px 24px;
    }
    .primary-color{
        color:${({ theme }) => theme.colors.primaryColor};
    }
    .cursor-pointer{
        cursor:pointer;
    }
    .text-success{
        color:${({ theme }) => theme.colors.accentColorSuccess}!important;
    }
    .text-error{
        color:${({ theme }) => theme.colors.accentColorError}!important;   
    }
  
    .themeButtons
    {
        position:fixed;
        right:0;
        top:10%;
        display:none;
        z-index:1;
        button{
            margin-right:5px;
        }
    }
    .MuiPopover-root{
        /* &.custom-dropdown{ */
            .MuiPaper-root{
                padding:24px;
                background-color:#030715;
                color: #707C94;
                .MuiList-root{
                    padding:0;  
                    .MuiButtonBase-root{
                        padding:0;
                        margin-bottom:16px;
                        font-weight: 300;
                        font-size: 13px;
                        line-height: 18px;
                        letter-spacing: 0.02em;
                        &:hover{
                            color:#019371;
                        }
                        &:last-of-type{
                            margin-bottom:0;
                        }
                        &.Mui-selected {
                            background:none;
                            color:#019371;
                        }
                    }
                }
            }
        /* } */
    }
    /* Helper Classes */
    .d-flex{
        display: flex!important;
    }
    .align-items-center{
        align-items: center!important;
    }
    .justify-content-center{
        justify-content: center!important;
    }
    .w-100 {
    width: 100%!important;
    }
    .justify-content-between{
        justify-content: space-between!important;
    }
    .text-center{
        text-align: center!important;
    }
`;
export default GlobalStyles;
