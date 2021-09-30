import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function CalendarPost({ image, title, body, month, year }: any) {
  return (
    <Grid item xs={4}>
      <Grid style={{ margin: 24 }}>
        <Typography
          align="left"
          variant="h3"
          color="secondary"
          style={{ marginBottom: 12, fontWeight: 500 }}
        >
          Tháng {month} Năm {year}
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
