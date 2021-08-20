import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import FounderCardDisplay from "../../components/FounderCard";
import AnhKien from "../../static/AnhKien.jpg";
import AnhPhuc from "../../static/AnhPhuc.jpeg";
import ChiPhuongAnh from "../../static/ChiPhuongAnh.jpg";
import ChiTong from "../../static/ChiTong.jpg";

const FounderData: IFounder[] = [
  {
    name: "Lê Minh Phúc",
    dob: "aaaa",
    hometown: "aaaa",
    education: "aaaa",
    currentJob: "aaaa",
    mathmodeling: "aaaa",
    favquote: "aaaa",
    image: AnhPhuc,
  },
  {
    name: "Nguyễn Phương Anh",
    dob: "aaaa",
    hometown: "aaaa",
    education: "aaaa",
    currentJob: "aaaa",
    mathmodeling: "aaaa",
    favquote: "aaaa",
    image: ChiPhuongAnh,
  },
  {
    name: "Tống Hiền Chi",
    dob: "aaaa",
    hometown: "aaaa",
    education: "aaaa",
    currentJob: "aaaa",
    mathmodeling: "aaaa",
    favquote: "aaaa",
    image: ChiTong,
  },

  {
    name: "Lê Trần Kiên",
    dob: "aaaa",
    hometown: "aaaa",
    education: "aaaa",
    currentJob: "aaaa",
    mathmodeling: "aaaa",
    favquote: "aaaa",
    image: AnhKien,
  },
];

interface IFounder {
  name: string;
  dob: string;
  hometown: string;
  education: string;
  currentJob: string;
  mathmodeling: string;
  favquote: string;
  image: any;
}

export default function FounderSection() {
  const [displayFounder, setDisplayFounder] = useState(FounderData[0]);

  function FouderCardChosing({ name, image, index }: any) {
    return (
      <Grid
        item
        xs={3}
        onClick={() => {
          setDisplayFounder(FounderData[index]);
        }}
        style={{ paddingRight: name === "Lê Trần Kiên" ? 0 : 16 }}
      >
        <Grid
          style={{
            height: "auto",
            width: "100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("${image}")`,
            minHeight: "300px",
            cursor: "pointer",
          }}
        ></Grid>
        <Grid
          style={{
            background: name === displayFounder.name ? "#1B4D82" : "#ACE4FF",
            padding: "10px 0",
          }}
        >
          <Typography
            variant="h3"
            style={{ fontWeight: 400 }}
            color={name === displayFounder.name ? "textSecondary" : "secondary"}
          >
            {name}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return (
    <>
      <Grid container style={{ margin: "80px 0 32px 0" }}>
        <Grid item xs={2}>
          <Typography
            align="left"
            style={{ fontSize: 32, fontWeight: 600 }}
            variant="h2"
            color="secondary"
          >
            FOUNDER
          </Typography>
        </Grid>
        <Grid
          item
          xs={10}
          style={{ borderTop: "1px solid grey", paddingTop: 16 }}
        >
          <Typography align="left" color="textPrimary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
            sapiente repudiandae id cupiditate ex vel veritatis corrupti iusto,
            mollitia minima, ipsum magni, amet nulla veniam commodi!
            Dignissimos, corrupti consectetur. Earum!
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 40 }}>
          {FounderData.map((item, index) => (
            <FouderCardChosing
              name={item.name}
              image={item.image}
              index={index}
            />
          ))}
          <FounderCardDisplay data={displayFounder} />
        </Grid>
      </Grid>
    </>
  );
}
