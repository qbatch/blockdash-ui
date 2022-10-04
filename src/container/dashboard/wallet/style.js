import styled from "styled-components";
const WalletCard = styled.div`
  padding: 24px;
  padding-bottom: 20px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  margin-bottom: 0px;
  .wallet-header {
    margin-bottom: 24px;
    &.wallet-details-header {
      margin-bottom: 19px;
    }
    h2 {
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #eff2f3;
      margin-bottom: 0;
      img {
        margin-right: 16px;
        /* width: 40px; */
        height: 39px;
      }
    }
    h3 {
      display: flex;
      img {
        width: 40px;
        margin-right: 8px;
      }
      span {
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.04em;
        color: #eff2f3;
        small {
          font-weight: 500;
          font-size: 11px;
          line-height: 14px;
          letter-spacing: 0.02em;
          color: #9ea5b4;
          display: block;
        }
      }
    }
    h4 {
      font-weight: 500;
      font-size: 11px;
      line-height: 14px;
      letter-spacing: 0.02em;
      color: #9ea5b4;
      margin-bottom: 0;
      display: flex;
      align-items: center;
      gap: 15px;
      margin-bottom: 16px;
      i {
        color: #1976d2;
        font-size: 20px;
      }
    }
    ul {
      display: flex;
      gap: 16px;
      margin-top: -5px;
      li {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        letter-spacing: 0.04em;
        cursor: pointer;

        /* Color Primary Text */

        color: #019371;
        i {
          font-size: 8px;
          &.icon-dots {
            font-size: 6px;
          }
        }
      }
    }
  }
  .wallet-content {
    .wallet-info {
      gap: 88px;
      h4 {
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
        /* identical to box height, or 127% */
        letter-spacing: 0.02em;

        /* Small title */
        margin-bottom: 4px;
        color: #9ea5b4;
        span {
          font-weight: 700;
          font-size: 13px;
          line-height: 16px;
          /* identical to box height, or 123% */

          letter-spacing: 0.02em;

          /* H1 Color */

          color: #eff2f3;
          margin-left: 8px;
        }
      }
      p {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */

        letter-spacing: 0.04em;

        /* Color Primary Text */

        color: #bfcbd1;
      }
      .wallet-info-box {
      }
    }
    p {
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #bfcbd1;
      margin-bottom: 0;
    }
    .stat-content-right {
      .text-percentage {
        margin-right: 8px;
        margin-top: 8px;
      }
    }
    &.wallet-details-content {
      padding-bottom: 17px;
      border-bottom: 1px solid #485666;
      .wallet-info {
        gap: 24px;
        .wallet-info-box {
          h4 {
            margin-bottom: 0;
          }
        }
      }
    }
  }
  .wallet-footer {
    padding-top: 16px;
    p {
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      /* identical to box height, or 138% */

      letter-spacing: 0.02em;

      /* Color Primary Text */

      color: #bfcbd1;
      margin-bottom: 0;
      i {
        font-size: 16px;
        margin-right: 8px;
        position:relative;
        top:1px;
      }
    }
    button {
      width: 113px;
      margin: 0 auto;
      margin-right: 0;
      background-color:#151A26;
    }
  }
  .stat-content-inner {
    .stat-details {
      .stat-detail-item {
        margin-bottom: 25px;
        &:last-of-type {
          margin-bottom: 0;
        }
        h5 {
          font-weight: 500;
          font-size: 11px;
          line-height: 14px;
          /* identical to box height, or 127% */
          margin-bottom: 2px;
          letter-spacing: 0.02em;

          color: #9ea5b4;
        }
        p {
          font-weight: 700;
          font-size: 13px;
          line-height: 16px;
          margin-bottom: 0;
          /* identical to box height, or 123% */

          letter-spacing: 0.02em;

          color: #ffffff;
        }
        ul {
          li {
            font-weight: 700;
            font-size: 13px;
            line-height: 16px;
            /* identical to box height, or 123% */
            vertical-align: middle;
            letter-spacing: 0.02em;
            color: #ffffff;
            margin-right: 12px;
            &:last-of-type {
              margin-right: 0;
            }
            img {
              width: 13px;
              margin-right: 6px;
              position: relative;
              top: -1px;
            }
            .time-chart img {
              width: auto;
            }
            .chart-time-select {
              margin-bottom: 3px;
              margin-top: -5px;
            }
          }
        }
      }
      .stat-details-connect {
        ul {
          li {
            img {
              width: 24px;
              margin-right: 8px;
              margin-top: -4px;
            }
            font-weight: 800;
            font-size: 24px;
            line-height: 28px;
            letter-spacing: 0.02em;
            color: #bfcbd1;
            margin-bottom: 32px;
            &:last-of-type {
              margin-bottom: 0;
            }
          }
        }
      }
    }
    .stat-icon {
      background: #030715;
      border-radius: 8px;
      width: 110px;
      margin-right: 24px;
      height: 152px;
    }
  }
`;

export { WalletCard };
