import { React } from "react";
import { Grid, Typography, makeStyles, Divider, Link } from "@material-ui/core";
import LadyPhoto from "../../../assests/Courses/Webinar-amico (1).svg";
import StarIcon from "@material-ui/icons/Star";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    paddingTop: "3vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    paddingBottom: "3vh",
    // width: "100%",
    // padding: "1vw",
    // maxWidth: "100%",
    // maxHeight: "100%",
  },
  container1: {
    paddingTop: "1vh",
    paddingBottom: "1vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    // marginLeft: "18vw",
    // paddingBottom: "1vh",
    width: "70%",
    paddingLeft: "2vw",
    marginLeft: "10vw",
    // paddingLeft: "20vh",
    // width: "100%",
    // padding: "1vw",
    // maxWidth: "100%",
    // maxHeight: "100%",
  },

  // <----------------------Apply Size on hr ------------------>
  divisize: {
    backgroundColor: "#FC6736",
    // height: "7px",
    marginBottom: "20px",

    borderRadius: "10vw",
    [theme.breakpoints.down("xs")]: {
      // width: "100%",
      height: "5px",
    },
    // [theme.breakpoints.up("sm")]: { width: "50%", height: "5px" },
    // [theme.breakpoints.up("md")]: { width: "50%", height: "6px" },
    // [theme.breakpoints.up("lg")]: { width: "50%", height: "8px" },
  },

  // <---------------------Apply on Typography---------------->
  root: {
    color: "#fff",
    paddingBottom: "1vh",
    // borderBottom: "20px solid red",
    // borderWidth: "0 0 3px 0",
    textDecoration: "underline",
    textDecorationColor: "#fff",
    textDecorationThickness: "2px",
    // marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginTop: "5vh",
      // marginLeft: "4vw",
      // fontSize: "1.7rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      // marginTop: "10vh",
      fontSize: "1rem",

      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      // marginTop: "10vh",

      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      // marginTop: "10vh",
      fontSize: "1rem",
    },
  },
  contai: {
    // paddingTop: "3vh",
    height: "20vh",
    backgroundColor: "black",
    margin: "1vw",
  },
  linkcss: {
    textDecoration: "none",
    color: "#fff",
    weight: "10%",
    // marginTop: "50px",
    // borderBottom: `2px solid ${theme.palette.secondary.main}`,
    transition: "all 0.3s ease",
    "&:hover": {
      cursor: "pointer",
      // borderBottom: `2px solid red`,
    },
  },
  diviline: {
    // display: "flex",
    // alignItems: "center",
    // justifyContent: "center",
    // marginBottom: "2vh",
    backgroundColor: "whitesmoke",
    width: "70%",
    paddingLeft: "2vw",
    marginLeft: "10vw",
  },
  divline1: { height: "2vh", width: "70%" },
}));

export default function index() {
  const classes = UseStyles();
  return (
    <div style={{ backgroundColor: "black", paddingBottom: "3vh" }}>
      <Grid
        style={{
          backgroundColor: "black",
          align: "center",
        }}
        container
        className={classes.container}
      >
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          <Typography underline="always" className={classes.root}>
            Organisation
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              About
            </Link>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              FAQ
            </Link>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Videos
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Community
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Courses
            </Link>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Events
            </Link>
          </Typography>
          {/* <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              About
            </Link>
          </Typography> */}
        </Grid>
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Socials
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Youtube
            </Link>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Instagram
            </Link>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Telegram
            </Link>
          </Typography>
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Github
            </Link>
          </Typography>
          {/* <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Telegram
            </Link>
          </Typography> */}
        </Grid>
        <Grid item xs={4} md={4} lg={2} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Contact
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Telegram
            </Link>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Email
            </Link>
          </Typography>{" "}
          <Typography style={{ marginTop: "1vh" }}>
            <Link href="#" className={classes.linkcss}>
              Discord
            </Link>
          </Typography>
        </Grid>
        {/* <Grid item md={6} lg={2} className={classes.contai}></Grid> */}
      </Grid>
      <div className={classes.diviline}>
        <Divider />
      </div>
      <Grid
        className={classes.container1}
        container
        // justifyContent="space-between"
      >
        <Grid item md={12} lg={6} sm={12}>
          <Link className={classes.linkcss}>
            <Typography style={{ fontSize: "1rem", fontWeight: "1000" }}>
              Dear Sister
            </Typography>
            {/* <div style={{ weight: "90%" }}>fasddfa</div> */}
          </Link>
        </Grid>
        <Grid item md={12} lg={6} sm={12} style={{ color: "white" }}>
          <Link
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <YouTubeIcon
              align="center"
              justify="center"
              // color="secondary"
              fontSize="large"
            />
          </Link>{" "}
          <Link
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <GitHubIcon
              align="center"
              justify="center"
              // color="secondary"
              // fontSize="large"
            />
          </Link>{" "}
          <Link
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <TelegramIcon
              align="center"
              justify="center"
              // color="secondary"
              fontSize="large"
            />
          </Link>{" "}
          <Link
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <TwitterIcon
              align="center"
              justify="center"
              // color="secondary"
              fontSize="large"
            />
          </Link>{" "}
          <Link
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <InstagramIcon
              align="center"
              justify="center"
              // color="secondary"
              fontSize="large"
            />
          </Link>{" "}
          <Link
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <EmailIcon
              align="center"
              justify="center"
              // color="secondary"
              fontSize="large"
            />
          </Link>{" "}
          <Link
            href="https://www.youtube.com/@DearSister"
            target="_blank"
            // color="secondary"
            style={{ color: "#fff" }}
          >
            <LinkedInIcon
              align="center"
              justify="center"
              // paddingRight="1px"
              // color="secondary"
              fontSize="large"
            />
          </Link>
        </Grid>
      </Grid>
      <div className={classes.diviline}>
        <Divider />
      </div>
      <div style={{ margin: "1vh" }}>
        <Typography
          style={{ color: "#fff", display: "flex", justifyContent: "center" }}
          variant="body1"
        >
          &copy; 2023 Copyrights Dear Sister.All rights reserved.
        </Typography>
      </div>
    </div>
  );
}
