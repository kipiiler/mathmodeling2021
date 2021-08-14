import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";

export default function CountDown({ name, time }: any) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  // const now = new Date().getTime();
  const countDownDate = new Date(time).getTime();
  // let distance = countDownDate - now;

  useEffect(() => {
    var x = setInterval(function () {
      var now = new Date().getTime();

      var distance = countDownDate - now;
      setDay(Math.floor(distance / (1000 * 60 * 60 * 24)));
      setHour(
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMin(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      setSec(Math.floor((distance % (1000 * 60)) / 1000));

      if (distance < 0) {
        clearInterval(x);
        setIsEnded(true);
      }
    }, 1000);
  }, []);

  return (
    <Grid
      style={{
        height: "auto",
        backgroundRepeat: "no-repeat",
        padding: "30px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png")`,
        minHeight: "200px",
      }}
    >
      <Grid container>
        <Typography variant="h3" color="textSecondary">
          Sự kiện sắp tới
        </Typography>
      </Grid>
      <Grid container justifyContent="center">
        <Typography
          variant="h2"
          color="textSecondary"
          style={{ fontSize: "40px", margin: "50px 0 20px 0" }}
        >
          {name}
        </Typography>
      </Grid>
      <Grid container justifyContent="center" style={{ width: "100%" }}>
        {!isEnded ? (
          <>
            <Typography
              align="center"
              variant="h1"
              style={{ fontSize: "40px" }}
              color="textSecondary"
            >
              {day} ngày : {hour} giờ : {min} phút : {sec} giây
            </Typography>
          </>
        ) : (
          <Typography
            align="center"
            variant="h1"
            style={{ fontSize: "40px" }}
            color="textSecondary"
          >
            Expired
          </Typography>
        )}
      </Grid>
      <Grid container justifyContent="center" style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary">
          <Typography>Đăng kí</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
