import styled from "styled-components";
const ShoppingCardWrapper = styled.div`
.shopping-cart{
  height:calc(100vh - 150px);
  overflow: auto;
  padding-left: 32px;
}
.page-header{
  margin-bottom:32px;
}
.page-title{
  .back-arrow{
    margin-right:18px;
  }
  .icon-left-arrow{
    top:-4px;
  }
}
.table-title{
  margin-top:12px;
}
.table-header-extras{
  .form-label{
    font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
    line-height:12px;
  }
  .field-wrapper{
    position: relative;
    left: -5px;
    top: -2px;
  }
}
.shopping-cart-summary{
  margin-top: 18px;
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.onSurface};
    border: 1px solid ${({ theme }) => theme.colors.secondaryVariant};
    padding: 24px;
    border-radius: 8px;
    margin-bottom: 22px;
    margin-left: 3px;
    .po-summary-details{
      flex-wrap: wrap;
      .summary-col{
        min-width:100px;
      }
    }
    h3{
      font-weight: 700;
      font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
      line-height: 20px;
      color: ${({ theme }) => theme.colors.bodyTextVariant};
      margin-bottom: 18px;
    }
    h4{
      font-weight: 700;
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      line-height: 18px;
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom: 8px;
    }
    p{
      font-weight: 400;
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      line-height: 16px;
      color: ${({ theme }) => theme.colors.bodyText};
      margin-bottom: 0;
      img{
        margin-right: 12px;
      }
    }
    .cart-summary-shipping{
      margin-bottom: 36px;
      p{
        margin-bottom: 0;
        max-width:163px;
      }
    }
    .cart-summary-payment{
      margin-bottom: 28px;
    }
    .cart-summary-order{
        ul{
          li{
            font-weight: 400;
            font-size: ${({ theme }) => theme.colors.baseFontSize};
            line-height: 16px;
            color: ${({ theme }) => theme.colors.labelColor};
            margin-bottom: 10px;
            span{
              float:right;
            }
            strong{
              font-weight: 700;
              span{
                color: ${({ theme }) => theme.colors.onBackground};
              }
            }
          }
        }
    }
    button{
      margin-top:22px;
      margin-bottom: 0;
    }
}
.shoppingcart-header{
  margin-bottom: 24px;
}
.shopping-cart-group{
  margin-bottom: 38px;
}
.shopping-cart-item{
  padding-top:12px;
  padding-bottom: 24px;
  border-bottom:1px solid #EEF1F5;
.title-column{

  .shoppingcart-img{
    margin-right:10px;
  }
  .shoppingcart-remove{
    font-size:14px;
    color:${({ theme }) => theme.colors.accentColorError};
    margin-left: 38px;
    padding-right: 15px;
    margin-top:-2px;
    a{
      i{
        color:${({ theme }) => theme.colors.accentColorError};
      }
    }
  }
}
}
.title-content{
  margin-bottom:24px;
  display:block;
  font-size: ${({ theme }) => theme.colors.baseFontSize};
  line-height:16px;
  color: ${({ theme }) => theme.colors.bodyText};
}
.shopping-cart-details{
  /* gap:10.8%; */
  gap:11.9%;
  li{
    /* margin-right: 10.8%; */
    &:first-of-type{
      text-align:center;
      margin-left: -15px;
      label{
        margin-bottom: 6px;
        margin-left:-15px;
      }
    }
    label{
      font-size: ${({ theme }) => theme.colors.baseFontSizeXs};
      color: ${({ theme }) => theme.colors.labelColor};
      line-height: 12px;
      margin-bottom:13px;
      font-weight:600;
  
    }
    span,strong{
      font-size: ${({ theme }) => theme.colors.baseFontSize};
      line-height: 16px;
      color: ${({ theme }) => theme.colors.bodyText};
    }
    strong{
      font-weight:700;
    }
    &:last-of-type{
      margin-right:0;
    }
  }
}

 
`;
export default ShoppingCardWrapper;