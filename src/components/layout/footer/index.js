import { React } from "react";
import { Grid, Typography, makeStyles, Divider, Link } from "@material-ui/core";
import LadyPhoto from "../../../assests/Courses/Webinar-amico (1).svg";
import StarIcon from "@material-ui/icons/Star";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    paddingTop: "3vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    width: "100%",
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
      width: "100%",
      height: "5px",
    },
    [theme.breakpoints.up("sm")]: { width: "50%", height: "5px" },
    [theme.breakpoints.up("md")]: { width: "50%", height: "6px" },
    [theme.breakpoints.up("lg")]: { width: "50%", height: "8px" },
  },

  // <---------------------Apply on Typography---------------->
  root: {
    color: "#fff",
    // borderBottom: "20px solid red",
    // borderWidth: "0 0 3px 0",
    textDecoration: "underline",
    textDecorationColor: "red",
    textDecorationThickness: "4px",
    // marginBottom: theme.spacing(5),
    [theme.breakpoints.down("xs")]: {
      marginTop: "5vh",
      marginLeft: "4vw",
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
    marginTop: "5vh",
    // borderBottom: `2px solid ${theme.palette.secondary.main}`,
    transition: "all 0.3s ease",
    "&:hover": {
      // borderBottom: `2px solid red`,
    },
  },
}));

export default function index() {
  const classes = UseStyles();
  return (
    <>
      <Grid
        style={{
          backgroundColor: "black",
          align: "center",
          paddingBottom: "2vh",
        }}
        container
        className={classes.container}
      >
        <Grid item md={6} lg={2} className={classes.contai}>
          <Typography underline="always" className={classes.root}>
            Organisation
          </Typography>
          <Typography>
            <Link className={classes.linkcss}>About</Link>
          </Typography>
        </Grid>
        <Grid
          item
          md={12}
          lg={2}
          xs={6}
          underline="always"
          className={classes.contai}
        >
          {" "}
          <Typography underline="always" className={classes.root}>
            Community
          </Typography>
        </Grid>
        <Grid item md={12} lg={2} xs={6} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Socials
          </Typography>
        </Grid>
        <Grid item md={12} lg={2} xs={6} className={classes.contai}>
          {" "}
          <Typography underline="always" className={classes.root}>
            Contact
          </Typography>
        </Grid>
        {/* <Grid item md={6} lg={2} className={classes.contai}></Grid> */}
      </Grid>
    </>
  );
}
