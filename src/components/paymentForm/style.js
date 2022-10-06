import styled from "styled-components";

const PaymentFormWrapper = styled.div`
  .MuiFormControl-root {
    .MuiFormLabel-root {
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      line-height: 26px;
    }
    .MuiInputBase-root {
      border: 1px solid #485666;
      padding-right: 5px;
      input {
        font-size: ${({ theme }) => theme.colors.baseFontSize};
        line-height: 26px;
        /* padding: 11px 16px; */
        &::placeholder {
          font-size: ${({ theme }) => theme.colors.baseFontSize};
        }
      }
    }
  }
`;
export default PaymentFormWrapper;
