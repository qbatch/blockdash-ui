import styled from "styled-components";
import { InputWrapper } from "../../components/inputs/style";
import authBg from "../../static/images/auth-bg.png";
const AuthWrapper = styled.div`
  .auth-heading {
    margin-bottom: 0px;
    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
      letter-spacing: 0.02em;
      color: #eff2f3;
      margin-bottom: 0;
    }
    p {
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 0.01em;
      /* Color Primary Text */
      color: #bfcbd1;
      margin-top: 12px;
      margin-bottom: 0;
      i {
        color: ${({ theme }) => theme.colors.secondaryColor};
      }
    }
    &.heading-margin {
      margin-bottom: 30px;
    }
  }
  .auth-section-left {
    background-image: url(${authBg});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    margin-left: -24px;
    padding-left: 24px;
    padding-top: 24px;
  }
  .auth-section-right {
    padding-top: 24px;
    height: 100%;
  }
  .auth-content-top {
    height: calc(100% - 395px);
    overflow: auto;
    margin-top: 16px;
    padding-top: 16px;
  }
  .auth-content-bottom {
    position: absolute;
    bottom: 48px;
    width: calc(100% - 56px);
  }
  .auth-content {
    padding-left: 27px;
    padding-right: 29px;
    padding-top: 48px;
    position: relative;
    height: 100%;
    button {
      margin-bottom: 0;
    }
    &.auth-terms {
      padding-left: 26px;
      padding-right: 26px;
      .auth-content-top {
        height: calc(100% - 240px);
      }
      .auth-content-bottom {
        bottom: 86px;
        padding-top: 20px;
      }
      p {
        font-weight: 300;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 0.02em;
        color: #bfcbd1;
        margin-bottom: 18px;
        &:last-of-type {
          /* margin-bottom: 58px; */
          margin-bottom: 0px;
        }
      }
      button {
        max-width: 368px;
        margin: 0 auto;
      }
    }
    /* Verification email screen */
    &.auth-centered-content,
    &.auth-topalign-content {
      .auth-content-top {
        height: calc(100% - 200px);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 0;
        padding-top: 0;
        flex-direction: column;
      }
      .auth-content-bottom {
        bottom: 48px;
      }
      .email-verification-image {
        text-align: center;
        padding-top: 34px;
      }
      .password-verification-image{
        padding-top: 91px;
      }
      button {
        margin-bottom: 18px;
      }
    }
    &.auth-topalign-content {
      .auth-content-top {
        display: block;
        margin-top: 16px;
        padding-top: 16px;
      }
    }
    .forgot-password-link {
      a {
        color: ${({ theme }) => theme.colors.secondaryColor};
        font-weight: 700;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 0.02em;
      }
    }
  }
  .already-account {
    text-align: left;
    label {
      font-weight: 300;
      font-size: 13px;
      line-height: 20px;
      letter-spacing: 0.01em;
      color: #bfcbd1;

      color: ${({ theme }) => theme.colors.bodyText};
      a {
        color: ${({ theme }) => theme.colors.secondaryColor};
        text-decoration: none;
      }
    }
    &.email-receive{
      align-self: flex-start;
      margin-top: 32px;
    }
  }

  .auth-btn {
    margin-bottom: 24px;
  }
  .login-btn {
    margin-top: 32px;
    margin-bottom: 32px;
  }
  .reset-btn {
    margin-top: 16px;
  }
  .sub-heading {
    margin-bottom: 24px;
    padding-left: 2px;
    &.sub-heading-cm {
      margin-bottom: 26px;
    }
  }
  .not-recive-text {
    margin-top: 32px;
    width: 100%;
    max-width: 300px;
  }
`;
const AuthConnect = styled.div`
  padding-top: 34px;
  p {
    font-weight: 300;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: #bfcbd1;
    i {
      color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: 16px;
      position: relative;
      top: 2px;
      margin-left: 5px;
    }
  }
  ul {
    gap: 25px;
    margin-bottom: 16px;
    li {
      text-align: center;
      transition: 0.3s all;
      background: #030715;
      border: 0px;
      position: relative;
      width: 33.333%;
      a {
        padding: 33px 0px;
        height: 106px;

        min-width: 106px;
        display: block;
        transition: 0.3s all ease-in;
      }
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
        border-radius: 4px;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s all ease-in;
      }
      color: ${({ theme }) => theme.colors.onPrimary};
      img {
        display: block;
        margin: 0 auto;
        transition: 0.3s all ease-in;
      }
      p {
        margin-top: 12px;
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
        /* identical to box height, or 127% */
        text-align: center;
        letter-spacing: 0.02em;
        height: 0;
        transform: scale(0);
        transition: 0.3s all ease-in;
        /* position:absolute; */
        /* Color Primary Text */
        margin: 0;

        color: #bfcbd1;
      }
      &:hover {
        border: 0px;
        color: ${({ theme }) => theme.colors.onPrimary};
        a {
          padding: 22px 0px;
          min-width: 106px;
        }
        img {
          transform: scale(0.785);
        }
        p {
          transform: scale(1);
          height: auto;
          position: static;
          margin-top: 12px;
        }
        &:before {
          visibility: visible;
          opacity: 1;
        }
      }
    }
  }
`;
const AddAmazonWrapper = styled.div`
  padding-top: 100px;
  padding-left: 32px;
  padding-right: 32px;
  .search-input-wrapper {
    margin-top: 72px;
  }
  .left-arrow-icon {
    font-size: ${({ theme }) => theme.colors.baseFontSizeLg};
    color: ${({ theme }) => theme.colors.primaryColor};
    margin-right: 8px;
    position: relative;
    &.add-user-arrow {
      margin-left: 4px;
      margin-top: -3pxs;
    }
  }
  .amazon-auth-wrapper {
    padding-top: 72px;
    padding-left: 0;
    padding-right: 0;
    padding-bottom: 0;
    .auth-section-left {
      padding-top: 81px;
    }
    .auth-section-middle {
      padding-left: 14px;
      padding-right: 14px;
      input {
        padding: 11px 12px;
      }
      .search-icon {
        font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
        right: 17px;
        top: 12px;
      }
    }
    .auth-section-right {
      padding-top: 2px;
    }
  }
`;
const AddUserWrapper = styled.div`
  height: calc(100vh - 116px);
  width: 100%;
  overflow: hidden;
  .add-user-title {
    padding-top: 72px;
    margin-top: 0;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  h1 {
    margin-top: 32px;
  }
  h3 {
    margin-top: 12px;
  }
  .add-payment-btn {
    width: 100%;
    max-width: 234px;
    display: flex;
    justify-content: center;
    margin-top: 32px;
  }
`;
const AddPaymentWrapper = styled.div`
  padding-top: 48px;
  .card-Wrapper {
    max-height: calc(100vh - 160px);
    overflow: auto;
    max-width: 412px;
    width: 100%;
    border-radius: 8px;
    height: 100%;
    margin: auto;
    border: 1px solid ${({ theme }) => theme.colors.secondaryVariant};

    .card-header {
      padding: 12px 24px 18px;
      .price-detail {
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 4px;
        span {
          margin-top: 10px;
        }
        small {
          font-size: 10px;
          margin-top: 12px;
        }
      }
      h1 {
        padding-left: 4px;
        padding-right: 2px;
        &.title {
          margin-bottom: 0;
        }
      }
      p {
        font-size: ${({ theme }) => theme.colors.baseFontSize};
        margin-bottom: 0;
      }
    }
    .bottom-line {
      color: ${({ theme }) => theme.colors.secondaryVariant};
      margin: 0px;
    }
  }
  .card-content-wrapper {
    padding: 16px 24px 24px;
    max-height: 58vh;
    overflow: auto;
    h3 {
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 12px;
    }
    h6 {
      margin-bottom: 4px;
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0px;
      text-align: left;
    }
    p {
      font-size: 10px;
      color: ${({ theme }) => theme.colors.labelColor};
      margin-bottom: 12px;
    }
  }

  .premuim-btn {
    width: 100%;
    max-width: 81px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 24px;
    padding: 11px 0px;
    border-radius: 12px;
    margin: 0 0 0 auto;
    margin-top: 8px;
  }
  .check-icon {
    color: ${({ theme }) => theme.colors.primaryColor};
    font-size: ${({ theme }) => theme.colors.baseFontSize};
    margin-right: 8px;
  }
  .subscribe-btn {
    width: 161px;
    display: flex;
    justify-content: center;
    margin: 16px 4px 0 auto;
    margin-right: 0;
  }
  .position-relative.card-input-wrapper .input-container input {
    padding-left: 30px;
  }
  svg.cursor-pointer.search-icon.credit-card {
    position: absolute;
    left: 11px;
    top: 8px;
    font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
  }
  .auth-add-payment {
    padding-left: 3px;
    h3 {
      margin-bottom: 17px;
    }
    label {
      line-height: 12px;
      font-size: 10px;
    }
    .input-wrapper {
      line-height: 10px;
      /* max-width: 301px; */
    }
    .payment-field-small {
      .input-wrapper {
        /* max-width: 136px; */
      }
    }
  }
`;
const ResetPassword = styled.div`
  .login-btn {
    margin-top: 16px;
  }
`;

export {
  AuthWrapper,
  InputWrapper,
  ResetPassword,
  AddAmazonWrapper,
  AddUserWrapper,
  AddPaymentWrapper,
  AuthConnect,
};
