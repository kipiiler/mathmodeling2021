import { Grid, Typography } from "@material-ui/core";
import React from "react";
import CUBE from "../../static/CUBE.svg";
import HANDS from "../../static/HANDS.svg";
import MAP from "../../static/MAP.svg";
import PEOPLE from "../../static/PEOPLE.svg";

function NumberColumn({ bigtitle, smalltitle, body, image }: any) {
  return (
    <Grid
      item
      xs={3}
      style={{ padding: "40px 20px", borderRight: "2px solid white" }}
    >
      <Grid container direction="column">
        <Grid container alignContent='center' justifyContent='center'>
          <img src={image && image} height={100} width={100} alt="icon" />
        </Grid>
        <Grid>
          <Typography
            align='center'
            variant="h5"
            color="secondary"
            style={{ fontSize: "48px" }}
          >
            {bigtitle}
          </Typography>
        </Grid>
        <Grid>
          <Typography align='center' variant="h2" color="secondary" gutterBottom>
            {smalltitle}
          </Typography>
        </Grid>
        <Grid>
          <Typography
            align='center'
            variant="h4"
            color="secondary"
            gutterBottom
            style={{ marginTop: 16 }}
          >
            {body}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default function NumberSection() {
  return (
    <div>
      <Grid style={{ margin: "80px 0 40px 0" }}>
        <Typography
          style={{ fontSize: "40px" }}
          align="center"
          variant="h2"
          color="secondary"
        >
          NHỮNG CON SỐ ẤN TƯỢNG
        </Typography>
      </Grid>
      <Grid container style={{ background: "#E8ECF1", padding: "40px 0" }}>
        <NumberColumn
          bigtitle={600}
          smalltitle={"Thí sinh"}
          body={
            "Khởi đầu từ năm 2015, Toán mô hình đã thu hút hơn 600 thí sinh tham dự"
          }
          image={PEOPLE}
        />
        <NumberColumn
          bigtitle={150}
          smalltitle={"Đội thi"}
          body={
            "Rất nhiều thí sinh từ khắp các tỉnh thành trên cả nước tham dự"
          }
          image={HANDS}
        />
        <NumberColumn
          bigtitle={15}
          smalltitle={"Tỉnh thành"}
          body={
            "Với đông đảo thí sinh tham dự, Tóa mô hình không những tạo ra một sân chơi bổ ích cho các bạn học sinh, mà còn tạo ra một cộng đồng gắn kết"
          }
          image={MAP}
        />
        <NumberColumn
          bigtitle={"Nhân tố"}
          smalltitle={"Bí ẩn"}
          body={"Nhiều điều bất ngờ mà đến chính BTC cũng không thể biết trước"}
          image={CUBE}
        />
      </Grid>
    </div>
  );
}
