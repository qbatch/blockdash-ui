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
      color: #eff2f3;
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
    color: #eff2f3;
    margin-bottom: 40px;
  }
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #eff2f3;
    margin-bottom: 16px;
  }
  p,ul {
    font-weight: 300;
    font-size: 13px;
    line-height: 18px;
    letter-spacing: 0.02em;
    color: #bfcbd1;
    margin-bottom: 32px;
  }
  ul{
    padding-left:15px;
    li{
      list-style:disc;
    }
  }
`;
export { FaqWrapper, StaticWrapper };
