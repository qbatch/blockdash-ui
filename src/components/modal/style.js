import styled from "styled-components";
import { Dialog } from "@mui/material";
const ModalWrapper = styled(Dialog)`
  .MuiDialog-paper {
    background-color: ${({ theme }) => theme.colors.surface};
    .MuiFormControl-root .MuiFormLabel-root.MuiInputLabel-shrink {
      background-color: ${({ theme }) => theme.colors.surface};
    }
  }
  .MuiDialogTitle-root,
  .MuiDialogContent-root,
  .MuiDialogActions-root {
    padding: 48px;
  }
  .MuiDialogContent-root {
    padding-top: 0;
    padding-bottom: 24px;
    .MuiIconButton-root{
      padding:0;
      right:32px;
      top:32px;
      svg{
        margin-bottom:0;
        color:${({ theme }) => theme.colors.secondaryColor};
      }
    }
    .MuiBox-root {
      max-width: 296px;
      margin: 0 auto;
    }
 
    h2 {
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.onPrimary};
      margin-bottom: 24px;
    }
    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      /* or 150% */

      text-align: center;

      /* H1 Color */

      color: ${({ theme }) => theme.colors.onPrimary};
    }
  }
  .MuiDialog-root {
    padding-bottom: 32px;
    border-bottom: 0px;
  }
  .MuiDialogTitle-root {
    font-size: ${({ theme }) => theme.colors.baseFontSizeLg};
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.onPrimary};
    padding-bottom: 32px;
  }
  .MuiDialogActions-root {
    border-top: 0px;
    padding-top: 24px;
  }
  &.modal-wallet {
    .MuiDialog-paper {
      max-width: 464px;
      width: 100%;
    }
    .MuiDialogContent-root{
      .MuiBox-root{
        max-width:100%;
      }
    }
  }
  &.congratulation-modal {
    .MuiDialog-paper {
      max-width: 482px;
      width: 100%;
    }
    .MuiDialogContent-root {
      padding-top: 48px;
      padding-bottom: 8px;
      svg {
      margin-bottom: 48px;
    }
    }
  }
  &.cancel-modal {
    .MuiDialogContent-root {
      padding-top: 48px;
    }
    .MuiDialogContent-root {
      text-align: center;
      .icon-exclamation {
        margin-bottom: 20px;
      }
      svg{
        margin-bottom:28px;
      }
      h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.04em;
        color: ${({ theme }) => theme.colors.onPrimary};
        margin-bottom: 14px;
      }
      p {
        font-weight: 300;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        letter-spacing: 0.02em;
        color: ${({ theme }) => theme.colors.onPrimary};
        margin-bottom: 0;
      }
      .icon-exclamation,
      .icon-error {
        font-size: 70px;
        color: ${({ theme }) => theme.colors.accentColorError};
        margin-bottom: 32px;
        display: block;
      }
    }
  }
  &.success-modal{
    .MuiDialogContent-root{
      padding-bottom: 48px;
      h3{
        margin-bottom:38px;
      }
    }
  }
`;
export { ModalWrapper };
