import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../config/apiUrl.json";

export default function BlogPreview({ id, title, body, image }: any) {
  return (
    <>
      <Grid container alignItems="center" style={{ marginTop: 40 }}>
        <Grid
          item
          xs={4}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("${apiUrl + "/Images/" + image}")`,
            minHeight: "300px",
          }}
        ></Grid>

        <Grid item xs={8}>
          <Link to={`/blog/${id}`} style={{ textDecoration: "none" }}>
            <Grid>
              <Grid>
                <Typography
                  align="left"
                  variant="h3"
                  color="secondary"
                  gutterBottom
                >
                  {title}
                </Typography>
              </Grid>

              <Grid>
                <Typography align="left" color="textPrimary">
                  {body}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
