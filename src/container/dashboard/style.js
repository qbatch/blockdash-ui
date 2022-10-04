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
`;
const PageHeader = styled.div`
  margin-bottom: 32px;
  .page-title {
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: #eff2f3;
    display: flex;
    align-items: center;
    margin-bottom: 0;
    span {
      color: #1976d2;
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
    margin-bottom: 0;
    margin-top: 12px;
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #bfcbd1;
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
const TableHeader = styled.div`
  margin-bottom: 16px;
  &.table-header-secondary {
    margin-bottom: 23px;
  }
  .table-title {
    line-height: 20px;
    margin-bottom: 0;
  }
  .table-title-single {
    margin-bottom: 6px;
    padding-top: 4px;
  }
  .table-header-extras {
    input,
    select {
      display: inline-block;
    }
    .field-wrapper {
      display: inline-block;
      margin-left: 12px;
      margin-bottom: 0;
      .select2-container {
        margin-bottom: 0;
      }
    }
    .field-btn {
      width: auto;
      margin-bottom: 0;
      margin-left: 12px;
      i {
        margin-right: 8px;
        font-size: 14px;
        position: relative;
        top: 1px;
      }
    }
    ul {
      li {
        button {
          margin-bottom: 0;
        }
      }
    }
  }
`;
const WalletSource = styled.div`
  .wallet-sources {
    list-style: none;
    align-items: center;
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

// extras not used
const PoSummary = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.onSurface};
  border: 1px solid ${({ theme }) => theme.colors.secondaryVariant};
  padding: 0px 24px 17px;
  border-radius: 8px;
  margin-bottom: 22px;
  .po-summary-details {
    flex-wrap: wrap;
    .summary-col {
      min-width: 100px;
      label {
        margin-top: 17px;
        margin-bottom: 5px;
        font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
        font-weight: 600;
        color: ${({ theme }) => theme.colors.labelColor};
      }
      p {
        margin-bottom: 0;
        font-size: ${({ theme }) => theme.colors.baseFontSize};
        color: ${({ theme }) => theme.colors.onSurface};
      }
      a {
      }
      &.po-summary-user {
        min-width: 117px;
      }
      &.po-summary-vendor {
        min-width: 139px;
      }
      &.po-summary-warehouse {
        min-width: 141px;
      }
      &.po-summary-status {
        min-width: 130px;
      }
      &.po-summary-order {
        min-width: 121px;
      }
      &.po-summary-supplier {
        min-width: 117px;
      }
      &.po-summary-amazon {
        min-width: 155px;
      }
      &.po-summary-cost {
        min-width: 113px;
      }
      &.po-summary-invoice {
        min-width: 104px;
      }
      &.po-summary-date {
        min-width: 79px;
      }
    }
  }
`;
const PoDetailTable = styled.div`
  .QB-dataTable {
    .ag-center-cols-viewport .ag-cell-wrapper {
      min-height: 60px;
      padding: 11px 0px;
      align-items: flex-start;
      line-height: 17px;
      max-height: 60px;
      overflow: hidden;
    }
    .ag-cell-label-container {
      /* padding: 5px 0px; */
    }
    .ag-center-cols-viewport .ag-cell-value {
      line-height: 19px;
    }
    .ag-header-viewport .ag-header-row .ag-header-cell {
      &:nth-of-type(1) {
        /* padding: 10px 16px; */
      }
    }

    .title-column {
      padding-left: 0;
    }
    .title-content {
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      color: ${({ theme }) => theme.colors.bodyText};
      line-height: 16px;
      margin-bottom: 7px;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
    }
    .title-details {
      font-size: 8px;
      line-height: 14px;
      text-transform: uppercase;
      strong {
        font-weight: 600;
      }
    }
    .input-accent {
      margin-bottom: 0;
      line-height: 8px;
      margin-top: 0px;
      .form-control {
        border: 1px solid;
        border-radius: 4px;
      }
      small.form-text.text-info {
        position: relative;
        display: block;
        padding-top: 2px;
      }
      &.input-success {
        .form-control {
          border-color: ${({ theme }) => theme.colors.accentColorSuccess};
        }
      }
      &.input-primary {
        .form-control {
          border-color: ${({ theme }) => theme.colors.primaryColor};
        }
      }
    }
  }
`;
const OrderDetails = styled.div`
  .order-info {
    flex-wrap: wrap;
    li {
      margin-bottom: 25px;
      margin-right: 96px;
      &:nth-of-type(4n) {
        margin-right: 0;
      }
      label {
        font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
        line-height: 12px;
        color: ${({ theme }) => theme.colors.labelColor};
        margin-bottom: 6px;
      }
      p {
        font-size: ${({ theme }) => theme.colors.baseFontSize};
        line-height: 16px;
        color: ${({ theme }) => theme.colors.onBackground};
        margin-bottom: 0;
      }
    }
  }
`;
const PaymentMethodInfo = styled.div`
  .shopping-card-information {
    padding-top: 6px;
    margin-left: -4px;
    .card-information-head {
      margin-bottom: 30px;
      h3 {
        font-weight: 700;
        font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
        line-height: 20px;
        color: ${({ theme }) => theme.colors.primaryColor};
        margin-bottom: 14px;
      }
      p {
        font-weight: 400;
        font-size: ${({ theme }) => theme.colors.baseFontSize};
        line-height: 16px;
        color: ${({ theme }) => theme.colors.bodyText};
        margin-bottom: 0;
      }
    }
    .card-information-content {
      .add-payment {
        h3 {
          margin-bottom: 20px;
        }
        label {
          line-height: 12px;
          font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
          font-weight: 600;
          margin-bottom: 6px;
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
    }
  }
`;
// extras not used

export {
  DashboardWrapper,
  PageHeader,
  TableHeader,
  WalletSource,
  PoSummary,
  PoDetailTable,
  OrderDetails,
  PaymentMethodInfo,
};
