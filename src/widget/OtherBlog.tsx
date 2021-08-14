import React from "react";
import { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useEffect } from "react";
import axios from "axios";

import { apiUrl } from "../config/apiUrl.json";
import { Link } from "react-router-dom";

interface IObject {
  [key: string]: any;
}

export default function OtherBlogSection() {
  const [blog, setBlog] = useState<IObject[]>();
  const [index, setIndex] = useState(3);
  const [displayBlog, setDisplayBlog] = useState<IObject[]>();

  function handleSwitch(action: string) {
    if (action == "+") {
      blog && index < blog?.length + 2 ? setIndex(index + 1) : setIndex(index);
    }
    if (action == "-") {
      index > 3 ? setIndex(index - 1) : setIndex(3);
    }
  }
  useEffect(() => {
    axios.get(`${apiUrl}/api/article`).then((res) => {
      if (res.data) {
        setBlog(res.data);
      }
    });
  }, []);

  useEffect(() => {
    setDisplayBlog(blog?.slice(index - 3, index));
  }, [blog, index]);

  const Ablog = ({ data }: any) => {
    return (
      <Grid item xs={4}>
        <Grid
          item
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("${apiUrl + "/Images/" + data.images[0]}")`,
            minHeight: "200px",
            borderBottom: "24px solid white",
          }}
        ></Grid>

        <Grid item>
          <Link to={`/blog/${data.id}`} style={{ textDecoration: "none" }}>
            <Grid>
              <Grid>
                <Typography
                  align="left"
                  variant="h3"
                  color="secondary"
                  gutterBottom
                >
                  {data.title}
                </Typography>
              </Grid>

              <Grid>
                <Typography align="justify" color="textPrimary">
                  {data.body.slice(0, 300)}
                </Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    );
  };

  return (
    <>
      <Grid container style={{ marginTop: 100 }}>
        <Grid item xs={2}>
          <Typography align="left" variant="h2" color="secondary">
            Tin Cũ Hơn
          </Typography>
        </Grid>
        <Grid item xs={10} style={{ borderBottom: "4px solid #ECEFF3" }}></Grid>
        <Grid container alignItems="center" style={{ margin: "60px 0" }}>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                handleSwitch("-");
              }}
            >
              <NavigateBeforeIcon />
            </IconButton>
          </Grid>
          <Grid item xs={10}>
            <Grid container>
              {displayBlog?.map((item) => (
                <Ablog data={item} />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => {
                handleSwitch("+");
              }}
            >
              <NavigateNextIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
