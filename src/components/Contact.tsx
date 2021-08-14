import { Button, Grid, TextField, Typography } from "@material-ui/core";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";
import { emailValidator } from "../utils/Validator/email";
import { isNumeric } from "../utils/Validator/phone";
import { apiUrl } from "../config/apiUrl.json";

export default function ContactForm() {
  const [input, setInput] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    body: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.persist();
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    axios
      .post(`${apiUrl}/api/message`, {
        fullName: input.fullName,
        email: input.email,
        phoneNumber: input.phoneNumber,
        body: input.body,
      })
      .then((res) => {
        if (res) {
          setInput({
            fullName: "Sent Successfully",
            email: "Sent Successfully",
            phoneNumber: "Sent Successfully",
            body: "Sent Successfully",
          });
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(input);
      });
  };

  return (
    <Grid
      container
      direction="column"
      style={{ marginTop: "48px", marginBottom: 48 }}
    >
      <Grid item style={{ marginTop: "48px", marginBottom: 24 }}>
        <Typography color="secondary" variant="h2">
          LIÊN HỆ VÀ PHẢN HỒI
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: "16px" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography
              color="secondary"
              variant="h3"
              align="left"
              gutterBottom
            >
              Họ và tên
            </Typography>
            <TextField
              onChange={handleInputChange}
              value={input.fullName}
              variant="outlined"
              name="fullName"
              placeholder="Nhập họ và tên của bạn"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Typography
              color="secondary"
              variant="h3"
              align="left"
              gutterBottom
            >
              Số điện thoại
            </Typography>
            <TextField
              variant="outlined"
              error={
                input.phoneNumber.length > 0 &&
                (!isNumeric(input.phoneNumber) || input.phoneNumber.length < 10)
              }
              onChange={handleInputChange}
              value={input.phoneNumber}
              name="phoneNumber"
              placeholder="Nhập số điện thoại của bạn"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "16px" }}>
        <Typography color="secondary" variant="h3" align="left" gutterBottom>
          Email
        </Typography>
        <TextField
          onChange={handleInputChange}
          error={input.email.length > 0 && !emailValidator(input.email)}
          value={input.email}
          variant="outlined"
          name="email"
          placeholder="Nhập email của bạn"
          fullWidth
        />
      </Grid>
      <Grid item style={{ marginTop: "16px" }}>
        <Typography color="secondary" variant="h3" align="left" gutterBottom>
          Lời nhắn
        </Typography>
        <TextField
          onChange={handleInputChange}
          value={input.body}
          variant="outlined"
          rows={10}
          name="body"
          multiline
          placeholder="Nhập lời nhắn của bạn"
          fullWidth
        />
      </Grid>
      <Grid item style={{ marginTop: "16px" }}>
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            color="primary"
            style={{
              boxShadow: "none",
              padding: "12px 32px",
              marginTop: 8,
              color: "white",
            }}
            onClick={handleSubmit}
            disabled={
              !emailValidator(input.email) &&
              !isNumeric(input.phoneNumber) &&
              !input.fullName &&
              !input.body
            }
          >
            <Typography variant="h3" color="textSecondary">
              Send
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
