import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";

import Dashboard from "./Dashboard";
import { getCountByStatus } from "../api/GlaciereAPI";

jest.mock("axios");

jest.mock("api/GlaciereAPI", () => ({
  getCountByStatus: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      data: []
    });
  })
}));

afterEach(cleanup);

describe("Dashboard page is rendered", () => {
  test("Should render Dashboard component", async () => {
    const { getByTestId, asFragment } = render(<Dashboard />);

    const listNode = await waitFor(() =>
      getByTestId("GridDashboard-component")
    );
    expect(listNode.children).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });

  test.only("getCountByStatus should be called", async () => {
    const { getByTestId } = render(<Dashboard />);

    await waitFor(() => getByTestId("GridDashboard-component"));
    expect(getCountByStatus).toBeCalled();
  });
});
