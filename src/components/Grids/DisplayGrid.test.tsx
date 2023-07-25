import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import DisplayGrid from "./DisplayGrid";
import { useState } from "react";

afterEach(cleanup);

describe("Display grid component is rendered", () => {
  test("Should appears", async () => {
    const columnDefs = [
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
      ];

    const { getByTestId, asFragment } = render(<DisplayGrid rowData= {[]} columnDefs={columnDefs}/>);

    const listNode = await waitFor(() =>
      getByTestId("DisplayGrid-component")
    );
    expect(listNode.children).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });
});
