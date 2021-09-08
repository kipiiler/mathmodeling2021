import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { apiUrl } from "../config/apiUrl.json";
import ReactHtmlParser from "react-html-parser";

export default function BlogPreview({ id, title, body, image }: any) {
  return (
    <>
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        style={{ marginTop: 40 }}
      >
        <Grid
          item
          xs={4}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage:
              (image && `url("${apiUrl + "/Images/" + image}")`) ||
              `url("https://media.istockphoto.com/vectors/abstract-blue-and-orange-wave-vector-background-vector-id1142714085?k=20&m=1142714085&s=612x612&w=0&h=tjCYjd9KG848OcbzSQy1Htb7Yq8_4r98uGpcyzTP0yk=")`,
            minHeight: "250px",
          }}
        ></Grid>

        <Grid item xs={7}>
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
                  {ReactHtmlParser(body.slice(0, 600))}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </>
  );
}
