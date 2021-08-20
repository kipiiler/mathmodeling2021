import { Grid, Typography } from "@material-ui/core";
import React from "react";

export default function FounderCardDisplay({ data }: any) {
  return (
    <Grid
      container
      alignItems="center"
      style={{
        marginTop: 40,
        height: "auto",
        backgroundRepeat: "no-repeat",
        padding: "30px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png")`,
        minHeight: "250px",
      }}
    >
      <Grid container style={{ height: "initial" }}>
        <Grid item xs={3}>
          <Typography align="left" variant="h4" color="textSecondary">
            THÔNG TIN CÁ NHÂN
          </Typography>
        </Grid>
        <Grid item xs={9} style={{ borderBottom: "1px solid white" }}></Grid>
      </Grid>
      <Grid container style={{ marginTop: 16 }}>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" color="textSecondary">
            Họ và tên: {data.name}
          </Typography>
          <Typography
            align="left"
            variant="h5"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            Năm sinh: {data.dob}
          </Typography>
          <Typography
            align="left"
            variant="h5"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            Quê quán: {data.hometown}
          </Typography>
          <Typography
            align="left"
            variant="h5"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            Học vấn: {data.education}
          </Typography>
          <Typography
            align="left"
            variant="h5"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            Công việc hiện tại: {data.currentJob}
          </Typography>
          <Typography
            align="left"
            variant="h5"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            Thời gian chính trong Toán Mô hình: {data.mathmodeling}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" color="textSecondary">
            Fav.Quote {data.favquote}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
