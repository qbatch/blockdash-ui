import styled from "styled-components";
const SubscriptionCard = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondaryVariant};
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  .subscription-card-header {
    border-bottom: 1px solid #4e5969;
    padding-bottom: 15px;
    h2 {
      font-weight: 700;
      font-size: 36px;
      line-height: 44px;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 0;
      strong {
        font-weight: 700;
        font-size:${({ theme }) => theme.colors.baseFontSize};
        line-height: 16px;
        margin-right: 4px;
        position: relative;
        top: -2px;
        left: -1px;
      }
      small {
        font-weight: 400;
        font-size:${({ theme }) => theme.colors.baseFontSizeXs};
        line-height: 12px;
        top: -2px;
        left: 4px;
        position: relative;
      }
    }
    p {
      margin-top: 4px;
      font-weight: 400;
      font-size:${({ theme }) => theme.colors.baseFontSize};
      line-height: 16px;
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom: 0;
    }
  }
  .subscription-card-content {
    padding-top: 16px;
    h3 {
      font-weight: 700;
      font-size:${({ theme }) => theme.colors.baseFontSizeSm};
      line-height: 16px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 4px;
    }
    p {
      font-weight: 400;
      font-size:${({ theme }) => theme.colors.baseFontSizeXs};
      line-height: 12px;
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom: 0;
    }
    .subscription-date {
      margin-right: 99px;
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
`;
export { SubscriptionCard };
