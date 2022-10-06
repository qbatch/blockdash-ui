import Styled from "styled-components";
import { ProSidebar } from "react-pro-sidebar";
const SidebarWrapper = Styled(ProSidebar)`
	color: ${({ theme }) => theme.colors.bodyText};
	height:100vh;
    height: calc(100vh - 52px);
    overflow: auto;
	z-index:9; 
	.pro-sidebar-inner {
		background:${({ theme }) => theme.colors.secondaryColor};
	}
	.pro-menu {
		padding-top:0;
		padding-bottom:0;
		.pro-menu-item {
			.pro-inner-item {
				padding:9px 8px;
				font-size:14px;
				font-weight:400;
				color:${({ theme }) => theme.colors.bodyText};
				cursor: pointer;
				.pro-icon-wrapper{
					font-size:16px;
				}
				&:after{
					content: '';
					background-color:${({ theme }) => theme.colors.secondaryVariant};
					bottom: 0;
					height: 1px;
					position: absolute;
					width: calc(100% - 24px);
					transition: 0.3s all ease-in-out;
					left:12px;
				}
				&:hover,&:focus {
					color: ${({ theme }) => theme.colors.primaryColor};
					background-color:${({ theme }) => theme.colors.onPrimary};
					.pro-item-content{
						&:after{
						background-color:${({ theme }) => theme.colors.primaryColor};
						width: 100%;
						left: 0;
						transition: 0.3s all ease-in-out;
					}
					}
					
					.pro-icon-wrapper{
						.pro-icon
						{
							    animation:none;
						}
					}
				}
				
				
			}
				&.active {
				color: ${({ theme }) => theme.colors.primaryColor};
				.pro-inner-item{
					color: ${({ theme }) => theme.colors.primaryColor};
				}
			}
			&.pro-sub-menu{
				.pro-inner-list-item{
						padding-left:40px;
						ul{
							padding-top:0;
							padding-bottom:0;
							li{
								
							}
						}
					.pro-menu-item{
							.pro-item-content{
										&:before{
											content:'';
											height:70%;
											width:1px;
											position: absolute;
											left:-8px;
											top:7px;
											display:none;
											background-color:${({ theme }) => theme.colors.primaryColor};
										}
							}
							&:hover,
							&.active{
								.pro-item-content{
									&:before{
										display:block;
									}
								}
							}
					}
					}
					&.open{
					position:relative;
					.pro-inner-item{
						background-color: ${({ theme }) => theme.colors.onPrimary};
						&:after{
							display: none;
						}
					}
					&:after{
					}
					.pro-inner-list-item{
						.pro-menu-item{
							&:hover,
							&:focus,
							&.active{
								.pro-item-content{
									&:before{
										left:0;
									}
								}
							}	
							
						}
					}

					
				}
			}
		}
		ul {
			.pro-sub-menu {
				.pro-inner-list-item {
					background-color: ${({ theme }) => theme.colors.onPrimary};
				}
			}
		}
		a {
			&:hover {
				color: ${({ theme }) => theme.colors.primaryColor};
			}
		}
		
	}
	&.collapsed {
		width: 52px;
		min-width:52px;
		.pro-menu {
			ul {
				.pro-menu-item {
					.pro-inner-list-item {
						background-color: ${({ theme }) => theme.colors.onPrimary};
						.pro-menu-item{
							&:hover,
							&.active{
								.pro-item-content{
									&:before{
										/* display: none; */
									}
								}
							}	
							
						}
					}
						
					&.pro-sub-menu{
						&:hover{
							.pro-inner-item{
								background-color: ${({ theme }) => theme.colors.onPrimary};
								&:after{
									background-color:${({ theme }) => theme.colors.primaryColor};
									width: 100%;
									left: 0;
									transition: 0.3s all ease-in-out
								}
							}
							.pro-icon-wrapper{
								color: ${({ theme }) => theme.colors.primaryColor};
								.pro-icon{
									animation: none;
								}
							}
						}
						&.open{
							.pro-inner-list-item{
								.pro-menu-item{
									&:hover,
									&.active{
										.pro-item-content{
											&:before{
												left:-8px;
											}
										}
									}	
									
								}
							}

							
						}
				}
				}
				 .pro-menu-item.pro-sub-menu {
					.pro-inner-list-item {
						.popper-inner {
							background-color:${({ theme }) => theme.colors.onPrimary};
							box-shadow:${({ theme }) => theme.colors.boxShadow};
							padding: 12px 24px;
							.pro-inner-item{
								&:after{
									display:none;
								}
							}
						}
					}
				}
			}
		}
		
	}


/* .react-slidedown {
  height: 0;
  transition-property: none;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out; } */
 
`;

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
export { Content, SidebarWrapper, HeaderWrappper, FooterWrapper };
