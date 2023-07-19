/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import DisplayGrid from "../DisplayGrid";
import { IGlaciereDashboard } from "../../../data/IGlaciere";

export default function GridDashboard(props: {
  statusData: IGlaciereDashboard[];
}) {
  const [rowData, setRowData] = useState<IGlaciereDashboard[]>([]);

  useEffect(() => {
    if (props.statusData?.length > 0) {
      setRowData([]);

      props.statusData.forEach((g: any) => {
        const elmt: IGlaciereDashboard = {
          count: g.Count
        };

        setRowData((prev) => [...prev, elmt]);
      });
    }
  }, [props.statusData]);

  const [columnDefs] = useState([
    {
      headerName: "Count of glacieres by status",
      children: [
        {
          headerName: "Status",
          field: "status",
          sortable: true,
          filter: true
        },
        {
          headerName: "Count",
          field: "count",
          sortable: true,
          filter: true
        }
      ]
    }
  ]);

  return (
    <>
      <DisplayGrid rowData={rowData} columnDefs={columnDefs} />
    </>
  );
}
