import Styled from 'styled-components';

const CheckBoxWrapper = Styled.span`
label{
  color: ${({ theme }) => theme['regent_gray']};
  font-size: ${({ theme }) => theme['medium-font-size']};
}
.parameter-checkbox,.auth-checkbox{
    input{
   width: 16.67px;
    height: 16.67px;
    margin: 6px -18px;
    }
}
.auth-checkbox{
  margin-bottom:32px;
  margin-top: -5px;
}
  .form-check{
    label{
      padding-top:6px;
      padding-left:8px;
      color:${({theme}) => theme.colors.bodyText};
      a{
        color:${({theme}) => theme.colors.primaryColor};
      }
    }
  }
}
  .mt-0{
    input{
      margin-top:0px;
    } 
  }
  input{
    margin-top:5px;
    &:focus{
      box-shadow:none
    }
  }
  `;
export { CheckBoxWrapper };
