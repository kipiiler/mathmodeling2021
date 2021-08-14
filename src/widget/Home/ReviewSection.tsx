import React, { useEffect } from "react";
import Hiepngu from "../../static/Hiep_Ngu.jpg";
import Minhkhue from "../../static/Minh_Khue.jpeg";
import BachThao from "../../static/Bach_Thao.jpg";
import { useState } from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";

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
    if (action == "+") {
      index < 2 ? setIndex(index + 1) : setIndex(0);
    }
    if (action == "-") {
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
            backgroundImage: `url("data:image/png;base64,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")`,
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
