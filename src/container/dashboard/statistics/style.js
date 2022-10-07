import styled from "styled-components";
const StateBox = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  /* margin-bottom: 20px; */
  &.stat-box-half {
    margin-bottom: 20px;
  }
  .stat-content-bottom {
    padding-top: 12px;
    .chart{
      img{
        width:100%;
      }
    }
  }
  .stat-header {
    margin-bottom:16px;
    img {
      margin-right: 12px;
    }
    h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.04em;
      color: ${({ theme }) => theme.colors.labelColor};
      margin-bottom: 4px;
    }
    h4 {
      font-weight: 500;
      font-size: 11px;
      line-height: 14px;
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.labelColor};
      margin-bottom: 0;
      display: flex;
      align-items: center;
      gap: 15px;
      /* margin-bottom: 16px; */
      i {
        color: #1976d2;
        font-size: 20px;
      }
    }
    .stat-header-left{
   
      h4{
        margin-bottom: 0;
      }
    }
  }
  .stat-content {
    p {
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom: 0;
    }
    .stat-content-right {
      .text-percentage {
        margin-right: 8px;
        margin-top: 8px;
      }
      .chart-image{
        margin-top:-16px;
      }
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
          margin-bottom: 2px;
          letter-spacing: 0.02em;

          color: ${({ theme }) => theme.colors.labelColor};
        }
        p {
          font-weight: 700;
          font-size: 13px;
          line-height: 16px;
          margin-bottom: 0;
          letter-spacing: 0.02em;

          color: ${({ theme }) => theme.colors.bodyText};
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
      &.no-bg{{
        background:transparent;
      }}
    }
  }

`;
const AssetBox = styled.div`
  padding: 24px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  margin-bottom: 20px;
  height: 100%;
  &.asset-table {
    height: auto;
  }
  .asset-header {
    margin-bottom: 12px;
    h2 {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.04em;
      color: #eff2f3;
      margin-bottom: 0;
      max-width: 290px;
      span {
        font-weight: 300;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: 0.02em;
        color: #bfcbd1;
      }
    }
    ul {
      display: flex;
      gap: 8px;
      li {
        background: #030715;
        font-weight: 500;
        font-size: 11px;
        line-height: 14px;
        letter-spacing: 0.02em;
        color: #bfcbd1;
        border-radius: 4px;
        padding: 3px 6px;
        cursor: pointer;
        transition: 0.3s all ease-in;
        &:hover,
        &.active {
          background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
          transition: 0.3s all ease-in;
        }
      }
    }
  }
  .asset-content {
    .asset-chart {
      img {
        width: 100%;
      }
    }
  }
  .asset-coming-soon {
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    .empty-text {
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
      text-align: center;
      letter-spacing: 0.02em;
      color: #eff2f3;
      margin-bottom: 0;
    }
  }
`;
export { StateBox, AssetBox };
