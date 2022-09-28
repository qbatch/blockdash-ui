import styled from 'styled-components';
import cardBlue from '../../static/images/creditcardblue.svg';
import cardGray from '../../static/images/creditcardblack.svg';
const CreditCard = styled.div`
  border: 0px;
  padding: 16px;
  background-image: url(${cardBlue});
  background-size: cover;
  background-position: top center;
  border-radius: 8px;
  margin-bottom:24px;
  .creditcard-header {
    margin-bottom: 24px;
    .creditcard-headerleft {
      .signal-logo {
        margin-right: 12px;
      }
    }
    .creditcard-headerright {
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        margin-top:-2px;
        li {
          display: inline-block;
          margin-right: 17px;
          color: ${({ theme }) => theme.colors.onPrimary};
          font-size: 15px;
          vertical-align: middle;
          &:last-of-type {
            margin-right: 0;
          }
          .icon-check-custom {
            background-color: ${({ theme }) => theme.colors.accentColorSuccess};
            width: 16px;
            height: 16px;
            border-radius: 500px;
            color: ${({ theme }) => theme.colors.onPrimary};
            display: block;
            text-align: center;
            padding: 3px;
            line-height: 8px;
          }
          .icon-edit-custom {
            position: relative;
            top: -1px;
          }
        }
      }
    }
  }
  .creditcard-content {
    .creditcard-content-primary {
      h3 {
        font-weight: 600;
        font-size:${({ theme }) => theme.colors.baseFontSizeSm};
        line-height: 20px;
        color: ${({ theme }) => theme.colors.onPrimary};
        margin-bottom: 8px;
      }
      h4 {
        font-weight: 700;
        font-size:${({ theme }) => theme.colors.baseFontSize};
        line-height: 18px;
        color: ${({ theme }) => theme.colors.onPrimary};
        margin-bottom: 8px;
      }
      p {
        font-weight: 400;
        font-size:${({ theme }) => theme.colors.baseFontSize};
        line-height: 16px;
        color: #ced4da;
        margin-bottom: 0;
      }
      .chip-icon {
        padding-bottom: 12px;
      }
      .store-details {
        margin-bottom: 24px;
        h2 {
          margin-bottom: 0;
          font-weight: 700;
          font-size:${({ theme }) => theme.colors.baseFontSizeLg};
          line-height: 29px;
          color: ${({ theme }) => theme.colors.onPrimary};
        }
      }
      .region-details {
        p {
          font-weight: 700;
          font-size:${({ theme }) => theme.colors.baseFontSize};
          line-height: 17px;
          color:${({ theme }) => theme.colors.onPrimary};
        }
        ul {
          li {
            display: inline-block;
            margin-right: 14px;
            &:last-of-type{
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  &.inactive {
    background-image: url(${cardGray});
    /* .tag {
      display: none;
    } */
    .creditcard-header {
      ul {
        li {
          .icon-check-custom {
            color: #979797;
            background-color: ${({ theme }) => theme.colors.onPrimary};
          }
          button{
            padding:3px 12px;
            margin-bottom: 0;
            &.btn-trans{
              background:transparent;
              border:1px solid #ffffff;
              color:#ffffff;
            }
          }
        }
      }
    }
  }
`;
export { CreditCard };
