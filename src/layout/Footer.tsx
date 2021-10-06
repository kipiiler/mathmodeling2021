import { Button, Grid, Typography, Container } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import NavItem from "../components/Nav/NavItem";
import MathLogo from "../static/mathmodellogo.png";

import ScheduleIcon from "@material-ui/icons/Schedule";
import PinDropIcon from "@material-ui/icons/PinDrop";
import PhoneIcon from "@material-ui/icons/Phone";
import RoomIcon from "@material-ui/icons/Room";
import EmailIcon from "@material-ui/icons/Email";
import axios from "axios";
import { apiUrl } from "../config/apiUrl.json";
import { convertDatewihtMonth } from "../utils/dateFormater";

interface IEvent {
  [key: string]: any;
}

function Footer() {
  const [filteredEvent, setFilteredEvent] = useState<IEvent[]>();
  const [featuredEvent, setFeatureEvent] = useState<IEvent[]>();
  useEffect(() => {
    axios.get(`${apiUrl}/api/event`).then((res) => {
      setFilteredEvent(res.data.filter((e: any) => e.ended === false && e.isBigEvent === true));
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
    <Grid container style={{ background: "#1B4D82", paddingTop: 12 }}>
      <Container>
        <Grid container justifyContent="center">
          <Grid
            item
            xs={12}
            style={{ maxWidth: 1440, paddingTop: 12, paddingBottom: 12 }}
          >
            <Grid container justifyContent="space-between">
              <Grid item xs={4}>
                <Grid container justifyContent="center">
                  <img src={MathLogo} height={120} alt={"logo"} />
                </Grid>
                <br></br>
                <Grid>
                  <Typography
                    variant="h2"
                    style={{
                      fontFamily: "MONTSERRAT",
                      color: "white",
                      fontWeight: 400,
                    }}
                  >
                    MATHMODELING
                  </Typography>
                </Grid>
              </Grid>
              <Grid item xs={8}>
                <Grid container direction="column">
                  <Grid item style={{ marginBottom: "24px" }}>
                    <Grid container justifyContent="space-between">
                      <NavItem link="" fontWeight={300} />
                      <NavItem link="about" fontWeight={300} />
                      <NavItem link="calendar" fontWeight={300} />
                      <NavItem link="event" fontWeight={300} />
                      <NavItem link="gallery" fontWeight={300} />
                      <NavItem link="courses" fontWeight={300} />
                      <NavItem link="faq" fontWeight={300} />
                      <NavItem link="blog" fontWeight={300} />
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Grid
                      style={{ marginTop: "24px" }}
                      container
                      justifyContent="flex-start"
                      alignItems="flex-start"
                    >
                      <Grid item xs={6}>
                        <Typography
                          variant="h2"
                          align="left"
                          style={{ fontWeight: 300, color: "white" }}
                          gutterBottom
                        >
                          {featuredEvent && featuredEvent[0]?.name}
                        </Typography>
                        <Grid container>
                          <Grid item xs={6}>
                            <Grid container alignItems="center">
                              <Grid item xs={2}>
                                <ScheduleIcon style={{ color: "white" }} />
                              </Grid>
                              <Grid item xs={10}>
                                <Typography
                                  align="left"
                                  style={{ color: "white" }}
                                >
                                  {convertDatewihtMonth(
                                    featuredEvent && featuredEvent[0]?.dateStart
                                  )}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                          <Grid item xs={6}>
                            <Grid container alignItems="center">
                              <Grid item xs={2}>
                                <PinDropIcon style={{ color: "white" }} />
                              </Grid>
                              <Grid item xs={10}>
                                <Typography
                                  align="left"
                                  style={{ color: "white" }}
                                >
                                  {(featuredEvent &&
                                    featuredEvent[0]?.location) ||
                                    "Hà Nội"}
                                </Typography>
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Grid container justifyContent="flex-start">
                          <Button
                            variant="contained"
                            style={{
                              boxShadow: "none",
                              paddingRight: 32,
                              paddingLeft: 32,
                              background: "#E13131",
                              marginTop: 8,
                              color: "white",
                            }}
                            href={
                              (featuredEvent && featuredEvent[0]?.signUpLink) ||
                              "https://www.facebook.com/toanmohinh.hanoi/"
                            }
                          >
                            <Typography>Đăng kí</Typography>
                          </Button>
                        </Grid>
                      </Grid>
                      <Grid item xs={6}>
                        <Grid container>
                          <Typography
                            variant="h2"
                            align="left"
                            style={{ fontWeight: 300, color: "white" }}
                            gutterBottom
                          >
                            Liên hệ
                          </Typography>
                        </Grid>
                        <Grid container alignItems="center">
                          <Grid item xs={1}>
                            <RoomIcon style={{ color: "white" }} />
                          </Grid>
                          <Grid item xs={10}>
                            <a
                              style={{ textDecoration: "none" }}
                              target='_blank'
                              href='https://www.facebook.com/toanmohinh.hanoi/'
                            >
                              <Typography
                                align="left"
                                style={{ paddingLeft: 8, color: "white" }}
                              >
                                Fanpage
                              </Typography>
                            </a>
                          </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                          <Grid item xs={1}>
                            <PhoneIcon style={{ color: "white" }} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography
                              align="left"
                              style={{ paddingLeft: 8, color: "white" }}
                            >
                              0855928355
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid container alignItems="center">
                          <Grid item xs={1}>
                            <EmailIcon style={{ color: "white" }} />
                          </Grid>
                          <Grid item xs={10}>
                            <Typography
                              align="left"
                              style={{ paddingLeft: 8, color: "white" }}
                            >
                              toanmohinh@gmail.com
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                style={{
                  borderTop: "1px solid white",
                  marginTop: 32,
                  paddingTop: 32,
                }}
              >
                <Typography style={{ color: "white" }}>
                  Copyright @2021 TOANMOHINH.All rights reserved
                </Typography>
              </Grid>
              <Grid container justifyContent="center">
                <Typography style={{ color: "white" }}>
                  Developed by Buc and Thanh Lee
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default Footer;
