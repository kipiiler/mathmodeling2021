import { Grid, Typography } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import About1 from "../../static/About1.jpg";
import { apiUrl } from "../../config/apiUrl.json";
import MemberCard from "../../components/MemberCard";

interface IMember {
  id: any;
  name: string;
  role: string;
  image: string;
  gif: string;
  facebookUrl: string | null;
  instagramUrl: string | null;
  linkedInUrl: string | null;
}

export default function OurTeamSection() {
  const [teamMember, setTeamMember] = useState<IMember[]>();

  useEffect(() => {
    axios.get(`${apiUrl}/api/member`).then((res) => {
      if (res.data) {
        setTeamMember(res.data);
      }
    });
  }, []);

  return (
    <>
      <Grid container style={{ marginTop: 80 }}>
        <Grid item xs={12}>
          <Typography align="left" variant="h2" color="secondary" gutterBottom>
            OUR TEAM
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="left" color="textPrimary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            perspiciatis vel? Earum magni dolor minus repellendus atque nisi
            aspernatur commodi delectus. Incidunt perspiciatis ullam nihil
            minima hic dolorum aut error! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Aliquam, perspiciatis vel? Earum magni dolor minus
            repellendus atque nisi aspernatur commodi delectus. Incidunt
            perspiciatis ullam nihil minima hic dolorum aut error! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Aliquam, perspiciatis
            vel? Earum magni dolor minus repellendus atque nisi aspernatur
            commodi delectus. Incidunt perspiciatis ullam nihil minima hic
            dolorum aut error!
          </Typography>
        </Grid>
        <Grid
          item
          xs={3}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${About1})`,
            minHeight: "300px",
            border: "12px solid white",
          }}
        ></Grid>
        <Grid
          item
          xs={3}
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url(${About1})`,
            minHeight: "300px",
            border: "12px solid white",
            borderRight: "none",
          }}
        ></Grid>
        <Grid container style={{ marginTop: 40 }}>
          {teamMember?.map((item, index) => (
            <MemberCard key={index} data={item} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}
