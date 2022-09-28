import Styled from 'styled-components';
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
const DrawerWrapper = Styled(Drawer)`
 width: 874px!important;
 padding-top:22px;
 padding-left:26px;
 padding-right:26px;
 padding-bottom:26px;
 overflow-x: hidden;
 &.drawer-sm{
    width:620px!important;
    padding-left:24px;
    padding-right:24px;
    .drawer-header{
      margin-bottom:28px;
    }
    .page-title{
      font-size:16px;
      .icon-back{
        font-size: 8px;
        top: -2px;
      }
    }
    &.drawer-shoppingcart{
    width:666px!important;
  }
  }
 &.drawer-fullwidth{
   width:100%!important;
 }
 .drawer-header{
  margin-bottom:45px;
 }
 .page-title{
  margin-bottom:0;
  .icon-back{
    font-size:10px;
    color:${({theme})=> theme.colors.primaryColor};
    position: relative;
    top:-4px;
  }
 }
    .cross-icon{
        cursor:pointer;
        margin-right:10px;
    }
    .drawer-bottom{
      padding-top:60px;
      grid-column-gap:36px;
    }
    .drawer-buttons{
      ul{
        li{
          display:inline-block;
          margin-right:18px;
          button{
            margin-bottom:0;
            padding: 7px 23px;
          }
          &:last-of-type{
            margin-right:0;
          }
        }
      }
    }
  `;
export { DrawerWrapper };
