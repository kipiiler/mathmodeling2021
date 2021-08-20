import { Grid } from "@material-ui/core";
import React from "react";
import { apiUrl } from "../config/apiUrl.json";

export default function ImageDisplayer({ images }: any) {
  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[0]
                }")`,
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[1]
                }")`,
                display: images && images[1] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[2]
                }")`,
                display: images && images[2] ? "" : "none",
                minHeight: "400px ",
                border: "12px solid white",
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[3]
                }")`,
                display: images && images[3] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>{" "}
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[4]
                }")`,
                display: images && images[4] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>{" "}
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[5]
                }")`,
                display: images && images[5] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>{" "}
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[6]
                }")`,
                display: images && images[6] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Grid container>
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[7]
                }")`,
                display: images && images[7] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[8]
                }")`,
                display: images && images[8] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[9]
                }")`,
                display: images && images[9] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>{" "}
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[10]
                }")`,
                display: images && images[10] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>{" "}
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[11]
                }")`,
                display: images && images[11] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>
            <Grid
              item
              xs={6}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[12]
                }")`,
                display: images && images[12] ? "" : "none",
                minHeight: "250px ",
                border: "12px solid white",
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              style={{
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundImage: `url("${apiUrl}/Images/${
                  images && images[13]
                }")`,
                display: images && images[13] ? "" : "none",
                minHeight: "400px ",
                border: "12px solid white",
              }}
            ></Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
