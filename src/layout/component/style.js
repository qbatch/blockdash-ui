import Styled from "styled-components";

const Content = Styled.div`
    width: 100%;
    /* padding-top: 28px; */
	padding-top: 20px;
    /* height: 100vh; */
    /* overflow: hidden;
	display:flex ; */
	.dashboard-top-space{
		padding-left:35px;
		padding-right:35px;
		.dashboard-content {
			.MuiContainer-root {
			padding-left: 0;
			padding-right: 0%;
			}
  }
}

`;
const HeaderWrappper = Styled.div`
height:auto;
 /* background-color: ${({ theme }) => theme.colors.primaryColor};   */
 background-color: #000000;  
 /* position: fixed; */
 width:100%;
 z-index:99;
 /* padding:0px 12px; */
 padding: 20px 24px 20px 35px;
 .header-wrapper{
	 width:100%;
	.header-logo {
		font-size: ${({ theme }) => theme.colors.baseFontSizeLg};
		font-weight: 700;
		line-height: 30px;
		letter-spacing: 0px;
		text-align: left;
		color: ${({ theme }) => theme.colors.onPrimary};
		letter-spacing: -1px;
	}
	.header-menu{
		list-style:none;
		gap:32px;
		li{
			a{
			font-weight: 300;
			font-size: 13px;
			line-height: 18px;
			letter-spacing: 0.02em;
			color: #707C94;
			display:block;
			&:after{
				content:'';
				display:block;
				margin-top:4px;
				width:100%;
				height:2px;
				background-color:#000000;
				transition: 0.3s all ease-in;
			}
			&:hover{
				&:after{
					background-color:#019371;
				}
				color:#019371;
			}
			}
			&:hover{
				a{
				color:#019371;
				&:after{
					background-color:#019371;
				}
			}
			}
		}
	}
	button#dropdown-basic {
	    width: 34px;
		border-radius: 40px;
		height: 34px;
		background:${({ theme }) => theme.colors.onPrimary};
		color: ${({ theme }) => theme.colors.primaryColor};
		font-size: ${({ theme }) => theme.colors.baseFontSize};;
		border: none;
		padding:0;
		img{
			width:100%;
		}
		&::after{
			display:none;
		} 
		.drop-icon {
			position: absolute;
			top: 22px;
			right: 0;
		}
	}
	.header-links{
		ul{
			display:flex;
			gap:29px;
			align-items:center;
			li{
				a{
					i{
						font-size:16px;
						color:${({theme})=> theme.colors.secondaryColor};
						position:relative;
						&.icon-bell{
							&:after{
								content:'';
								position:absolute;
								width:5px;
								height:5px;
								background:${({theme})=> theme.colors.accentColorError};
								border-radius:55px;
								right: 1px;
							}
						}
					}
				}
				img{
					border-radius:55%;
					cursor:pointer;
				}
			}
		}
	}
 }
`;
const FooterWrapper = Styled.div`
background: #030715;
box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
backdrop-filter: blur(13.5914px);
padding-left:35px;
padding-right:35px;
font-weight: 300;
font-size: 13px;
line-height: 18px;
letter-spacing: 0.02em;
color: #6B7891;
padding-top:12px;
padding-bottom:32px;
margin-top:20px;
p{
	margin-bottom:0;
}
.footer-menu{
	gap:32px;
	li{
		a{
			font-weight: 300;
			font-size: 13px;
			line-height: 18px;
			letter-spacing: 0.02em;
			color: #6B7891;
		}
	}
}
`;
export { Content, HeaderWrappper, FooterWrapper };
