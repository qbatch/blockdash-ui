import styled from "styled-components";

const AccordionWrapper = styled.div`
  .MuiAccordion-root {
    background-color: transparent;
  }
  .MuiAccordionSummary-content {
    .MuiTypography-root {
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.04em;
      color: #bfcbd1;
    }
  }
  .MuiAccordionDetails-root {
    .MuiTypography-root {
      font-weight: 300;
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 0.02em;
      color: #bfcbd1;
    }
  }
  .MuiAccordionSummary-expandIconWrapper {
    color:#019371;
    font-size: 24px;
  }
`;
export { AccordionWrapper };
