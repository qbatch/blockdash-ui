import Styled from "styled-components";
const NftWrapper = Styled.div`
background: ${({ theme }) => theme.colors.surface};
border-radius: 8px;
        .nft-image{
            /* max-height:209px;
            overflow:hidden; */
            img{
                width:100%;
                border-top-left-radius:8px;
                border-top-right-radius:8px;
                object-fit:cover;
                max-height:209px;
            }
        }
        .nft-description {
            padding:11px 10px 12px 15px;
            background: ${(props) => props.background};
            border-radius: 0px 0px 12px 12px;
            .text-percentage{
                margin-right:4px;
            }
            h3{
                font-weight: 300;
                font-size: 13px;
                line-height: 18px;
                letter-spacing: 0.02em;
                color: ${({ theme }) => theme.colors.bodyText};
                margin-bottom:12px;
            }
            .price{
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                text-align: right;
                letter-spacing: 0.04em;
                color: ${({ theme }) => theme.colors.onPrimary};
                img{
                    margin-right:8px;
                }
            }
        }
  `;
export { NftWrapper };
