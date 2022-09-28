import styled from "styled-components";
const BadgeWrapper = styled.div`
    .badge{
        padding: 3px 12px;
        font-size:10px;
        font-family: 'inter';
        line-height:12px;
        font-weight:600;
        border-radius: 15px;
        color:${({theme})=> theme.colors.onPrimary};
        background-color:${({theme})=> theme.colors.primaryColor};
        &.bg-warning{
            color:${({theme})=> theme.colors.onPrimary};
            background-color:${({theme})=> theme.colors.accentColorWarning};
            &.outline-warning{
                color:${({theme})=> theme.colors.accentColorWarning};
                border: 1px solid ${({theme})=> theme.colors.accentColorWarning};
                background-color:transparent!important;
                background: ${({theme})=> theme.colors.accentOutlineWarning}!important;
            }
        }
        &.bg-success{
            color:${({theme})=> theme.colors.onPrimary};
            background-color:${({theme})=> theme.colors.accentColorSuccess};
            &.outline-success{
                color:${({theme})=> theme.colors.accentColorSuccess};;
                border: 1px solid ${({theme})=> theme.colors.accentColorSuccess};
                background-color:transparent!important;
                background: ${({theme})=> theme.colors.accentOutlineSuccess}!important;
            }
        }
    }
`;
export default BadgeWrapper;
