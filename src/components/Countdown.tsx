import { Button, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import BackgroundCool from "../static/BackgroundCool.svg";
import { apiUrl } from "../config/apiUrl.json";

interface IEvent {
  [key: string]: any;
}

export default function CountDown() {
  const [filteredEvent, setFilteredEvent] = useState<IEvent[]>();
  const [featuredEvent, setFeatureEvent] = useState<IEvent[]>();
  useEffect(() => {
    axios.get(`${apiUrl}/api/event`).then((res) => {
      setFilteredEvent(res.data.filter((e: any) => e.ended === true));
    });
  }, []);

  useEffect(() => {
    if (filteredEvent) {
      setFeatureEvent(
        filteredEvent.sort(function compare(a: any, b: any) {
          var dateA: any = new Date(a.dateStart);
          var dateB: any = new Date(b.dateStart);
          return dateB - dateA;
        }))
    }
  }, [filteredEvent])

  return (
    <>
      <ClockElement
        name={featuredEvent && featuredEvent[0].name}
        time={featuredEvent && featuredEvent[0].dateStart}
        link={featuredEvent && featuredEvent[0].signUpLink}
      />
    </>
  );
}

function ClockElement({ name, time, link }: any) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  const [isEnded, setIsEnded] = useState(false);

  const countDownDate = new Date(time).getTime();

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
    return () => {
      clearInterval(x);
    };
  });

  return (
    <Grid
      style={{
        height: "auto",
        backgroundRepeat: "no-repeat",
        padding: "30px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url("${BackgroundCool}")`,
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
      <Grid
        container
        justifyContent="center"
        style={{ marginTop: 20, marginBottom: 60 }}
      >
        <Button variant="contained" color="primary" href={link} disabled={!link?.length}>
          <Typography>Đăng kí</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
