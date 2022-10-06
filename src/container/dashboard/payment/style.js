import styled from "styled-components";

const PaymentWrapper = styled.div`
  .payment-content {
    padding-top:32px;
    padding-bottom:48px;
    h2 {
      font-weight: 800;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.02em;
      color: #eff2f3;
      margin-bottom: 24px;
    }
    .payment-method {
      padding-top:0;
      h3 {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.04em;
        color:${({theme})=> theme.colors.bodyText};
        margin-bottom: 24px;
      }
    }
    .payment-form{
      .nav-tabs{
        margin-bottom: 24px!important;
      }
      button{
        margin-top:8px;
        &.nav-link{
          margin-top:0;
        }
      }
    }
  }
`;
export default PaymentWrapper;
