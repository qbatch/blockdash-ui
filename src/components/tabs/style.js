import styled from "styled-components";
const StyledTabs = styled.div`
.MuiTabs-flexContainer {
  grid-column-gap: 24px;
}
  .icon-tabs {
    .MuiTabs-flexContainer {
        grid-column-gap:0 ;
      .MuiButtonBase-root{
       min-width:36px;
       min-height: 38px;
       border-radius:4px;
      &.Mui-selected{
        background: linear-gradient(90deg, #1976D2 0%, #009470 100%);
        i{
          color:${({ theme }) => theme.colors.whiteColor}
        }
      }
    }
    }
 
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