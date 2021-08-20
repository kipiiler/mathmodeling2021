import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function CalendarPost({ image, title, body, month }: any) {
  return (
    <Grid xs={4}>
      <Grid style={{ margin: 24 }}>
        <Typography
          align="left"
          variant="h3"
          color="textPrimary"
          style={{ marginBottom: 12 }}
        >
          Tháng {month}
        </Typography>
        <Grid
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("${image}")`,
            minHeight: "300px",
          }}
        ></Grid>
        <Grid>
          <Typography
            align="left"
            gutterBottom
            variant="h3"
            color="textPrimary"
            style={{ marginTop: 12 }}
          >
            {title}
          </Typography>
        </Grid>
        <Typography align="left" color="textPrimary">
          {body.slice(0, 500)}
        </Typography>
      </Grid>
    </Grid>
  );
}
