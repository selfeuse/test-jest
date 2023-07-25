/* eslint-disable @typescript-eslint/ban-ts-comment */
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useMemo, useRef } from "react";
import { AgGridReact } from "ag-grid-react";

import { IDisplayGridProps } from "./IDisplayGrid";

export default function DisplayGrid({
  rowData,
  columnDefs
}: IDisplayGridProps) {
  const gridRef = useRef();

  const onBtnExport = useCallback(() => {
    if (gridRef != null) {
      // @ts-ignore
      gridRef?.current?.api.exportDataAsCsv();
    }
  }, []);

  const rowClassRules = useMemo(
    () => ({
      // row style function
      warning: () =>
        // TODO not used yet
        true
    }),
    []
  );

  return (
    <div>
      <div className="ag-theme-alpine">
        <button onClick={onBtnExport}>Download CSV export file</button>
        <div data-testid="DisplayGrid-component">
          <AgGridReact
            rowData={rowData}
            pagination={true}
            paginationPageSize={500}
            // @ts-ignore
            ref={gridRef}
            columnDefs={columnDefs}
            rowClassRules={rowClassRules}
            defaultColDef={{
              resizable: true
            }}
            enableCellTextSelection={true}
          ></AgGridReact>
        </div>
      </div>
    </div>
  );
}
