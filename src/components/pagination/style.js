import styled from "styled-components";

const PaginationWrapper = styled.div`
  width: 100%;
  height: 49px;
  background: #151a26;
  /* position: fixed !important; */
  bottom: 0;
  width: calc(100%);
  right: 0;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height, or 123% */

  letter-spacing: 0.02em;

  /* Label Text Color */

  color: #707c94;
  /* bottom: 0; */
  /* left: 80px; */
  .pagination-wrapper {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
    .pagination-items-wrapper {
      .pagination-item {
        background: #151a26;
        margin: auto 5px;
        padding: 0;
        border-radius: 2px;
        font-size: 13px;
        color: #707c94;
        width: 32px;
        height: 32px;
        cursor: pointer;
        border: none;
        margin-left: 8px;
        margin-right: 0px;
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
          border-radius: 2px;
          visibility: hidden;
          opacity: 0;
          transition: 0.3s all ease-in;
        }
        &.pagination-ellipses {
          background: transparent;
          width: 19px;
          margin-left: 14px;
          margin-right: 7px;
          padding: 0;
          &:before{
            display:none;
          }
          &:focus,
          &:hover {
            border: none;
            color: #ffffff;
            background:none;
            &:before{
                display:none;
            }
          }
        }
        &:focus,
        &:hover {
          /* border: 1px solid #2589ff; */
          color: #eff2f3;
          background-color: #030715;
          &:before {
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
    .pagination-icon {
      background: #151a26;
      cursor: pointer;
      border: none;
      width: 32px;
      height: 32px;
      margin-left: 8px;
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
        border-radius: 2px;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s all ease-in;
      }
      &:focus,
      &:hover {
        /* border: 1px solid #2589ff; */
        color: #019371;
        background-color: #030715;
        &:before {
          visibility: visible;
          opacity: 1;
        }
      }
      svg {
        color: #019371;
        font-size: 10px;
      }
    }
    .pagination-input {
      margin-bottom: 0;
      margin-right: 21px;
    }
  }

  /* input {
    width: 50px;
    border-radius: 2px;
    margin-left: 8px;
    margin-right: 6px;
  } */
  .pagination-inputs-wrappper select {
    background-color: red;
  }
  .css-b62m3t-container {
    position: relative;
    box-sizing: border-box;
    top: 7px;
    right: 16px;
  }
  .select2-container .select2-selection__control {
    border: none;
    max-height: 32px;
    min-height: 32px;
    background: transparent;
    .select2-selection__value-container {
      padding-left: 0;
      padding-right: 0;
      margin-left: 0;
      margin-right: 8px;
    }
    .select2-selection__indicator {
      padding: 0;
      padding-top: 3px;
    }
    svg {
      width: 10px;
      height: 10px;
    }
  }
  .counter-label {
    color: #515d70;
    width: 40px;
    display: block;
  }
  .jpBOPd
    .select2-container
    .select2-selection__control
    .select2-selection__placeholder {
    color: #515d70;
  }
  select.drop-down-select.form-select {
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .icon-icon-drop:before {
    content: "\e904";
    color: #278aff;
    width: 13px;
    height: 13px;
    border: 2px solid #278aff;
    background: #ffff;
    border-radius: 23px;
    font-size: 6px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 20px;
    right: -3px;
  }
  .MuiFormControl-root {
    .MuiInputBase-root {
      width: 50px;
      border-radius: 2px;
      margin-left: 8px;
      margin-right: 6px;
      border: 0px;
      input {
        /* border: 1px solid ${({ theme }) => theme.colors.secondaryVariant}; */
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
        /* or 138% */

        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.02em;
        color: ${({ theme }) => theme.colors.bodyText};
        /* font-size: ${({ theme }) => theme.colors.baseFontSizeSm}; */
        padding: 5px 12px;
        height: 22px;
        border: none;
        background-color: #030715;
        border-radius: 2px;
        /* padding: 6px 11px; */
        &:focus {
          box-shadow: none;
          color: ${({ theme }) => theme.colors.bodyText};
          border: none;
        }
        &::placeholder {
          /* font-size: ${({ theme }) => theme.colors.baseFontSizeSm}; */
          color: ${({ theme }) => theme.colors.bodyText};
          opacity: 1;
        }
        .card-input-wrapper & {
          padding-left: 44px;
        }
      }
      &.Mui-focused {
        .MuiOutlinedInput-notchedOutline {
          border-color: #485666;
        }
      }
      &:hover {
        .MuiOutlinedInput-notchedOutline {
          border-color: #485666;
        }
      }
    }
  }
  .pagination-days {
    /* border:0px;
    padding:0; */
    margin-right: 15px;
    .MuiInputBase-root {
      .MuiSelect-select {
        /* border:0px; */
        /* padding:0; */
        color: #9ea5b4;
        font-weight: 700;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.02em;
        color: #707c94;
        text-align: right;
        padding-top: 0;
        padding-bottom: 0;
        padding-left: 0;
        padding-right: 14px;
        border:0px;
      }
      .MuiSvgIcon-root {
        color: ${({ theme }) => theme.colors.secondaryColor};
        top: calc(48% - 0.5em);
        right: -7px;
      }
      .MuiOutlinedInput-notchedOutline {
        border: transparent;
        color: #9ea5b4;
      }
    }
  }
`;
export { PaginationWrapper };
