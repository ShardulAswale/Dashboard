import SideNavbar from "./SideNavbar";
import { Grid, Typography } from "@mui/material";
import WidgetComp from "./WidgetsComp";
import StatsCards from "./StatsCards/StatsCards";

const Dashboard = () => {
  return (
    <Grid
      container
      style={{
        minHeight: "100vh",
        margin: -8,
        width: "100vw",
        height: "100vh",
      }}
    >
      <Grid
        item
        xs={12}
        md={2}
        style={{
          backgroundColor: "#1976D2",
        }}
      >
        <Typography align="center" style={{ color: "#fff", padding: "16px" }}>
          Dashboard logo
        </Typography>
        <SideNavbar />
      </Grid>
      <Grid
        item
        xs={12}
        md={10}
        style={{ background: "#F5F5F5", padding: "16px", minHeight: "100vh" }}
      >
        <Grid container spacing={3}>
          {/* {Array(9)
            .fill()
            .map((_, index) => (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <WidgetComp />
              </Grid>
            ))} */}
          <StatsCards />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
