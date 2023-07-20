import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "@pages/Dashboard";
import { getCountByStatus } from "@api/GlaciereAPI";
import { screen } from "@testing-library/dom";

jest.mock("@components/Grids/GridDashboard/GridDashboard", () => () => {
	const component =  <>GridDashboard component</>;
    return component;
});

jest.mock("axios");

jest.mock("@api/GlaciereAPI", () => ({
  getCountByStatus: jest.fn().mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      data: []
    });
  })
}));



describe("Dashboard page", () => {
    afterEach(cleanup);
    it("should display GridDashboard component", () => {
        render(<Dashboard />);
        expect(screen.getByText("GridDashboard component")).toBeInTheDocument();
    })
  it("should render Dashboard component", async () => {
    const { getByTestId, asFragment } = render(<Dashboard />);

    const listNode = await waitFor(() =>
      getByTestId("GridDashboard-component")
    );
    expect(listNode.children).toHaveLength(1);
    expect(asFragment()).toMatchSnapshot();
  });

//   test.only("getCountByStatus should be called", async () => {
//     const { getByTestId } = render(<Dashboard />);

//     await waitFor(() => getByTestId("GridDashboard-component"));
//     expect(getCountByStatus).toBeCalled();
//   });
});
