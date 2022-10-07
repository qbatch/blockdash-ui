import styled from "styled-components";
const DashboardWrapper = styled.div`
  .text-percentage {
    font-weight: 500 !important;
    font-size: 11px !important;
    line-height: 14px !important;
    text-align: right;
    letter-spacing: 0.02em;
    margin-bottom: 0;
    i {
      margin-right: 4px;
    }
    &.text-success {
      color: #13d802;
    }
  }
  .table-time-chart {
    .text-percentage {
      /* margin-right:16px; */
      margin-bottom: 0;
      i {
        margin-left: 4px;
        margin-right: 16px;
      }
    }
    .time-chart {
      height: 24px;
      img {
      }
    }
  }
  .gradient-icon {
    background: -moz-linear-gradient(top, #1976d2 0%, #009470 100%);
    background: -webkit-linear-gradient(top, #1976d2 0%, #009470 100%);
    background: linear-gradient(to bottom, #1976d2 0%, #009470 100%);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .text-gradient {
    background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .show-more-button {
    max-width: 122px;
    margin: 0 auto;
    display: block;
    margin-top: 32px;
  }
  .border-gradient {
    position: relative;
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
`;
const PageHeader = styled.div`
  margin-bottom: 32px;
  .page-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.onPrimary};
    display: flex;
    align-items: center;
    margin-bottom: 0;
    span {
      color: #1976d2;
      margin-left: 4px;
    }
    .back-arrow {
      margin-right: 30px;
      cursor: pointer;
    }
    .icon-left-arrow {
      font-size: 10px;
      top: -2px;
      position: relative;
      color: ${({ theme }) => theme.colors.secondaryColor};
    }
    .title-img {
      margin-right: 16px;
    }
    &.page-title-secondary {
      line-height: 24px;
    }
  }
  p {
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.bodyText};
    margin-top: 12px;
    margin-bottom: 0;
  }
  .page-header-extras {
    button {
      margin-bottom: 0;
      i {
        font-size: 14px;
        margin-right: 8px;
        position: relative;
        top: 1px;
      }
    }
    a {
      display: block;
      margin-bottom: 0;
      text-decoration: none;
      &.shopping-basket-link {
        i {
          position: relative;
          font-size: 15px;
          span {
            position: absolute;
            top: 0;
            right: 0;
            background-color: ${({ theme }) => theme.colors.accentColorError};
            color: ${({ theme }) => theme.colors.onaccentColorError};
            border-radius: 5px;
            font-size: 6px;
            line-height: 11px;
            font-family: "Inter";
            font-weight: 700;
            height: 10px;
            min-width: 15px;
            left: 6px;
            top: -2px;
            text-align: center;
          }
        }
      }
    }
    ul {
      display: flex;
      margin-bottom: 0;
      li {
        list-style: none;
        margin-left: 12px;
      }
    }
  }
`;
const WalletSource = styled.div`
  .wallet-sources {
    list-style: none;
    align-items: center;
    display: flex;
    li {
      margin-right: 16px;
      img {
        width: 20px;
        margin-right: 8px;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
const ContactForm = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
  backdrop-filter: blur(13.5914px);
  padding: 48px;
  border-radius: 12px;
  margin-top:72px;
  .form-header {
    text-align: center;
    margin-bottom:19px;
    h3 {
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      text-align: center;
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.onPrimary};
      margin-bottom:8px;
    }
    p {
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom:0;
    }
  }
  .form-content {
    max-width: 368px;
    margin: 0 auto;
    button{
      margin-top:8px;
    }
  }
`;

// extras not used

export { DashboardWrapper, PageHeader, WalletSource, ContactForm };
