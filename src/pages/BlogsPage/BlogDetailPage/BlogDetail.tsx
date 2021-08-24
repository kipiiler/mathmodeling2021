import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import withLayout from "../../../layout/withLayout";

import { apiUrl } from "../../../config/apiUrl.json";
import Grid from "@material-ui/core/Grid/Grid";
import { Typography } from "@material-ui/core";
import OtherBlogSection from "../../../widget/OtherBlog";

interface IOBj {
  [key: string]: any;
}

function BlogDetailPage() {
  const param: IOBj = useParams();
  const [blog, setBlog] = useState<IOBj>();

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/article/${param?.id}`)
      .then((res) => setBlog(res.data));
  }, [param]);

  return (
    <>
      <Grid container justifyContent="center" style={{ margin: "0 0 60px 0" }}>
        <Grid item xs={12} style={{ margin: "60px 0 60px 0" }}>
          <Typography align="left" variant="h2" color="secondary">
            {blog?.title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            display: !blog?.images?.length ? "none" : "",
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundImage: `url("${apiUrl + "/Images/" + blog?.images[0]}")`,
            minHeight: "400px ",
          }}
        ></Grid>
        <Grid item xs={9}>
          <Typography
            align="justify"
            color="textPrimary"
            style={{ margin: "20px 0" }}
          >
            {blog?.body}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          {blog?.images?.length > 1 && (
            <Grid container>
              <Grid
                item
                xs={blog?.images?.length === 2 ? 12 : 6}
                style={{
                  height: "auto",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url("${
                    apiUrl + "/Images/" + blog?.images[1]
                  }")`,
                  minHeight: blog?.images?.length === 2 ? "400px" : "300px",
                  border: "12px solid white",
                  borderLeft: "none",
                }}
              ></Grid>
              <Grid
                item
                xs={6}
                style={{
                  display: blog?.images?.length === 2 ? "none" : "",
                  height: "auto",
                  width: "100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url("${
                    apiUrl + "/Images/" + blog?.images[2]
                  }")`,
                  minHeight: "300px ",
                  border: "12px solid white",
                  borderRight: "none",
                }}
              ></Grid>
            </Grid>
          )}
        </Grid>
      </Grid>
      <OtherBlogSection />
    </>
  );
}

export default withLayout(BlogDetailPage);
