import { Grid, Typography, Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import { apiUrl } from "../../config/apiUrl.json";
import { convertDate } from '../../utils/dateFormater'

import ScheduleIcon from "@material-ui/icons/Schedule";
import PinDropIcon from "@material-ui/icons/PinDrop";

interface IEvent {
  [key: string]: any;
}

export default function DetailEventSection() {
  const [eventList, setEventList] = useState<IEvent[]>();
  const [filterEventList, setFilterEventList] = useState<IEvent[]>();
  const [selectedEvent, setSelectedEvent] = useState<IEvent>();

  useEffect(() => {
    axios.get(`${apiUrl}/api/event`).then((res) => {
      if (res.data) {
        setEventList(res.data);
      }
    });
  }, []);

  useEffect(() => {
    if (filterEventList) {
      setSelectedEvent(filterEventList[0]);
    }
  }, [filterEventList]);

  useEffect(() => {
    if (eventList) {
      setFilterEventList(
        eventList.filter((event) => event.isBigEvent === true)
      );
    }
  }, [eventList]);

  function EventNav({ name, index }: any) {
    return (
      <Grid
        item
        style={{
          cursor: "pointer",
          borderRight:
            filterEventList && filterEventList?.length - 1 === index
              ? ""
              : "2px solid #1B4D82",
          paddingRight:
            filterEventList && filterEventList?.length - 1 === index ? "0" : 40,
          margin: "0 20px",
        }}
        onClick={() => {
          setSelectedEvent(filterEventList && filterEventList[index]);
        }}
      >
        <Typography
          variant="h3"
          style={{ fontWeight: name === selectedEvent?.name ? 600 : 400 }}
          color={name === selectedEvent?.name ? "secondary" : "textPrimary"}
        >
          {name}
        </Typography>
      </Grid>
    );
  }

  return (
    <>
      <Grid container>
        <Grid container alignItems="center" justifyContent="center">
          {filterEventList?.map((item, index) => (
            <EventNav key={index} name={item.name} index={index} />
          ))}
        </Grid>
        <Grid container style={{ marginBottom: 40 }}>
          <Grid
            item
            xs={12}
            style={{
              height: "auto",
              width: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundImage: `url("${selectedEvent && apiUrl + "/Images/" + selectedEvent?.image
                }")`,
              minHeight: "500px ",
              border: "12px solid white",
              margin: "40px 0 60px 0",
            }}
          ></Grid>
          <Grid item xs={12}>
            <Typography align="left" variant="h2" color="secondary">
              THÔNG TIN SỰ KIỆN
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ margin: "40px 0" }}>
            <Typography align="left" variant="h5" color="textPrimary">
              {selectedEvent?.body}
            </Typography>
          </Grid>
          <Grid container>
            <Grid>
              <Grid container>
                <Grid item style={{ marginRight: 10 }}>
                  <ScheduleIcon style={{ color: "#1B4D82" }} />
                </Grid>
                <Grid item>
                  <Typography>{convertDate(selectedEvent?.dateStart)}</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid >
              <Grid container justifyContent="center" alignItems="center" style={{ marginLeft: 80 }}>
                <Grid item style={{ marginRight: 10 }}>
                  <PinDropIcon style={{ color: "#1B4D82" }} />
                </Grid>
                <Grid item>
                  <Typography>{selectedEvent?.location || "Unknown"}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container>
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
              href={selectedEvent?.signUpLink || "https://www.facebook.com/toanmohinh.hanoi/"}
            >
              <Typography>Đăng kí</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
