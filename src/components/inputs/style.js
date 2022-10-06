import styled from "styled-components";
const SearchInputWrapper = styled.div`
  input:placeholder-shown {
    text-overflow: ellipsis;
  }
  .return-arrow {
    font-size: 24px;
    position: absolute;
    right: 10px;
    top: 18px;
  }
  input {
    border: 1px solid #cfd8dc;
    height: 32px;
    width: 184px;
    border-radius: 4px;
    min-width: ${(props) => props.width};
    font-size: ${({ theme }) => theme.colors.baseFontSize};
    line-height: 18px;
  }
  svg {
    font-size: 12px;
    position: absolute;
    right: 10px;
    top: 9px;
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

const InputWrapper = styled.div`
  width: ${(props) => props.width};
  margin-bottom: 24px;
  position: relative;
  &.password-input {
    &.password-input-primary{
      margin-bottom: 31px;
    }
    .password-icon {
      font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
      position: absolute;
      right: 16px;
      top: 12px;
      color: ${({ theme }) => theme.colors.secondaryColor};
    }
    .password-meter {
    }
    .password-strength {
      top: -1px;
      & > div {
        width: 76px;
        div {
          height: 6px !important;
        }
      }
      p {
        opacity: 0;
        height: 0;
        display:none;
      }
    }
    .d-flex {
      label {
        font-size: 9px;
        line-height: 12px;
        letter-spacing: 0.02em;
        margin-right: 3px;
        color: #bfcbd1;
      }
      .password-strength {
        & > div {
          width: 156px !important;
          margin-top: 4px !important;
          div {
            &:first-of-type {
              border-top-left-radius: 6px;
              border-bottom-left-radius: 6px;
            }
            &:last-of-type {
              border-top-right-radius: 6px;
              border-bottom-right-radius: 6px;
              
            }
            &:nth-child(2n) {
              display: none;
            }
          }
        }
      }
    }
  }
  .input-extras {
    margin-top: 0px;
    position: absolute;
    bottom: -16px;
    .text-status {
      font-weight: 500;
      font-size: 9px;
      line-height: 12px;
      letter-spacing: 0.02em;
    }
  }
  .MuiFormControl-root {
    .MuiFormLabel-root {
      margin-bottom: 4px;
      /* color: ${({ theme }) => theme.colors.labelColor}; */
      color: #485666;
      font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
      font-weight: 300;
      line-height: 24px;
      letter-spacing: 0.02em;
      color: #485666;
      padding-left: 2px;
      padding-right: 4px;
 
      transform: translate(14px, 8px) scale(1);
      &.Mui-focused {
        /* color: ${({ theme }) => theme.colors.labelColor}; */
      }
      &.MuiInputLabel-shrink {
        transform: translate(14px, -8px) scale(0.75);
        background-color: #030715;
        padding-left: 4px;
      }
    }
    .MuiInputBase-root {
      border: 1px solid #485666;
      input {
        /* border: 1px solid ${({ theme }) => theme.colors.secondaryVariant}; */
        font-weight: 300;
        line-height: 24px;
        border-radius: 8px;
        color: ${({ theme }) => theme.colors.bodyText};
        font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
        height: ${(props) => props.height};
        padding: 7px 16px;
        height: auto;
        /* padding: 6px 11px; */
        &:focus {
          box-shadow: none;
          color: ${({ theme }) => theme.colors.bodyText};
        }
        &::placeholder {
          font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
          color: ${({ theme }) => theme.colors.bodyText};
          opacity: 1;
        }
        .card-input-wrapper & {
          padding-left: 44px;
        }
      }
      &.Mui-focused {
        border: 1px solid #485666;
        .MuiOutlinedInput-notchedOutline {
          border-color: #485666;
        }
      }
      &:hover {
        border: 1px solid #485666;
        .MuiOutlinedInput-notchedOutline {
          border-color: #485666;
        }
      }
    }
  }

  .search-icon {
    font-size: 12px;
    position: absolute;
    right: 10px;
    /* top:11px; */
    top: 1px;
    color: ${({ theme }) => theme.colors.primaryColor};
    &.credit-card {
      top: 8px;
      right: auto;
      left: 16px;
      font-size: 15px;
    }
  }
  small.form-text {
    &.text-info {
      font-size: 8px;
      line-height: 9.88px;
      color: ${({ theme }) => theme.colors.labelColor}!important;
    }
  }
`;
const PhoneNumberWrapper = styled.div`
  margin-bottom: 16px;
  .form-label {
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.labelColor};
    font-size: ${({ theme }) => theme.colors.baseFontSize};
    line-height: 14px;
  }
  .PhoneInput {
    border: 1px solid ${({ theme }) => theme.colors.secondaryVariant};
    border-radius: 4px;
    padding: 0px 10px;
    &:focus {
      border-color: #86b7fe;
    }
    .PhoneInputCountrySelectArrow {
      border: 0;
      width: 15px;
      height: 12px;
      background-size: cover;
      background-repeat: no-repeat;
      transform: none;
      background-image: url("data:image/svg+xml,%3Csvg stroke='%232589FF' fill='%232589FF' stroke-width='0' viewBox='0 0 16 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'%3E%3C/path%3E%3C/svg%3E");
      opacity: 1;
    }
    .PhoneInputCountryIcon--border {
      border-radius: 55px;
      overflow: hidden;
      height: 19px;
      box-shadow: none;
      width: 19px;
    }
  }
  input {
    border: transparent;
    line-height: 18px;
    border-radius: 0;
    color: ${({ theme }) => theme.colors.bodyText};
    font-size: ${({ theme }) => theme.colors.baseFontSize};
    height: ${(props) => props.height};
    padding: 6px 11px;
    padding-left: 0;
    &:focus {
      box-shadow: none;
      color: ${({ theme }) => theme.colors.bodyText};
    }
    &::placeholder {
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      color: ${({ theme }) => theme.colors.bodyText};
    }
    &:focus-visible {
      outline: none;
    }
  }
`;
const PhoneNumberWrappers = styled.div`
  margin-bottom: 15px;
  label {
    margin-bottom: 4px;
    color: ${({ theme }) => theme["regent_gray"]};
    font-size: ${({ theme }) => theme["base-font-size-small"]};
  }
  .PhoneInput {
    border: 1px solid #cfd8dc;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    &.--PhoneInput-color--focus {
      color: transparent;
    }
  }
  .PhoneInputInput {
    border: none;
  }
`;
export { SearchInputWrapper, InputWrapper, PhoneNumberWrapper };
