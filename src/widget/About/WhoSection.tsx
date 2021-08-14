import { Grid, Typography } from "@material-ui/core";
import React from "react";
import About1 from "../../static/About1.jpg";
import About2 from "../../static/About2.jpg";

export default function WhoAreWeSection() {
  return (
    <>
      <Grid container justifyContent="space-between" style={{ marginTop: 40 }}>
        <Grid
          item
          xs={5}
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
              maxWidth: "70%",
              fontSize: 32,
              transform: "translateY(-24px)",
            }}
          >
            Chúng tôi là ai
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" variant="h5" color="textPrimary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            itaque nobis porro numquam, eaque quidem nulla. Magnam dicta aliquam
            explicabo cumque temporibus voluptas doloribus voluptates saepe
            illum laboriosam, quidem molestiae.Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Dolorum sapiente repudiandae id
            cupiditate ex vel veritatis corrupti iusto, mollitia minima, ipsum
            magni, amet nulla veniam commodi! Dignissimos, corrupti consectetur.
            Earum!
          </Typography>
        </Grid>
        <Grid
          item
          xs={8}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${About1})`,
            minHeight: "300px",
            border: "12px solid white",
            borderLeft: "none",
          }}
        ></Grid>
        <Grid
          item
          xs={4}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${About2})`,
            minHeight: "300px",
            border: "12px solid white",
            borderRight: "none",
          }}
        ></Grid>
      </Grid>
    </>
  );
}
