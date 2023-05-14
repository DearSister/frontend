import { React } from "react";
import { Grid, Typography, makeStyles, Divider } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const UseStyles = makeStyles((theme) => ({
  // <--------------Main Grid Container-------------------->
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "auto",
    color: "#01011F",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "18vw",
      paddingRight: "10vw",
    },
    [theme.breakpoints.down("md")]: {
      paddingLeft: "5vw",
      paddingRight: "5vw",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "3vw",
      paddingRight: "3vw",
    },
  },

  // <----------------------Apply Size on hr ------------------>
  divisize: {
    backgroundColor: "#F50834",
    marginBottom: "20px",
    borderRadius: "10vw",
    [theme.breakpoints.down("xs")]: {
      width: "15%",
      height: "5px",
    },
    [theme.breakpoints.up("sm")]: { width: "7vw", height: "5px" },
    [theme.breakpoints.up("md")]: { width: "10vw", height: "6px" },
    [theme.breakpoints.up("lg")]: { width: "6vw", height: "8px" },
  },

  // <---------------------Apply on Typography---------------->
  root: {
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "2vh",
      marginLeft: "4vw",
      fontSize: "1.7rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      paddingTop: "2vh",
      fontSize: "2rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2vh",
      fontSize: "3rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  // <----------------Paragraph---------------------->
  para: {
    color: "#01011F",
    width: "900px",
  },
  header: {
    paddingLeft: "1vw",
    [theme.breakpoints.up("lg")]: {
      paddingLeft: "15vw",
    },
  },
  accordionsize: {
    backgroundColor: "#01011F",
  },
  typosize: {
    color: "#fff",
    padding: "1px",
    fontSize: "1rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "1rem",
      fontWeight: "1000",
    },
    [theme.breakpoints.up("md")]: {
      paddingTop: "2vh",
      fontSize: "1rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "1rem",
    },
  },
}));

export default function Index() {
  const classes = UseStyles();

  return (
    <div
      style={{
        backgroundColor: "#02023D",
        align: "center",
        paddingBottom: "1vh",
      }}
    >
      <div className={classes.header}>
        <div>
          <Typography className={classes.root}>
            FAQS
            <Divider className={classes.divisize} />
          </Typography>
        </div>
      </div>
      <div>
        <Grid container className={classes.container} spacing={2}>
          {/* Use two columns on screens larger than md */}
          <Grid item xs={12} md={6}>
            <Accordion className={classes.accordionsize}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.typosize}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.typosize}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion className={classes.accordionsize}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.typosize}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.typosize}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion className={classes.accordionsize}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.typosize}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.typosize}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion className={classes.accordionsize}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.typosize}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.typosize}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion className={classes.accordionsize}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.typosize}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.typosize}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item xs={12} md={6}>
            <Accordion className={classes.accordionsize}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon style={{ color: "#fff" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.typosize}>
                  Accordion 1
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.typosize}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
