import styled from "styled-components";
const StyledTabs = styled.div`
  &.sorting-tabs {
    position: absolute;
    right: 0;
    top: 25px;
    .MuiTabs-root {
      min-height: 36px;
    }
    .MuiTabs-flexContainer {
      .MuiButtonBase-root {
        &:first-of-type {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
        }
        &:last-of-type {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
      }
    }
  }
  .MuiTabs-flexContainer {
    grid-column-gap: 24px;
  }
  .icon-tabs {
    .MuiTabs-flexContainer {
      grid-column-gap: 0;
      .MuiButtonBase-root {
        min-width: 36px;
        max-width: 36px;
        min-height: 36px;
        max-height: 36px;
        border-radius: 4px;
        border: 0px;
        background-color: #151a26;
        &.Mui-selected {
          background: linear-gradient(90deg, #1976d2 0%, #009470 100%);
          i {
            color: ${({ theme }) => theme.colors.whiteColor};
          }
        }
      }
    }
  }
  .MuiButtonBase-root {
    border: 1px solid #485666;
    /* padding:16px 20px; */
    padding: 16px 21px;
    border-radius: 7px;
    color: ${({ theme }) => theme.colors.bodyText};
    text-transform: capitalize;
    font-size: 13px;
    font-weight: 700;
    min-height: 50px;
    padding: 0;
    flex: 1;
    &:last-of-type {
      flex: 2;
    }
    &.Mui-selected {
      position: relative;
      border: 1px solid transparent;
      color: ${({ theme }) => theme.colors.onPrimary};
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
        /* width: 100%;
        height: 100%; */
        width: 98%;
        height: 96%;
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
    display: none;
  }
`;
export { StyledTabs };
