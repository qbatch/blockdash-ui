import styled from "styled-components";
const SubscriptionCardWrapper = styled.div`
  /* border: 1px solid ${({ theme }) => theme.colors.secondaryVariant}; */
  padding: 24px;
  border-radius: 8px;
  margin-bottom: 24px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  position: relative;
  &:before {
    content: "";
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.primaryColor} 0%,
      ${({ theme }) => theme.colors.secondaryColor} 100%
    );
    background: linear-gradient(
        105deg,
        ${({ theme }) => theme.colors.primaryColor} 0%,
        ${({ theme }) => theme.colors.secondaryColor} 100%
      )
      no-repeat padding-box;
    -webkit-mask: -webkit-linear-gradient(
          345deg,
          ${({ theme }) => theme.colors.primaryColor} 0%,
          #7c0953 100%
        )
        content-box,
      -webkit-linear-gradient(345deg, #f55d0d 0%, #7c0953 100%);
    -webkit-mask-composite: xor;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 1px;
    border-radius: 8px;
    transition: 0.3s all ease-in;
  }

  .subscription-card-header {
    padding-bottom: 0px;
    h1 {
      font-weight: 700;
      font-size: ${({ theme }) => theme.colors.baseFontSizeXl};
      line-height: 42px;
      color: ${({ theme }) => theme.colors.onPrimary};
      margin-bottom: 0;
      strong {
        font-weight: 700;
        font-size: ${({ theme }) => theme.colors.baseFontSizeXl};
        line-height: 42px;
        letter-spacing: 0.02em;
        margin-right: 4px;
        position: relative;
        top: 0px;
      }
      small {
        font-weight: 400;
        font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
        line-height: 14px;
        top: -2px;
        left: 4px;
        position: relative;
        color: ${({ theme }) => theme.colors.bodyText};
      }
    }
    p {
      margin-top: 12px;
      font-weight: 300;
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      line-height: 18px;
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom: 0;
    }
    .tag {
      background: ${({ theme }) => theme.colors.onPrimary};
      color: ${({ theme }) => theme.colors.primaryColor};
      border-radius: 24px;
      padding: 4px 12px;
      font-weight: 700;
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      line-height: 16px;
    }
  }
  .subscription-card-content {
    padding-top: 16px;
    h3 {
      font-weight: 700;
      font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
      line-height: 16px;
      text-transform: capitalize;
      color: ${({ theme }) => theme.colors.primaryColor};
      margin-bottom: 4px;
    }
    p {
      font-weight: 400;
      font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
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
  &.active {
    background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
    &:before{
      display:none;
    }
    .subscription-card-header {
      small {
        color: ${({ theme }) => theme.colors.bodyText};
      }
    }
  }
`;
export { SubscriptionCardWrapper };
