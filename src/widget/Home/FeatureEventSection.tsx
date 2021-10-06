import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

import ScheduleIcon from "@material-ui/icons/Schedule";
import PinDropIcon from "@material-ui/icons/PinDrop";

import { convertDate } from "../../utils/dateFormater";

import Home1 from "../../static/Home1.jpg";
import Home2 from "../../static/Home2.jpg";
import Home3 from "../../static/Home3.JPG";
import Home4 from "../../static/Home4.jpg";

export default function FeatEvent({ detail, time, location, name, link }: any) {
  return (
    <>
      <Grid container style={{ marginTop: 60 }}>
        <Grid item xs={6} style={{ paddingRight: 48 }}>
          <Grid container>
            <Grid
              item
              xs={8}
              style={{
                backgroundColor: "#E8ECF1",
                margin: 16,
                marginLeft: 0,
                borderRadius: 8,
              }}
            >
              <Typography
                variant="h2"
                align="left"
                color="secondary"
                style={{
                  maxWidth: name?.length < 7 ? "60%" : "none",
                  fontSize: 40,
                  transform: "translateY(-24px)",
                }}
              >
                {name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align="left" color="textPrimary">
                {detail}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                backgroundColor: "#E8ECF1",
                marginTop: 16,
                marginBottom: 16,
                padding: "20px 0",
                borderRadius: 8,
              }}
            >
              <Grid container justifyContent="center">
                <Grid item xs={4}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={2}>
                      <ScheduleIcon style={{ color: "#1B4D82" }} />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>{convertDate(time)}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={2}>
                      <PinDropIcon style={{ color: "#1B4D82" }} />
                    </Grid>
                    <Grid item xs={9}>
                      <Typography>{location}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Button
                  variant="contained"
                  style={{
                    boxShadow: "none",
                    paddingRight: 32,
                    paddingLeft: 32,
                    background: "#1B4D82",
                    marginTop: 8,
                    color: "white",
                  }}
                  href={link || "https://www.facebook.com/toanmohinh.hanoi/"}
                >
                  <Typography>Đăng kí</Typography>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              xs={6}
              style={{
                border: "12px solid white",
                height: "200px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${Home4})`,
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "200px",
                border: "12px solid white",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${Home2})`,
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "200px",
                backgroundRepeat: "no-repeat",
                border: "12px solid white",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${Home3})`,
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "200px",
                backgroundRepeat: "no-repeat",
                border: "12px solid white",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url(${Home1})`,
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
