import styled from "styled-components";
const UpperHeader = styled.div`
.upper-header{
    background:${({ theme }) => theme.colors.gradient};
    height: 192px;
    width:100%;
    border-radius: 12px 12px 0px 0px;
}
.header-info{
    margin-left: 25px;
    margin-right: 26px;
    margin-top:-68px;
    border-radius: 12px;
    padding:24px 22px 25px 22px;
    .user-info{
        padding-left: 25px;
        padding-top: 7px;
        h6{
        color: ${({ theme }) => theme.colors.whiteColor};
        font-size:24px;
        font-size:${({ theme }) => theme.colors.fslg};
        letter-spacing: 1px;
        word-spacing: -2px;
        margin-bottom: 4px;
    }
    p{
        color:${({ theme }) => theme.colors.bodyText};
        font-size:13px ;
        max-width:350px;
    }
    }
   
}

`
const ContentWrapper = styled.div`
.main-content{
    border-radius:12px;
    margin-top: 38px;
    .sidebar-list{
        padding:18px 16px 19px 47px ;
        .list-tab{
            border: 1px solid #485666;
            border-radius: 8px;
            color:${({ theme }) => theme.colors.bodyText};
            padding:16px;;
            margin-bottom:16px;
            cursor: pointer;
            span:nth-child(1){
                font-size:13px;
            }
            &.border-gradient{
                    border:none;
                    span{
                    color: ${({ theme }) => theme.colors.whiteColor};
            }
                    
            }
        }
    }
}
.content-box{
    border-left:1px solid #485666;
    margin-left: 9px;
    .content{
        margin:19px 24px 16px 40px ;
        /* height:calc(100vh - 500px); */
        /* overflow:auto ; */
    }
}
`
const  AccountMangementWrapper = styled.div`
padding-top:6px;
.heading{
    color: ${({ theme }) => theme.colors.whiteColor};
    font-size:32px;
    margin-bottom:24px;
    letter-spacing: 0.02em;
}
.order-list{
    ul{
        display:flex;
        grid-column-gap:8px ;
        margin-top: 6px;
        li{
            background: #030715;
            border-radius: 4px;
            color:${({ theme }) => theme.colors.bodyText};
            padding:3px 6px;
            border-radius: 4px;
            cursor: pointer;
            &.active{
                background: linear-gradient(90deg, #1976D2 0%, #009470 100%);
                color: ${({ theme }) => theme.colors.whiteColor};
            }

        }
    }
}
.wallet-box{
    display:flex ;
    border-radius: 12px;
    padding:30px 28px;
    align-items:center ;
    .wallet-info{
        padding-left:27px;
        span:nth-child(1){
            font-size:16px;
            color:${({ theme }) => theme.colors.bodyText};
            font-weight:600;
        }
        span:nth-child(2){
            font-size:9px;
            color: #707C94;
        }
    }
}
.billing-details{
    background:linear-gradient(90deg, #1976D2 0%, #009470 100%);
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.whiteColor};
    margin-right: 20px;
    h1{
        font-size:32px ;
        margin-top: 3px;
    }
    .month{
        margin-left:0 ;
        font-size: 11px;
        margin-top: 8px;
        padding-left: 6px;
    }
    .billing-date{
        font-size:13px;
        word-spacing: 2px;
        margin-top: 6px;
    }
    p{
        margin-top: 10px;
    margin-bottom: 0;
    font-size: 13px;
    letter-spacing: 0.02em;

    }
}
.payement-heading{
    letter-spacing: 0.04em;
    margin-bottom:0;
}
.flow-check{
    color: ${({ theme }) => theme.colors.accentColorError};  
    font-size:12px;
    position:absolute ;
    left: 29%;
    letter-spacing: 0.02em;
}
.payment-card{
    background: ${({ theme }) => theme.colors.background}; 
    min-width:282px;
    .check-icon{
        background:linear-gradient(90deg, #1976D2 0%, #009470 100%);
        border-radius:50%;
        width:16px;
        height:16px;
        text-align:center;
        svg{
            color: ${({ theme }) => theme.colors.background};   
        }
   
    }  
    .card-info{
            padding-left:9px ;
            span:nth-child(2){
                color: ${({ theme }) => theme.colors.labelColor}; 
                padding-top:7px ;
                font-size:9px;
                svg{
                    margin-left:12px;
                    font-size:12px;
                    color: ${({ theme }) => theme.colors.primaryColor}; 
                }
            }
        }
        &.add-card{
            margin-left: 24px;
            min-height: 109px;
            cursor:pointer ;
            .add-icon{
                width:24px;
                height:24px;
                background-color:#485666;
                border-radius:50px;
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
    
}
.card-status{
            font-size:9px ;
            color: ${({ theme }) => theme.colors.accentColorWarning}; 
            letter-spacing: 0.02em;
            position:absolute;
            bottom: -14px;
        }
        .copy-url{
            .free-wallet{
                font-size: ${({ theme }) => theme.colors.baseFontSizeSm};
                color: ${({ theme }) => theme.colors.bodyText};
                padding-left: 103px;
                span{
                    color: ${({ theme }) => theme.colors.whiteColor}; 
                    font-weight:600;
                }
            }
        }
        .user-info{
            margin-top:-14px;
            div{
                min-width:290px;
                color: ${({ theme }) => theme.colors.bodyText}; 
                margin-bottom:0;
                span:nth-child(1){
                    padding-bottom:16px;
                }
                p{
                    min-height:40px ;
                    margin-bottom:0 ;
                    border:1px solid transparent;
                    padding:12.4px 0px
                }
            }
            .MuiInputBase-root{
                .MuiOutlinedInput-input {
                font-size:13px;
                height:40px;
                padding:0 16px;
                }
             
            }
        }
        .add-bio{
            color: ${({ theme }) => theme.colors.bodyText}; 
            .bio{
                    padding-bottom:16px;
                }
            p{
                min-height:40px ;  
                margin-bottom:0 ;
                border:1px solid transparent;
                padding:12.4px 0;
            }
        }
        .profile-divder{
            border-color:#707070 ;
            margin-top:47px;
        }
`
export {UpperHeader,ContentWrapper,AccountMangementWrapper}