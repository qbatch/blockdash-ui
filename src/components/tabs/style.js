// import styled from "styled-components";
// import Tabs from "react-bootstrap/Tabs";
// const StyledTabs = styled(Tabs)`
//   margin-top: -4px !important;
//   gap: 24px;
//   border-bottom: 0px;
//   li {
//     .nav-link {
//       /* padding: 16px 16px; */
//       padding: 16px 21.1px;
//       color: #515d70;
//       border-radius: 4px 4px 0px 0px;
//       font-size: 12px;
//       line-height: 14.5px;
//       letter-spacing: 0.15px;
//       font-weight: 700;
//       font-size: 13px;
//       line-height: 16px;
//       letter-spacing: 0.02em;
//       color: ${({ theme }) => theme.colors.bodyText};
//       border: 1px solid #485666;
//       position: relative;
//       border-radius: 8px;
//       min-width:108px;
//       &:before {
//         content: "";
//         background: linear-gradient(
//           90deg,
//           ${({ theme }) => theme.colors.primaryColor} 0%,
//           ${({ theme }) => theme.colors.secondaryColor} 100%
//         );
//         background: linear-gradient(
//             105deg,
//             ${({ theme }) => theme.colors.primaryColor} 0%,
//             ${({ theme }) => theme.colors.secondaryColor} 100%
//           )
//           no-repeat padding-box;
//         -webkit-mask: -webkit-linear-gradient(
//               345deg,
//               ${({ theme }) => theme.colors.primaryColor} 0%,
//               #7c0953 100%
//             )
//             content-box,
//           -webkit-linear-gradient(345deg, #f55d0d 0%, #7c0953 100%);
//         -webkit-mask-composite: xor;
//         position: absolute;
//         width: 100%;
//         height: 100%;
//         top: 0;
//         left: 0;
//         right: 0;
//         bottom: 0;
//         padding: 1px;
//         border-radius: 8px;
//         transition: 0.3s all ease-in;
//         opacity: 0;
//         visibility: hidden;
//       }
//       svg {
//         margin-right: 8px;
//       }
//       &.active,
//       &:hover {
//         background: transparent;
//         color: ${({ theme }) => theme.colors.onPrimary};
//         border: 1px solid transparent;
//         &:before {
//           opacity: 1;
//           visibility: visible;
//         }
//       }
//     }
//   }
//   &.sorting-tabs{
//     li{
//         .nav-link{
//             /* padding: 8px 32px 7.5px!important; */
//             min-width:10px;
//         }
//     }
//   }
// `;
// export { StyledTabs };
import styled from "styled-components";
const StyledTabs = styled.div`
.MuiTabs-flexContainer {
  grid-column-gap: 24px;
}
  .MuiButtonBase-root {
    border: 1px solid #485666;
    min-height: 47px;
    border-radius:7px ;
    color:#BFCBD1;
    text-transform:capitalize;
    font-size:13px ;
    &.Mui-selected {
    position: relative;
    border:none;
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
    }
  }
  .MuiTabs-indicator {
    display:none ;
  }
`
export {StyledTabs}