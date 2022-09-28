import Styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs';
const StyledTabs = Styled(Tabs)`
margin-top:-4px!important;
    li{
        .nav-link{
            padding: 8px 32px 7.5px;
            color:#515D70;
            border-radius: 4px 4px 0px 0px;
            font-size:12px;
            line-height:14.50px;
            letter-spacing: 0.15px;
            &.active{
            background-color:${({ theme }) => theme.colors.primaryColor};
            color:#fff;
            }
        }
    }

  `;
export { StyledTabs };
