import { React } from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import LadyPhoto from "../../../assests/About_US/Girls.png";
import StarIcon from "@material-ui/icons/Star";

const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
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
      width: "30%",
      height: "5px",
    },
    [theme.breakpoints.up("sm")]: { width: "10vw", height: "5px" },
    [theme.breakpoints.up("md")]: { width: "20vw", height: "6px" },
    [theme.breakpoints.up("lg")]: { width: "10vw", height: "8px" },
  },

  // <---------------------Apply on Typography---------------->
  root: {
    color: "#fff",
    // borderBottom: "20px solid red",
    // borderWidth: "0 0 3px 0",

    [theme.breakpoints.down("xs")]: {
      marginTop: "5vh",
      marginLeft: "4vw",
      fontSize: "1.7rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: "10vh",
      fontSize: "2rem",

      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "10vh",

      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "10vh",
      fontSize: "3rem",
    },
  },
  // <----------------Paragraph---------------------->
  para: {
    color: "#fff",
    fontWeight: "900",
    [theme.breakpoints.up("xs")]: {
      fontSize: "1rem",
      // fontWeight: "500",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.4rem",
    },
  },
  sizegrid: {
    height: "100%",
    weight: "100%",
  },
  aboutpara: {
    width: "95%",
    [theme.breakpoints.up("md")]: {
      width: "75%",
    },
    [theme.breakpoints.up("large")]: {
      width: "70%",
    },
  },
  staricon: {
    color: "#FC6736",
    marginRight: "1vw",
    marginTop: "5px",
    fontSize: "x-large",
    // paddingTop: "10px",
    [theme.breakpoints.down("md")]: {
      // fontSize: "large",
      marginTop: "6px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "large",
      marginTop: "1.5px",
    },
  },
}));

export default function index() {
  const classes = UseStyles();
  return (
    <>
      <Grid
        style={{
          backgroundColor: "#02023D",
          align: "center",
        }}
        container
        className={classes.container}
      >
        <Grid
          item
          style={{
            align: "center",
          }}
          sm={6}
          xs={12}
          // justifyContent="center"
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={LadyPhoto} className={classes.img} />
          </div>
        </Grid>
        <Grid sm={6} item xs={12} className={classes.sizegrid}>
          <div>
            <div
            // className="flex justify-center "
            // style={{ display: "flex", flexWrap: "wrap" }}
            >
              <Typography className={classes.root}>
                About US
                <Divider className={classes.divisize} />
              </Typography>
              {/* <Typography className={classes.para}></Typography> */}
              <div className={classes.aboutpara}>
                <ul>
                  <li>
                    <div style={{ marginTop: "20px", display: "flex" }}>
                      <StarIcon className={classes.staricon} />
                      <Typography className={classes.para}>
                        We are offering resources to help improve your English
                        language learning and speaking skills.
                      </Typography>
                    </div>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      We are offering resources to help improve your English
                      language learning and speaking skills.
                    </Typography>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      We are offering resources to help improve your English
                      language learning and speaking skills.
                    </Typography>
                  </li>
                  <li style={{ marginTop: "20px", display: "flex" }}>
                    <StarIcon className={classes.staricon} />
                    <Typography className={classes.para}>
                      We are offering resources to help improve your English
                      language learning and speaking skills.
                    </Typography>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}