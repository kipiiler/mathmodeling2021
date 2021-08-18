import axios from "axios";
import React, { useEffect } from "react";
import withLayout from "../../layout/withLayout";
import { apiUrl } from "../../config/apiUrl.json";
import { useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import GalleryPageDisplay from "../../widget/GalleryPage";

function GalleryPage() {
  const [data, setDate] = useState<any>();
  const [selectedYear, setSelectedYear] = useState(2020);

  function onlyUnique(value: any, index: any, self: any) {
    return self.indexOf(value) === index;
  }

  function YearNav({ year, index }: any) {
    return (
      <Grid
        item
        style={{
          cursor: "pointer",
          borderRight:
            data && data?.length - 1 === index ? "" : "2px solid #1B4D82",
          paddingRight: data && data?.length - 1 === index ? "0" : 40,
          margin: "0 20px",
        }}
        onClick={() => {
          setSelectedYear(year);
        }}
      >
        <Typography
          variant="h3"
          style={{ fontWeight: year === selectedYear ? 600 : 400 }}
          color={year === selectedYear ? "secondary" : "textPrimary"}
        >
          {year}
        </Typography>
      </Grid>
    );
  }

  useEffect(() => {
    axios.get(`${apiUrl}/api/media`).then((res) => {
      setDate(
        res.data
          .map((x: any) => x.year)
          .filter(onlyUnique)
          .sort()
      );
    });
  }, []);

  return (
    <div>
      <Grid container alignItems="center" justifyContent="center">
        {data?.map((item: any, index: any) => (
          <YearNav key={index} year={item} index={index} />
        ))}
      </Grid>
      <GalleryPageDisplay year={selectedYear} />
    </div>
  );
}

export default withLayout(GalleryPage);
