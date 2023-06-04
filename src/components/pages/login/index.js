import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as LinkRouter } from "react-router-dom";
import { Typography, Container, Grid, Paper } from "@material-ui/core";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import LadyPhoto from "../../../assests/Login/updation.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    // backgroundColor: "
    paddingTop: "20vh",
    paddingBottom: "20vh",
    backgroundColor: "black",
  },
  appBar: {
    marginBottom: theme.spacing(2),
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    backgroundColor: "#01011F",
    color: "white",
  },
  explorecourse: {
    color: "#fff",
    fontWeight: "1000",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
  explorecou: {
    color: "#fff",
    opacity: 0.9, // set opacity to 70%
    backgroundColor: "#F50834", // set background color to yellow
    boxShadow: "0px 0px 10px #D21337", // add a yellow shadow effect
    borderRadius: "25px", // add rounded corners
    // add padding
    padding: "10px",
    margin: "10px",
    marginTop: "40vh",
    transition: "all 0.2s ease-in-out", // add transition effect
    cursor: "pointer", // add cursor on hover
    width: "100%",
  },
  img: {
    [theme.breakpoints.up("lg")]: {
      height: "55vh",
      weight: "100%",
    },
    [theme.breakpoints.down("md")]: {
      width: "70vw",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={LadyPhoto} alt=" " className={classes.img} />
      </div>
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              {/* Your content goes here */}
              <Typography variant="h5">
                Welcome to the Building Phase Page
              </Typography>
              <Typography variant="body1">
                This page is currently under construction. Please check back
                later for updates.
              </Typography>{" "}
            </Paper>{" "}
            <div className={classes.explorecourse}>
              <LinkRouter
                to="/"
                // target="_blank"
                // rel="noopener"
                // color="secondary"
                className={classes.explorecou}
              >
                {`  Main Page  `}
                <VideoLibraryIcon />
              </LinkRouter>{" "}
            </div>
          </Grid>
        </Grid>
      </Container>{" "}
    </div>
  );
};

export default App;
