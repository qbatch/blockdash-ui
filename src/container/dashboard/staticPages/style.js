import styled from "styled-components";

const FaqWrapper = styled.div`
  .faq-header {
    text-align: center;
    padding-top: 42px;
    margin-bottom: 64px;
    img {
      margin-bottom: 48px;
    }
    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 32px;
      line-height: 42px;
      letter-spacing: 0.02em;
      color: ${({ theme }) => theme.colors.onPrimary};
      margin-bottom: 0;
    }
  }
`;
const StaticWrapper = styled.div`
  text-align: left;
  padding-top: 20px;
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 32px;
    line-height: 42px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.onPrimary};
    margin-bottom: 40px;
  }
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.colors.onPrimary};
    margin-bottom: 16px;
  }
  p,
  ul {
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: ${({ theme }) => theme.colors.bodyText};
    margin-bottom: 32px;
  }
  ul {
    padding-left: 15px;
    li {
      list-style: disc;
    }
  }
`;
const RoadMap = styled.div`
  padding-top: 48px;
  padding-bottom: 52px;
  h1 {
    text-align: center;
    margin-bottom: 32px;
  }
  .form-header{
    margin-bottom:24px;
    h3{
      margin-bottom: 0;
    }
  }
  .MuiTimeline-root {
    .MuiTimelineItem-root {
      .MuiTimelineSeparator-root {
        margin-left:24px;
        margin-right: 24px;
        .MuiTimelineDot-root {
          margin: 0;
          width: 22px;
          height: 22px;
        }
        .MuiTimelineConnector-root {
          background-color: #485666;
          width: 1px;
        }
      }
      .MuiTimelineContent-root {
        background:${({ theme }) => theme.colors.surface};
        box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
        backdrop-filter: blur(13.5914px);
        border-radius: 12px;
        padding: 24px;
        h3 {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          /* identical to box height, or 150% */

          letter-spacing: 0.04em;

          /* H1 Color */

          color: ${({ theme }) => theme.colors.onPrimary};
          margin-bottom: 8px;
        }
        span {
          font-weight: 300;
          font-size: 13px;
          line-height: 18px;
          /* identical to box height, or 138% */

          letter-spacing: 0.02em;

          /* H1 Color */

          color: ${({ theme }) => theme.colors.onPrimary};
          display: block;
        }
        p {
          font-weight: 300;
          font-size: 13px;
          line-height: 18px;
          /* or 138% */

          letter-spacing: 0.02em;

          /* Color Primary Text */

          color: ${({ theme }) => theme.colors.bodyText};
          margin-top: 16px;
        }
      }
      &:nth-of-type(even) {
        .MuiTimelineContent-root {
          text-align: left;
        }
      }
      &:before {
        padding: 24px;
      }
    }
  }
`;
export { FaqWrapper, StaticWrapper, RoadMap };
