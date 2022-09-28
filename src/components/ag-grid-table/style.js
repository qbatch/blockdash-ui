import Styled from "styled-components";
const GridWrapper = Styled.div`

.QB-dataTable{
    height: ${(props) => `calc(100vh - ${props.height})`};
    font-family: 'Inter';
    padding-top: 0px;
    padding-left: 0px;
    font-family:inter;
    font-weight:400;
}
 .QB-dataTable.drawer-table{
    height: calc(100vh - 766px);
    padding-top: 25px;
    padding-left: 5px;
}
.QB-dataTable .ag-header{
    font-family: 'Inter';
}
.QB-dataTable{
    .ag-root{
        width:100% ; 
    }
    
}
.QB_dataTable .ag-cell{
    border-bottom:1px solid ${({theme}) => theme.colors.secondaryVariant};

}
.QB-dataTable .ag-header-viewport{
    border-bottom:1px solid ${({theme}) => theme.colors.labelColor};
    border-radius: 4px 4px 0px 0px;
}
.QB-dataTable .ag-header-viewport .ag-header-cell{
    color: ${({theme}) => theme.colors.labelColor};
    font-weight: 600;
    font-size: ${({theme})=> theme.colors.baseFontSizeXs};
    line-height: 12px;
    padding: 10px 8px;
    &:first-of-type{
        padding-left:16px;
    }
}
.QB-dataTable .ag-header-viewport .ag-header-cell::after{
    background-color: ${({theme}) => theme.colors.secondaryVariant};
    border-right:none;
}
.QB-dataTable .ag-center-cols-viewport .ag-cell-value{
    font-size: ${({theme})=> theme.colors.baseFontSize};
    line-height: 16px;
    color: ${({theme}) => theme.colors.bodyTextVariant};
    display: flex;
    align-items:flex-start; 
    padding: 0 8px;
    &:first-of-type{
    }
}
.QB-dataTable .ag-center-cols-viewport .ag-cell{
    &:first-of-type{
        .ag-cell-wrapper{
            .ag-cell-value{
                padding-left:16px;
            }
        }
    }
    &:last-of-type{
        .ag-cell-wrapper{
            .ag-cell-value{
                padding-right:18px;
            }
        }
    }
}
.QB-dataTable .ag-center-cols-viewport .ag-cell-wrapper{
    height: auto;
    min-height: 43px;
    border-bottom: 1px solid ${({theme}) => theme.colors.secondaryVariant};
    a{
        color: ${({theme})=> theme.colors.primaryColor};
        text-decoration:none;
    }
}
.QB-dataTable .ag-center-cols-viewport .ag-right-aligned-cell .ag-cell-wrapper .ag-cell-value{
    justify-content:end;
    .icon-right-arrow{
        font-size:10px;
        cursor:pointer;
    }
}

.QB-dataTable  .ag-row-even,
.QB-dataTable  .ag-row-odd,
.QB-dataTable  .ag-row{
    border-bottom-color: ${({theme}) => theme.colors.secondaryVariant};
    background-color:${({theme}) => theme.colors.background};
}

.QB-dataTable  .ag-paging-panel{
background-color: ${({theme}) => theme.colors.surface};
}
.QB-dataTable .ag-paging-button{
    border-left: 1px solid ${({theme}) => theme.colors.secondaryVariant};
    padding: 8px 8px 8px 10px;
    color: ${({theme}) => theme.colors.primaryVariant};
}
.QB-dataTable .ag-paging-button .ag-icon{
    font-weight: bold;
}
.QB-dataTable .ag-tool-panel-wrapper{
    width: 320px;
}
.QB-dataTable .ag-rtl .ag-side-bar-left,
.QB-dataTable .ag-ltr .ag-side-bar-right{
    border: top 1px;

}
`;
export { GridWrapper };
