import { Grid, IconButton, Typography } from "@material-ui/core";
import React from "react";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { apiUrl } from "../config/apiUrl.json";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function MemberCard({ data }: any) {
  return (
    <>
      <Grid item xs={4} style={{ marginBottom: 16 }}>
        <Flippy
          flipOnClick={true}
          flipDirection="horizontal"
          style={{ width: "auto", height: "auto" }}
        >
          <FrontSide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              boxShadow: "none",
            }}
          >
            <Grid container>
              <Grid
                style={{
                  height: "auto",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage:
                    data?.image &&
                    `url("${apiUrl + "/Images/" + data?.image}")`,
                  minHeight: "300px",
                  cursor: "pointer",
                }}
              ></Grid>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ paddingTop: "5%" }}>
                  {data?.name}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1" style={{ paddingTop: "5%" }}>
                  {data?.role}
                </Typography>
              </Grid>
            </Grid>
          </FrontSide>
          <BackSide
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "none",
              flexDirection: "column",
            }}
          >
            <Grid
              container
              alignItems="flex-end"
              style={{
                height: "100%",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage:
                  data?.gif && `url("${apiUrl + "/Images/" + data?.gif}")`,
                minHeight: "300px",
                cursor: "pointer",
              }}
            >
              <Grid item xs={4}>
                <IconButton href={data?.facebookUrl}>
                  <FacebookIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <IconButton href={data?.instagramUrl}>
                  <InstagramIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
              <Grid item xs={4}>
                <IconButton href={data?.linkedInUrl}>
                  <LinkedInIcon style={{ color: "white" }} />
                </IconButton>
              </Grid>
            </Grid>
          </BackSide>
        </Flippy>
      </Grid>
    </>
  );
}
