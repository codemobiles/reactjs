import React from "react";
import Card from "@material-ui/core/Card";
import { Typography, Grid } from "@material-ui/core";

export default function StockCard() {
  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h4" color="textPrimary">
            Title
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Subtitle
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <h3>Title</h3>
        </Grid>
      </Grid>
    </Card>
  );
}
