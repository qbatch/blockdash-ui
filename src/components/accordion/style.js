import styled from "styled-components";

const AccordionWrapper = styled.div`
  .MuiButtonBase-root.MuiAccordionSummary-root {
    align-items: baseline;
  }
  .MuiAccordion-root {
    background-color: transparent;
    border-bottom: 1px solid #485666;
  }
  .MuiAccordionSummary-content {
    margin: 32px 0;
    &.Mui-expanded {
      margin: 16px 0;
    }
    .MuiTypography-root {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.04em;
      color: #bfcbd1;
    }
  }
  .MuiAccordionDetails-root {
    padding: 0px 16px 32px;
    .MuiTypography-root {
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 0.02em;
      color: #bfcbd1;
    }
  }
  .MuiAccordionSummary-expandIconWrapper {
    color: #019371;
    font-size: 24px;
    position: relative;
    top: 4px;
  }
`;
export { AccordionWrapper };
