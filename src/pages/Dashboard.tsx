import { useEffect, useState } from "react";
import { IGlaciereDashboard } from "../data/IGlaciere";
import GridDashboard from "../components/Grids/GridDashboard/GridDashboard";

import { getCountByStatus } from "api/GlaciereAPI";

export default function Dashboard() {
  const [statusData, setStatusData] = useState<IGlaciereDashboard[]>([]);

  useEffect(() => {
    getCountByStatus().then((result) => {
      if (!result.error) {
        setStatusData(result);
      }
    });
  }, []);

  return (
    <div data-testid="GridDashboard-component">
      <GridDashboard statusData={statusData} />
    </div>
  );
}
