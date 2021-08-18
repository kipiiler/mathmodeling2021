import { Grid, IconButton, Typography } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ImageDisplayer from "../components/ImageDisplayer";
import { apiUrl } from "../config/apiUrl.json";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

export default function GalleryPageDisplay({ year }: any) {
  const [images, setImages] = useState<any>();
  const [selectedImages, setSelectedImages] = useState<any>();
  const [index, setIndex] = useState<number>(1);
  const [maxIndex, setMaxIndex] = useState<number>(0);

  useEffect(() => {
    axios.get(`${apiUrl}/api/media/${year}`).then((res: any) => {
      setImages(res.data.map((x: any) => x.image));
    });
  }, [year]);

  useEffect(() => {
    setMaxIndex(Math.ceil(images?.length / 14));
  }, [images]);

  useEffect(() => {
    setSelectedImages(images?.slice(14 * index - 14, 14 * index));
  }, [index, images]);

  function IndexNav({ pageindex }: any) {
    return (
      <Grid item style={{ padding: 8, cursor: "pointer" }}>
        <Typography
          color={pageindex === index ? "secondary" : "textPrimary"}
          style={{
            fontWeight: pageindex === index ? 600 : 400,
          }}
          onClick={() => {
            setIndex(pageindex);
          }}
        >
          {pageindex}
        </Typography>
      </Grid>
    );
  }

  function NavController() {
    var rows = [];
    for (var i = 1; i <= maxIndex; i++) {
      rows.push(<IndexNav key={i} pageindex={i} />);
    }
    return <>{rows}</>;
  }

  function handleSwitch(action: string) {
    if (action == "+") {
      index < maxIndex ? setIndex(index + 1) : setIndex(index);
    }
    if (action == "-") {
      index > 1 ? setIndex(index - 1) : setIndex(1);
    }
  }

  return (
    <div style={{ paddingTop: 40 }}>
      <ImageDisplayer images={selectedImages} />
      <Grid
        container
        justifyContent="center"
        direction="row"
        style={{ padding: "20px 0" }}
      >
        <Grid item xs={1}>
          <IconButton
            onClick={() => {
              handleSwitch("-");
            }}
          >
            <NavigateBeforeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <Grid
            style={{ height: "100%" }}
            container
            alignContent="center"
            justifyContent="center"
          >
            <NavController />
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
    </div>
  );
}
