import React from "react";
import CardItem from "./CardItem";
import { Grid } from "@mui/material";

const StatsCards = () => {
  
  return (
    <>
      <Grid item xs={12} sm={3} md={3}>
        <CardItem
          icon="💰"
          title="Earning"
          value="$2000"
          growth="+$500 (this month)"
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <CardItem
          icon="📦"
          title="Orders"
          value="350"
          growth="+50 (this month)"
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <CardItem
          icon="💳"
          title="Balance"
          value="$1500"
          growth="-$200 (this month)"
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <CardItem
          icon="💵"
          title="Total Sales"
          value="$5000"
          growth="+$1000 (this month)"
        />
      </Grid>
    </>
  );
};

export default StatsCards;
