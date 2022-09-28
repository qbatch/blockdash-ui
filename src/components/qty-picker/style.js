import styled from "styled-components";

const QuantityPickerWrapper = styled.div`
    [data-quantity]{
        input{
        padding:0;
        border:1px solid ${({ theme }) => theme.colors.secondaryVariant};
        width:71px!important;
        height:30px;
        margin: 0 auto;
        display:block;
        border-radius: 4px;
        box-shadow:none;
        text-align:left;
        padding:8px 7px;
        font-weight: 400;
        font-size: 13px;
        line-height: 16px;
        color: #515D70;
        &:focus{
            border:1px solid ${({ theme }) => theme.colors.primaryColor};
        }
    }
        button{
            width: 28px;
            height: 17px;
            font-size: 16px;
            background-image: none;
            background:transparent;
            color:${({ theme }) => theme.colors.primaryColor};
            &:before{
                margin-left: -28px;
                margin-right: 15px;
            }
            &.add{
                &:before{
                    margin-left: -17px
                }
            }
            &:active{
                box-shadow: none;
            }
        }
    } 
`;
export default QuantityPickerWrapper;