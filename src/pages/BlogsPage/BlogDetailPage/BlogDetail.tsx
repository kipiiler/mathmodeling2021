import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import withLayout from "../../../layout/withLayout";

import { apiUrl } from "../../../config/apiUrl.json";
import Grid from "@material-ui/core/Grid/Grid";
import { Typography } from "@material-ui/core";
import OtherBlogSection from "../../../widget/OtherBlog";

import MathJax from "react-mathjax3";

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
        <Grid item xs={9}>
          <MathJax.Context
            input="tex"
            onLoad={() => console.log("Loaded MathJax script!")}
            onError={(MathJax: any, error: any) => {
              console.warn(error);
              console.log(
                "Encountered a MathJax error, re-attempting a typeset!"
              );
              MathJax.Hub.Queue(MathJax.Hub.Typeset());
            }}
            script="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js"
            options={{
              messageStyle: "none",
              extensions: ["tex2jax.js"],
              jax: ["input/TeX", "output/HTML-CSS"],
              tex2jax: {
                inlineMath: [
                  ["$", "$"],
                  ["\\(", "\\)"],
                ],
                displayMath: [
                  ["$$", "$$"],
                  ["\\[", "\\]"],
                ],
                processEscapes: true,
              },
              TeX: {
                extensions: [
                  "AMSmath.js",
                  "AMSsymbols.js",
                  "noErrors.js",
                  "noUndefined.js",
                ],
              },
            }}
          >
            <MathJax.Html html={blog?.body} />
          </MathJax.Context>
        </Grid>
      </Grid>
      <OtherBlogSection />
    </>
  );
}

export default withLayout(BlogDetailPage);
