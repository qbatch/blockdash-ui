import Styled from "styled-components";
const NftWrapper = Styled.div`
background: #151A26;
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
        .nft-description
        {
            padding:16px;
            .text-percentage{
                margin-right:4px;
            }
            h3{
                font-weight: 300;
                font-size: 13px;
                line-height: 18px;
                letter-spacing: 0.02em;
                color: #BFCBD1;
                margin-bottom:12px;
            }
            .price{
                font-weight: 700;
                font-size: 16px;
                line-height: 24px;
                text-align: right;
                letter-spacing: 0.04em;
                color: #EFF2F3;
                img{
                    margin-right:8px;
                }
            }
        }
  `;
export { NftWrapper };
