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
    dob: "Unknown",
    hometown: "Hà Nội",
    education: "National University of Singapore - NUS (Đã tốt nghiệp)",
    currentJob: "Software Developer tại quỹ đầu tư RDW",
    mathmodeling: "2015 -  2017 (Phụ trách mảng Nội dung - Chuyên môn)",
    favquote:
      "'Tôi không biết thế giới nhìn tôi như thế nào, nhưng đối với tôi, mình dường như chỉ là một đứa bé chơi đùa trên bờ biển: thi thoảng lại chăm chú nhìn vào một hòn sỏi trơn nhẵn hay một vỏ ốc đẹp đẽ hơn bình thường, trong khi đại dương bao la của kiến thức ngay trước mắt mình còn chưa được khám phá.' - Isaac Newton",
    image: AnhPhuc,
  },
  {
    name: "Nguyễn Phương Anh",
    dob: "1992",
    hometown: "Hà Nội",
    education: "Đại học Sư phạm Hà Nội (Đã tốt nghiệp)",
    currentJob: "Archimedes Academy",
    mathmodeling: "2015 -  2020 (Phụ trách mảng Đối ngoại - Tài chính)",
    favquote: `"Logic sẽ đưa chúng ta từ điểm A đến điểm B. Trí tưởng tượng sẽ đưa chúng ta tới mọi nơi" - Albert Einstein`,
    image: ChiPhuongAnh,
  },
  {
    name: "Tống Hiền Chi",
    dob: "Unknown",
    hometown: "Hà Nội",
    education: "Yale University (Đã tốt nghiệp)",
    currentJob: "Google",
    mathmodeling: "2015 -  2018 (Phụ trách mảng Nội dung - Chuyên môn)",
    favquote: `"Không có lời giải tốt nhất, chỉ có lời giải tốt hơn” - Toán Mô hình Hà Nội`,
    image: ChiTong,
  },

  {
    name: "Lê Trần Kiên",
    dob: "1998",
    hometown: "Nghệ An",
    education: "Nanyang Technological University - NTU",
    currentJob: "Unknown",
    mathmodeling: "2015 -  2019 (Phụ trách mảng Chuyên môn)",
    favquote: "Follow your dream",
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
            align='center'
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
            7 năm Toán Mô Hình xây dựng và phát triển - 7 thế hệ Ban Tổ Chức
            Toán Mô Hình đã được thành lập vào tháng 6 năm 2015 bởi các bạn trẻ
            tài năng đang là du học sinh tại Mỹ và Singapore. Cùng chung lý
            tưởng và đam mê với Toán, các bạn đã mang bộ môn Toán Mô Hình trở về
            giảng dạy tại Việt Nam, với mong muốn nâng cao nền giáo dục toán ứng
            dụng nước nhà. Những gương mặt founder tài năng đó là ai? Điều gì
            khiến những nhà sáng lập này trở nên đặc biệt?
          </Typography>
        </Grid>
        <Grid container style={{ marginTop: 40 }}>
          {FounderData.map((item, index) => (
            <FouderCardChosing
              key={index}
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
