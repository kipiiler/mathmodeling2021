import React, { useEffect } from "react";
import Hiepngu from "../../static/Hiep_Ngu.jpg";
import Minhkhue from "../../static/Minh_Khue.jpeg";
import BachThao from "../../static/Bach_Thao.jpg";
import { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";

import BackGroundCool from "../../static/BackgroundCool.svg";

import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const reviewdata: ReviewData[] = [
  {
    name: "Hồ Tùng Hiệp",
    title: "Thí sinh TMH 2019",
    comment:
      "Cũng nhờ có TMH mà mình được trải nghiệm và bạo dạn hơn nữa, lần đầu mình đi một mình xa gia đình như vậy, lần đầu mình không ngủ được vì sợ dậy muộn xe đi mất lại phải chạy như hôm trước đó :))))) lần đầu cùng anh em trong team thức đêm làm slide để hôm sau trình bày, được thuyết trình bài giải của mình trước những người thầy cô nổi tiếng. Đây thật sự là một trải nghiệm đáng nhớ.Mùa mới chắc sẽ có nhiều thay đổi, nhưng mình mong rằng người chơi năm nay vẫn sẽ có được những trải nghiệm đáng nhớ như mình đã may mắn có được trong năm trước nhé!",
    link: Hiepngu,
  },
  {
    name: "Nguyễn Minh Khuê",
    title: "Á quân TMH 2018 & 2019",
    comment:
      "Mình biết đến tmh 1 cách rất tình cờ, và mình đki tham gia vì muốn thử sức với cái gì đó mới lạ. Đội mình đặt tên là Núp nghĩa là noob + ẩn núp vì chúng mình nghiệp dư ma =))). Và những trải nghiệm của mình ở tmh thật sự rất thú vị. Mình cbh tham gia cuộc thi nào làm nhiều mà chơi cũng nhiều như vậy. Nhờ tmh mà mình tìm thấy sự hứng thú với bộ môn toán ứng dụng, cụ thể hơn là thống kê - ptich số liệu, và đó cũng trở thành 1 phần mình muốn học trên đhoc. Cảm ơn cuộc thi vì đã là 1 phần của 2 mùa hè cấp 3 của mình. Rất là vui rất là đáng thử nhé mọi người!",
    link: Minhkhue,
  },
  {
    name: "Bạch Thị Thảo Nguyên",
    title: " BTC TMH 2017 & 2018",
    comment:
      ' Nói về TMH thì với mình, không có định nghĩa nào hợp lý hơn "những người anh em tuyệt vời". Mình tham gia btc TMH từ năm mình học lớp 10, ngày đấy mình bé nhất trong btc và hầu như ngơ ngơ chả biết gì ý. Nhma mn luôn hướng dẫn, chỉ bảo rất nhiều, xong hết ct mn còn rủ nhau đi xp cơ. Vì tình cảm đó mà mình lại đăng ký làm btc TMH năm sau. Nc tham gia TMH mình có thêm kinh nghiệm, có thêm những người anh, người chị, người bạn vô cũng đi nữa nên mình luôn mong có thể support cho TMH nhiều nhất có thể. Mình cũng mong TMH sẽ càng ngày càng phát triển và đem đến nhiều giá trị cho người tham gia.',
    link: BachThao,
  },
];

interface ReviewData {
  [key: string]: any;
}

export default function ReviewSection() {
  const [index, setIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(reviewdata[index]);

  function handleSwitch(action: string) {
    if (action === "+") {
      index < 2 ? setIndex(index + 1) : setIndex(0);
    }
    if (action === "-") {
      index > 0 ? setIndex(index - 1) : setIndex(2);
    }
  }

  useEffect(() => {
    setSelectedReview(reviewdata[index]);
  }, [index]);

  return (
    <>
      <Grid container style={{ margin: "80px 0" }}>
        <Grid item xs={2} style={{ background: "#E8ECF1" }}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Typography
              variant="h2"
              color="secondary"
              style={{
                transform: "rotate(-90deg)",
              }}
            >
              Chia sẻ về cuộc thi
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={10}
          style={{
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("${BackGroundCool}")`,
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={1}>
              <IconButton
                onClick={() => {
                  handleSwitch("-");
                }}
              >
                <NavigateBeforeIcon style={{ color: "white" }} />
              </IconButton>
            </Grid>
            <Grid item xs={4} style={{ padding: "30px 0" }}>
              <div
                style={{
                  height: "auto",
                  width: "90%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundImage: `url(${selectedReview?.link})`,
                  minHeight: "400px",
                }}
              ></div>
            </Grid>
            <Grid item xs={6}>
              <Grid
                style={{
                  borderBottom: "1px solid white",
                  marginBottom: "16px",
                  paddingBottom: "16px",
                }}
              >
                <Typography align="left" variant="h2" color="textSecondary">
                  {selectedReview?.name}
                </Typography>
              </Grid>
              <Grid>
                <Typography
                  align="left"
                  variant="h3"
                  color="textSecondary"
                  gutterBottom
                >
                  {selectedReview?.title}
                </Typography>
              </Grid>
              <Grid>
                <Typography align="left" color="textSecondary">
                  {selectedReview?.comment}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs={1}>
              <IconButton
                onClick={() => {
                  handleSwitch("+");
                }}
              >
                <NavigateNextIcon style={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
