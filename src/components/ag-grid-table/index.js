import React from "react";
import { AgGridReact } from 'ag-grid-react';

import { GridWrapper } from "./style";
import 'ag-grid-community/dist/styles/ag-grid.css';

const Index = (props) => {
  const {
    gridReady,
    defaultColDef,
    headerHeight,
    columnDefinitions,
    user_referrals,
    sidebarOpen,
    height,
    rowHeight,
    onSortChange,
    className
  } = props;

  return (
    <GridWrapper height={height} className={className}>
      <div className={`ag-theme-balham QB-dataTable`}  >
        <AgGridReact
          reactNext={true}
          onGridReady={gridReady}
          deltaRowDataMode={false}
          animateRows={true}
          defaultColDef={defaultColDef}
          columnDefs={columnDefinitions}
          headerHeight={headerHeight}
          onSortChanged={onSortChange}
          rowData={user_referrals}
          rowHeight={rowHeight}
          enableCellTextSelection={true}
          getRowNodeId={({ id }) => id}
          pagination={false}
          sideBar={sidebarOpen ? "columns" : false}
          enableRangeSelection={true}
          suppressRowClickSelection={true}
          suppressScrollOnNewData={true}
          paginationPageSize={10}
        />
      </div>
    </GridWrapper>
  );
};
export default Index;
