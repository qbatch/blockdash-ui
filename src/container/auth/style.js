import styled from "styled-components";
import { InputWrapper } from "../../components/inputs/style";
import authBg from "../../static/images/auth-bg.png";
const AuthWrapper = styled.div`
  .auth-heading {
    margin-bottom: 0px;
    h1 {
      font-weight: 700;
      font-size:${({theme})=> theme.colors.baseFontSizeXl};
      line-height: 42px;
      letter-spacing: 0.02em;
      color:${({theme})=> theme.colors.onPrimary};
      margin-bottom: 0;
    }
    p {
      font-weight: 300;
      font-size: ${({theme})=> theme.colors.baseFontSize};;
      line-height: 20px;
      letter-spacing: 0.01em;
      color: ${({theme})=>theme.colors.bodyText};
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
        font-size: ${({theme})=> theme.colors.baseFontSize};
        line-height: 18px;
        letter-spacing: 0.02em;
        color: ${({theme})=>theme.colors.bodyText};
        margin-bottom: 18px;
        &:last-of-type {
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
      .password-verification-image {
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
        font-size: ${({theme})=> theme.colors.baseFontSize};
        line-height: 18px;
        letter-spacing: 0.02em;
      }
    }
    .secret-code {
      padding-top: 76px;
      .vi__wrapper {
        margin: 0 auto;
      }
      .vi__container {
        gap: 16px;
        height: 80px;
        width: 336px;
        margin: 0 auto;

        .vi__character {
          border: 1px solid #485666;
          border-radius: 7px;
          font-weight: 400;
          font-size: 40px;
          line-height: 48px;
          text-align: center;
          color: ${({theme})=>theme.colors.bodyText};
          align-items: center;
          display: flex;
          justify-content: center;
          width: 72px;
          background: transparent;
          position: relative;
          outline: none;
          &.vi__character--selected {
            background: ${({theme})=> theme.colors.background};
            border: 0px;
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
            }
          }
        }
      }
    }
    .already-account {
      text-align: left;
      label {
        font-weight: 300;
        font-size: ${({theme})=> theme.colors.baseFontSize};
        line-height: 20px;
        letter-spacing: 0.01em;
        color: ${({theme})=>theme.colors.bodyText};
        a {
          color: ${({ theme }) => theme.colors.secondaryColor};
          text-decoration: none;
        }
      }
      &.email-receive {
        align-self: flex-start;
        margin-top: 32px;
      }
    }
  }
`;
const AuthConnect = styled.div`
  padding-top: 34px;
  p {
    font-weight: 300;
    font-size: ${({theme})=> theme.colors.baseFontSize};;
    line-height: 20px;
    letter-spacing: 0.01em;
    color: ${({theme})=>theme.colors.bodyText};
    i {
      color: ${({ theme }) => theme.colors.secondaryColor};
      font-size: ${({theme})=> theme.colors.baseFontSizeSm};
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
      background: ${({theme})=> theme.colors.background};
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
              ${({ theme }) => theme.colors.secondaryColor} 100%
            )
            content-box,
          -webkit-linear-gradient(345deg, ${({ theme }) => theme.colors.primaryColor} 0%,  ${({ theme }) => theme.colors.secondaryColor} 100%);
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
        font-size: ${({theme})=> theme.colors.baseFontSizeXs};
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

        color: ${({theme})=>theme.colors.bodyText};
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

export {
  AuthWrapper,
  InputWrapper,
  AuthConnect,
};
