import styled from "styled-components";
const NftDashboardWrapper = styled.div`
  margin-top: 32px;
  position: relative;
  ul {
    &.nav-tabs {
      position: absolute;
      right: 0;
      top: 24px;
      width: 75px;
      padding-right: 0;
      margin-top: 0 !important;
      margin-bottom: 0 !important;
      background: #151a26;
      border-radius: 8px;
      border-bottom: 0px;
      gap:0;
      li {
        .nav-link {
          padding: 10.75px 10px;
          border: 0px;
          border-radius: 8px;
          font-size: 16px;
          background: #151a26;
          &:hover,
          &.active {
            background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
            color: #eff2f3;
          }
        }
        &:first-of-type {
          .nav-link {
            border-top-right-radius: 0px;
            border-bottom-right-radius: 0px;
          }
        }
        &:last-of-type {
          .nav-link {
            border-top-left-radius: 0px;
            border-bottom-left-radius: 0px;
          }
        }
      }
    }
  }
  .nft-dashboard-header {
    align-items: center;
    margin-bottom: 7px;
    h3 {
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #1976d2;
    }
    padding-right: 87px;
  }
  .nft-grid-title {
    h3 {
      margin-bottom: 0;
    }
  }
  .nft-grid-filters {
    display: flex;
    gap: 13px;
    ul {
      background: #151a26;
      border-radius: 8px;
      li {
        padding: 11px 20px;
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #485666;
        cursor: pointer;
        transition: 0.3s all ease-in;
        border-radius: 8px;
        &:hover,
        &.active {
          background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
          color: #eff2f3;
        }
      }
      &.sorting-filters {
        li {
          &:first-of-type {
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          &:last-of-type {
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
          }
        }
      }
    }
  }
  .nft-details-table {
    background: #151a26;
    border-radius: 8px;
    padding-left: 24px;
    padding-right: 24px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    .QB-dataTable .ag-header-viewport .ag-header-cell:first-of-type{
      padding-left:9px;
    }
    .title-image{
      border-radius:8px;
    }
    .pagination-wrapper{
      padding-left:4px;
      /* padding-left:32px;
      padding-right: 32px; */
    }
  }
`;
export { NftDashboardWrapper };
