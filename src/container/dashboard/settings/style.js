import Styled from 'styled-components';
const SettingsWrapper = Styled.div`
    .row{
        margin-left:-15px;
        margin-right:-15px;
    }
    [class*='col-']{
        padding-left:15px;
        padding-right:15px;
    }
    .tag {
      border-radius: 12px;
      width: auto;
      margin-right: 0;
      padding: 4px 12px;
      margin-bottom: 0;
      font-weight: 700;
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      line-height: 16px;
      background-color: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.onPrimary};
        &.tag-success{
            background-color: ${({ theme }) => theme.colors.accentColorSuccess};
        }
        &.tag-warning{
            background-color: ${({ theme }) => theme.colors.accentColorWarning};
        }
    }
    .payment-card-details{
        padding-top:48px;
        padding-bottom:24px;
        border-bottom:1px solid ${({ theme }) => theme.colors.labelColor};
        &:first-of-type{
            padding-top:0px;
        }
        .card-sublabel{
            font-weight: 400;
            font-size: ${({ theme }) => theme.colors.baseFontSize};
            line-height: 16px;
            color:${({ theme }) => theme.colors.bodyText};
            margin-bottom:24px;
            max-width:798px;
            p{
                margin-bottom:0;
            }
        }
    }

  `;
export { SettingsWrapper };
