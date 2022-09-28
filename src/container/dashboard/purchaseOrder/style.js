import styled from "styled-components";
const PoSummary = styled.div`
   background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    border: 1px solid ${({ theme }) => theme.colors.secondaryVariant};
    padding: 0px 24px 17px;
    border-radius: 8px;
    margin-bottom: 22px;
    .po-summary-details{
      flex-wrap: wrap;
      .summary-col{
        min-width:100px;
        label{
          margin-top:17px;
          margin-bottom: 5px;
          font-size: ${({theme})=> theme.colors.baseFontSizeXs};
          font-weight:600;
          color: ${({ theme }) => theme.colors.labelColor};
        }
        p{
          margin-bottom: 0;
          font-size:${({ theme }) => theme.colors.baseFontSize};
          color: ${({ theme }) => theme.colors.onSurface};
        }
        a{
        }
        &.po-summary-user{
          min-width: 117px;
        }
        &.po-summary-vendor{
          min-width: 139px;
        }
        &.po-summary-warehouse{
          min-width: 141px;
        }
        &.po-summary-status{
          min-width: 130px;
        }
        &.po-summary-order{
          min-width: 121px;
        }
        &.po-summary-supplier{
          min-width: 117px;
        }
        &.po-summary-amazon{
          min-width: 155px;
        }
        &.po-summary-cost{
          min-width: 113px;
        }
        &.po-summary-invoice{
          min-width: 104px;
        }
        &.po-summary-date{
          min-width: 79px;
        }
      }
    }
 
`;
const PoDetailTable = styled.div`

    .QB-dataTable{
      .ag-center-cols-viewport .ag-cell-wrapper{
        min-height:60px;
        padding: 11px 8px;
        align-items: flex-start;
        line-height:17px;

      }
      .ag-cell-label-container{
        padding: 5px 0px;
      }
      .ag-center-cols-viewport .ag-cell-value{
        line-height:19px;
      }
      .ag-header-viewport .ag-header-row .ag-header-cell{
        &:nth-of-type(1){
          padding: 10px 16px;
        }
      }
      
      .title-column{
        padding-left:8px;
      }
      .title-content{
        font-size: ${({ theme }) => theme.colors.baseFontSize};
        color: ${({ theme }) => theme.colors.bodyText};
        line-height:16px;
        margin-bottom: 7px;
        display: block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width:100%;
      }
      .title-details{
        font-size:8px;
        line-height:14px;
        text-transform: uppercase;
        strong{
          font-weight:600;
        }
      }
    }   
`;
export { PoSummary, PoDetailTable }