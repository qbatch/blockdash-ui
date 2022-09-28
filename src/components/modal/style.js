import styled from "styled-components";
import { Modal } from "react-bootstrap";
const ModalWrapper = styled(Modal)`
  .select-address {
    .modal-header {
      border-bottom: none;
    }
  }
  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 24px;
  }
  .modal-header {
    padding-top: 26px;
    border-bottom: 0px;
    padding-bottom: 27px;
  }
  .modal-dialog {
    max-width: 660px;
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
      max-width: 372px;
    }
    .modal-content {
      text-align: center;
      .icon-exclamation {
        margin-bottom: 20px;
      }
      h3 {
        font-weight: 700;
        font-size: 20px;
        line-height: 34px;
        color: ${({ theme }) => theme.colors.onSecondary};
        margin-bottom: 0;
      }
      .icon-exclamation {
        font-size: 64px;
        color: ${({ theme }) => theme.colors.accentColorError};
      }
      .modal-body {
        padding-bottom: 16px !important;
        padding-top: 32px !important;
      }
    }
    .modal-footer {
      display: flex;
      padding: 32px;
      justify-content: space-between;
      flex-direction: row-reverse;
      .btn-cancel {
        margin-right: 0;
        color: ${({ theme }) => theme.colors.primaryColor};
        border: 1px solid ${({ theme }) => theme.colors.primaryColor};
        border-radius: 4px;
        margin: 0;
        padding: 7px 23px;
        height: 32px;
      }
      .btn-save {
        color: ${({ theme }) => theme.colors.primaryColor};
        border: 1px solid transparent;
        background: transparent;
        border-radius: 4px;
        margin: 0;
        padding: 7px 23px;
        height: 32px;
      }
    }
  }
  .modal-body {
    padding-top: 2px !important;
    padding-bottom: 0 !important;
    .row {
      margin-left: -15px;
      margin-right: -15px;
    }
    [class*="col-"] {
      padding-left: 15px;
      padding-right: 15px;
    }
    .input-wrapper {
      padding-bottom: 9px;
      line-height: 12px;
    }
    .form-label {
      font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
      line-height: 12px;
    }
  }
  .modal-title {
    font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
    line-height: 20px;
  }
  .modal-footer {
    border-top: 0px;
    padding-top: 18px;
    padding-left: 23px;
    padding-right: 22px;
    padding-bottom: 18px;
    a {
      max-width: 93px;
      margin-right: 12px;
      padding: 8px 24px;
      font-weight: 700;
    }
    .btn {
      width: auto;
      margin: 0;
      padding: 8px 24px;
    }
  }
`;
export { ModalWrapper };
