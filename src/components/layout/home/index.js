// import Grid from "@mui/material/Grid";
import { React, useState } from "react";
import { Grid, Typography, makeStyles, Link } from "@material-ui/core";
// import { alpha } from "@mui/material/styles";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TelegramIcon from "@material-ui/icons/Telegram";
import InstagramIcon from "@material-ui/icons/Instagram";

import LadyPhoto from "../../../assests/Home/LadyPhoto11.png";
const UseStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  img: {
    [theme.breakpoints.up("xs")]: {
      // fontSize: "2rem",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    [theme.breakpoints.up("sm")]: {
      // fontSize: "2rem",
      // maxWidth: "100%",
      // maxHeight: "100%",
    },
  },
  root: {
    [theme.breakpoints.up("xs")]: {
      marginTop: "15px",
      fontSize: "2.0rem",
      fontWeight: "800",
      // margin-top:"20px"
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.5rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  para: {
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
      fontWeight: "500",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  },
}));

export default function index() {
  const classes = UseStyles();
  return (
    // <div className="py-64 w-[80%] text-center">
    <>
      <Grid
        style={{
          backgroundColor: "lightblue",
          height: "80vh",
          align: "center",
        }}
        container
        // maxWidth="xs"
        // maxHeight="md"
        // spacing={4}
        className={classes.container}
      >
        <Grid sm={6} item xs={12}>
          <div
            style={
              {
                // height: "100%",
                // backgroundColor: "orange",
              }
            }
          >
            <Typography
              className={classes.root}
              variant="h1"
              align="center"
              justify="center"
              // fontFamily="Arial"
              // fontWeight="bold"
            >
              English proficiency,
            </Typography>
            <Typography
              className={classes.root}
              variant="h1"
              align="center"
              justify="center"
              // fontFamily="Arial"
              // fontWeight="bold"
            >
              Confident English communication
            </Typography>
            <Typography
              className={classes.para}
              align="center"
              justify="center"
              variant="body1"
              fontSize="1rem"
              // component="p"
            >
              A good way to learn English is to read and listen to English
              content regularly, and to practice speaking and writing in English
              whenever possible.
            </Typography>
            <div
              className="flex justify-center "
              style={{ display: "flex", flexWrap: "wrap" }}
            >
              <div
                className="youtube_icon"
                style={{
                  opacity: 0.7, // set opacity to 70%
                  backgroundColor: "#8196F3", // set background color to yellow
                  boxShadow: "0px 0px 10px #0A34F3", // add a yellow shadow effect
                  borderRadius: "25px", // add rounded corners
                  padding: "10px", // add padding
                  margin: "10px",
                  transition: "all 0.2s ease-in-out", // add transition effect
                  cursor: "pointer", // add cursor on hover
                }}
                // onMouseEnter={(e) => {
                //   e.target.style.backgroundColor = "#ff0000"; // change background color on hover
                //   e.target.style.boxShadow = "0px 0px 10px #ff0000"; // add a red shadow effect on hover
                //   e.target.style.color = "#ffffff"; // change text color on hover
                // }}
                // onMouseLeave={(e) => {
                //   e.target.style.backgroundColor = "#ffff00"; // revert background color on mouse leave
                //   e.target.style.boxShadow = "0px 0px 10px #ffff00"; // revert shadow effect on mouse leave
                //   e.target.style.color = "#000000"; // revert text color on mouse leave
                // }}
                // style="opacity: 1; background-color: blueviolet;"
              >
                <YouTubeIcon
                  align="center"
                  justify="center"
                  color="secondary"
                  fontSize="large"
                />
                <Link
                  href="https://www.youtube.com/@DearSister"
                  target="_blank"
                  rel="noopener"
                  color="secondary"
                >
                  Youtube-Link
                </Link>
              </div>
              <div
                style={{
                  opacity: 0.7, // set opacity to 70%
                  backgroundColor: "#8196F3", // set background color to yellow
                  boxShadow: "0px 0px 10px #0A34F3", // add a yellow shadow effect
                  borderRadius: "25px", // add rounded corners
                  padding: "10px", // add padding
                  margin: "10px",
                  transition: "all 0.2s ease-in-out", // add transition effect
                  cursor: "pointer", // add cursor on hover
                }}
              >
                <InstagramIcon
                  align="center"
                  justify="center"
                  color="secondary"
                  fontSize="large"
                />
                <Link
                  href="https://www.youtube.com/@DearSister"
                  target="_blank"
                  rel="noopener"
                  color="secondary"
                >
                  Instagram-Link
                </Link>
              </div>
              <div
                style={{
                  opacity: 0.7, // set opacity to 70%
                  backgroundColor: "#8196F3", // set background color to yellow
                  boxShadow: "0px 0px 10px #0A34F3", // add a yellow shadow effect
                  borderRadius: "25px", // add rounded corners
                  padding: "10px", // add padding
                  margin: "10px",
                  transition: "all 0.2s ease-in-out", // add transition effect
                  cursor: "pointer", // add cursor on hover
                }}
              >
                <TelegramIcon
                  align="center"
                  justify="center"
                  color="primary"
                  fontSize="large"
                />
                <Link
                  href="https://www.youtube.com/@DearSister"
                  target="_blank"
                  rel="noopener"
                  color="primary"
                >
                  Telegram-Link
                </Link>
              </div>
            </div>
          </div>
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: "yellow",
            // height: "80vh",
            align: "center",
          }}
          sm={6}
          xs={12}
          justifyContent="center"
        >
          <div
            style={{
              // display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              // style={{ maxWidth: "100%" }}
              src={LadyPhoto}
              className={classes.img}
              // style={{ maxWidth: "100%", width: "100%" }}
            />
          </div>
        </Grid>
      </Grid>
    </>
    // </div>
  );
}
