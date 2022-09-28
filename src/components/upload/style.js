import Styled from 'styled-components';

const UploadWrapper = Styled.div`
    /* padding-left: 42px;
    padding-right: 33px; */
    padding-left:0px;
    padding-right:0;
    max-width:612px;
    margin: 0 auto;
.input-type{
    position: relative;
    input{
        position: absolute;
        opacity: 0;
        width: 100%;
        height: 100%;
    }
    input[type="file"] {
         cursor: pointer;
    }
    .uploaded-image-desc{
        font-size: ${({theme})=> theme.colors.baseFontSizeXs};
        color: ${({theme})=> theme.colors.labelColor};
    }
    
}
.upload-file{
    border: 1px dashed ${({theme})=> theme.colors.secondaryVariant};;
    border-radius: 12px;
    padding:26px 20px;
    margin-bottom:19px;
    cursor: pointer;
    .upload{
        .icon-upload{
            font-size:30px;
            color:${({theme})=> theme.colors.primaryColor};
        }
        span:nth-child(2){
            font-size: ${({theme})=> theme.colors.baseFontSize};
            font-weight:400;   
            color:black;
            font-family:inter;
            margin-top: 13px;
            margin-bottom: 6px;
        }
        span:nth-child(3){
            font-size: ${({theme})=> theme.colors.baseFontSizeXs};
            line-height:12px;
            font-weight:600;
            color:${({theme})=> theme.colors.labelColor};
        }
    }

    .divider{
          display: flex;
          color: ${({theme})=> theme.colors.bodyTextVariant};
          font-weight: 500;
          font-size: ${({theme})=> theme.colors.baseFontSize};
          line-height:16px;
          white-space: nowrap;
          text-align: center;
          border-top: 0;
          border-top-color: #0000000f;
          clear: both;
          max-width: 236px;
          margin:0 auto;
          width:100%;
          margin-top:14px;
          margin-bottom:14px;
            &::before{
              position: relative;
            top: 50%;
            width: 50%;
            right:8px;
            border-top: 1px solid transparent;
            border-top-color: inherit;
            border-bottom: 0;
            transform: translateY(50%);
            content: "";
            }
              &::after{
              position: relative;
              top: 50%;
              width: 50%;
              left:8px;
              border-top: 1px solid transparent;
              border-top-color: inherit;
              border-bottom: 0;
              transform: translateY(50%);
              content: "";
                  }
                  .inner-text{
                    font-size: ${({theme})=> theme.colors.baseFontSizeXs};
                  }
              }
              button{
                max-width: 119px;
                width: 100%;
                padding: 7px 22px;
                font-size: 13px;
                line-height: 16px;
                margin-left: 3px;
                margin-bottom:0;
              }
              &.upload-progress{
                margin-top:76px;
                .progressbar{
                    width: 120px;
                    height: 120px;
                    margin: 0 auto;
                    margin-top:-4px;
             
                    .CircularProgressbar{
                        .CircularProgressbar-text{
                            font-size: ${({theme})=> theme.colors.baseFontSizeLg};
                            font-weight:700;
                            line-height:29.05px;
                            font-family:inter;
                            transform:translate(4px, 3px);
                            letter-spacing:-1px;
                        }
                    }
                }
                .progress-status{
                        font-size: ${({theme})=> theme.colors.baseFontSize};
                        line-height:16px;
                        color:${({theme})=> theme.colors.onSurface};
                        margin-top:16px;
                        margin-bottom:0;
                        text-align:center;
                    }
              }
}
`
export { UploadWrapper }
