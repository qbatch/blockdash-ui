import styled from "styled-components";
// import { Modal } from "react-bootstrap";
import { Dialog } from "@mui/material";
const ModalWrapper = styled(Dialog)`
  .MuiDialog-paper {
    background-color: #151a26;
    .MuiFormControl-root .MuiFormLabel-root.MuiInputLabel-shrink {
      background-color: #151a26;
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
  }
  .MuiDialog-root{
    padding-bottom: 32px;
    border-bottom: 0px;
  }
  .MuiDialogTitle-root {
    font-size: ${({ theme }) => theme.colors.baseFontSizeLg};
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #eff2f3;
    padding-bottom: 32px;
  }
  .MuiDialogActions-root {
    border-top: 0px;
    padding-top: 24px;
  }
  &.modal-wallet {
    .MuiDialog-paper {
      max-width: 464px;
      width:100%;
    }
  }
  &.cancel-modal {
    .MuiDialogContent-root{
      padding-top:48px;
    }
    .MuiDialogContent-root {
      text-align: center;
      .icon-exclamation {
        margin-bottom: 20px;
      }
      h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0.04em;
        color: ${({ theme }) => theme.colors.onPrimary};
        margin-bottom: 4px;
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
`;
export { ModalWrapper };
