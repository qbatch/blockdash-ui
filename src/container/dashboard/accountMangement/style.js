import styled from "styled-components";
const UpperHeader = styled.div`
.upper-header{
    background: linear-gradient(135deg, #FF0080 0%, #7928CA 100%);
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
        color:#fff;
        font-size:24px;
        letter-spacing: 1px;
        word-spacing: -2px;
        margin-bottom: 4px;
    }
    p{
        color:#BFCBD1;
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
        padding:18px 16px 3px 47px ;
        .list-tab{
            border: 1px solid #485666;
            border-radius: 8px;
            color:#BFCBD1;
            padding:16px;;
            margin-bottom:16px;
            cursor: pointer;
            span:nth-child(1){
                font-size:13px;
            }
            &.border-gradient{
                    border:none;
            }
        }
    }
}
.content-box{
    border-left:1px solid #485666;
    margin-left: 9px;
    .content{
        margin:19px 24px 16px 40px ;
    }
}
`
const  OwnedNftWrapper = styled.div`
padding-top:6px;
.heading{
    color:#fff;
    font-size:32px;
    margin-bottom:24px;
}
.order-list{
    ul{
        display:flex;
        grid-column-gap:8px ;
        margin-top: 6px;
        li{
            background: #030715;
            border-radius: 4px;
            color:#BFCBD1;
            padding:3px 6px;
            border-radius: 4px;
            cursor: pointer;
            &.active{
                background: linear-gradient(90deg, #1976D2 0%, #009470 100%);
                color:#fff ;
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
            color:#BFCBD1;
            font-weight:600;
        }
        span:nth-child(2){
            font-size:9px;
            color: #707C94;
        }
    }
}
`
export {UpperHeader,ContentWrapper,OwnedNftWrapper}