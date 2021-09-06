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
            Với nhiều năm xây dựng và phát triển, Toán Mô Hình đã xây dựng được
            một đội ngũ nhân sự không chỉ có chất lượng chuyên môn cao mà còn là
            một tổ chức đoàn kết, truyền cảm hứng trong công việc. Tuy có những
            sự thay đổi nhân sự giữa các năm nhưng tinh thần tổ chức không hề
            thay đổi. Điều đó được thể hiện qua những thành tích gặt hái và sự
            phát triển lớn mạnh dần qua từng năm.
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
