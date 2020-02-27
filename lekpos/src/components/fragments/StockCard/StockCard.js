import React from "react";
import Card from "@material-ui/core/Card";
import { Typography, Grid } from "@material-ui/core";

export default function StockCard(props) {
  return (
    <Card>
      <Grid container spacing={3}>
        <Grid item style={{ flexGrow: 1 }}>
          <Typography variant="h4" color="textPrimary">
            {props.title}
          </Typography>
          <Typography variant="h5" color="textSecondary">
            {props.subtitle}
          </Typography>
        </Grid>

        <Grid
          item
          style={{
            backgroundColor: props.color,
            color: "white",
            display: "flex",
            minWidth: 70,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {React.createElement(props.icon, { fontSize: "large" })}
        </Grid>
      </Grid>
    </Card>
  );
}
