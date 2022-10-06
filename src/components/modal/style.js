import styled from "styled-components";
// import { Modal } from "react-bootstrap";
import { Dialog } from "@mui/material";
const ModalWrapper = styled(Dialog)`
  .select-address {
    .modal-header {
      border-bottom: none;
    }
  }
  .modal-content {
    background-color: #151a26;
    .MuiFormControl-root .MuiFormLabel-root.MuiInputLabel-shrink {
      background-color: #151a26;
    }
  }
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 48px;
  }
  .modal-body {
    padding-top: 0;
    padding-bottom: 24px;
  }
  .MuiDialog-root{
    padding-bottom: 32px;
    border-bottom: 0px;
  }
  .modal-dialog {
    max-width: 660px;
  }

  .modal-title {
    font-size: ${({ theme }) => theme.colors.baseFontSizeLg};
    font-weight: 800;
    line-height: 28px;
    letter-spacing: 0.02em;
    color: #eff2f3;
  }
  .modal-footer {
    border-top: 0px;
    padding-top: 24px;
    /* display: flex;
    gap:24px;
    justify-content: center; */
    display: block;
    a {
      width: 100%;
      display: block;
      text-align: center;
      margin-right: 12px;
      padding: 12px 24px;
      font-weight: 700;
      span {
        background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
      }
    }
    .MuiButton-root {
    }
  }
  &.modal-wallet {
    .modal-dialog {
      max-width: 464px;
    }
  }
  &.shipment-modal {
    .modal-dialog {
      max-width: 620px;
    }
    .modal-footer {
      padding-top: 0px;
    }
  }
  &.cancel-modal {
    .modal-dialog {
      max-width: 400px;
    }
    .modal-content {
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
      }
      .icon-exclamation,
      .icon-error {
        font-size: 70px;
        color: ${({ theme }) => theme.colors.accentColorError};
        margin-bottom: 32px;
        display: block;
      }
      .modal-body {
        padding-bottom: 16px !important;
        padding-top: 32px !important;
      }
    }
    .modal-footer {
      display: flex;
      /* padding: 32px; */
      .MuiGrid-root{
        flex-direction: row-reverse;
      }
      .btn-cancel {
        margin-right: 0;
        color: ${({ theme }) => theme.colors.primaryColor};
        border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        border-radius: 8px;
        margin: 0;
        position:relative;
        background:transparent;
        border:none;

        span{
          background:none;
          -webkit-background-clip: unset;
          -webkit-text-fill-color: unset;
          color:${({theme})=> theme.colors.onPrimary};
        }
        /* padding: 7px 23px; */
        /* height: 32px; */
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
      .btn-save {
        color: ${({ theme }) => theme.colors.primaryColor};
        border: 1px solid transparent;
        background: transparent;
        border-radius: 8px;
        margin: 0;
        background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        /* padding: 7px 23px; */
        /* height: 32px; */
      }
    }
  }
`;
export { ModalWrapper };
