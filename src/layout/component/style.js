import Styled from 'styled-components';
import { ProSidebar } from 'react-pro-sidebar';
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
    padding-top: 52px;
    height: 100vh;
    overflow: hidden;
	display:flex ;
	.dashboard-top-space{
	padding-top:32px!important;
	padding-bottom:0!important;
}
`;
const HeaderWrappper = Styled.div`
 height: 52px;
 background-color: ${({ theme }) => theme.colors.primaryColor};  
 position: fixed;
 width:100%;
 z-index:99;
 /* padding:0px 12px; */
 padding: 0px 36px 0px 12px;
 .header-wrapper{
	 width:100%;
	.header-logo {
		font-size: ${({ theme }) => theme.colors.baseFontSizeLg};
		font-weight: 700;
		line-height: 30px;
		letter-spacing: 0px;
		text-align: left;
		color: ${({ theme }) => theme.colors.onPrimary};
		/* margin-left:24px; */
		margin-left:52px;
		letter-spacing: -1px;
	}
	button#dropdown-basic {
	    width: 34px;
		border-radius: 40px;
		height: 34px;
		background:${({ theme }) => theme.colors.onPrimary};
		color: ${({ theme }) => theme.colors.primaryColor};
		font-size: ${({ theme }) => theme.colors.baseFontSize};;
		border: none;
		&::after{
			display:none;
		} 
		.drop-icon {
			position: absolute;
			top: 22px;
			right: 0;
		}
	}
 }
`;
export { Content, SidebarWrapper, HeaderWrappper };
