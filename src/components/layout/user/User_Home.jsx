import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Avatar from "@mui/material/Avatar";
import FlagIcon from "@mui/icons-material/Flag";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import FluorescentIcon from "@mui/icons-material/Fluorescent";
import InventoryIcon from "@mui/icons-material/Inventory";
import Invent_Card from "./Invent_Card";
// import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import { Award } from "react-award";
import "react-award/dist/react-award.css";
/* Inventory Card  */
function User_Home() {
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div style={{ display: "flex", alignItems: "center" }}>
            <PersonPinIcon
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                // color: "red",
                marginLeft: 10,
              }}
            >
              R
            </PersonPinIcon>
            <h1
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              Full Name
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
              // backgroundColor: "#f2f2f2",
              padding: "25px 15px",
              borderRadius: "5px",
              cursor: "pointer", // Make it appear clickable
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "5px",
              }}
            >
              <CrisisAlertIcon
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                className="icon"
              />
              <span
                style={{ marginLeft: 5, fontSize: "2em", fontWeight: "bold" }}
              >
                Quiz Points
              </span>
              <span
                style={{ marginLeft: 10, fontSize: "2em", fontWeight: "bold" }}
              >
                1
              </span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                marginBottom: "5px",
                alignItems: "center",
              }}
            >
              <FlagIcon
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                className="icon_score"
              />
              <span
                style={{ marginLeft: 5, fontSize: "2em", fontWeight: "bold" }}
              >
                Highest Score
              </span>
              <span
                style={{ marginLeft: 10, fontSize: "2em", fontWeight: "bold" }}
              >
                1
              </span>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FluorescentIcon
                style={{ fontSize: "2.5em", fontWeight: "bold" }}
                className="icon"
              />
              <span
                style={{ marginLeft: 5, fontSize: "2em", fontWeight: "bold" }}
              >
                Correct Answer
              </span>
              <span
                style={{ marginLeft: 10, fontSize: "2em", fontWeight: "bold" }}
              >
                1
              </span>
            </div>
          </div>
        </div>{" "}
        <div className="card">
          <div style={{ display: "flex", alignItems: "center" }}>
            <InventoryIcon
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              R
            </InventoryIcon>
            <h1
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              Inventory
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              marginBottom: "5px",
              marginTop: "20px",
              flexWrap: "wrap",
              "@media (max-width: 768px)": {
                cardContainer: {
                  flexDirection:
                    "no-wrap" /* Stack cards vertically on mobile */,
                  // width: "100px",
                },
              },
            }}
            className="card-container"
          >
            <Card
              size="lg"
              variant="plain"
              orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "30%",
                marginTop: "20px",
                marginBottom: "20px",
                "@media (max-width: 768px)": {
                  // Target screens below 768px (adjust as needed)
                  maxWidth: "90%", // Set full width for mobile
                  marginTop: "20px", // Adjust margin for mobile
                  marginBottom: "20px", // Adjust margin for mobile
                },
              }}
              style={{ marginLeft: 10, flex: "1 1" }}
            >
              <CardContent sx={{ gap: 1.5 }}>
                <AspectRatio rratio="10/8" objectFit="contain" variant="plain">
                  <img
                    alt=""
                    src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
                  />
                </AspectRatio>
                <CardContent style={{ marginTop: 20 }}>
                  <Typography level="title-lg">
                    Total Quizes Happened
                  </Typography>
                  <Typography fontSize="lg" fontWeight="bold" sx={{ mt: 0.5 }}>
                    32
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>{" "}
            <Card
              size="lg"
              variant="plain"
              orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "30%",
                marginTop: "20px",
                marginBottom: "20px",
                "@media (max-width: 768px)": {
                  // Target screens below 768px (adjust as needed)
                  maxWidth: "90%", // Set full width for mobile
                  marginTop: "20px", // Adjust margin for mobile
                  marginBottom: "20px", // Adjust margin for mobile
                },
              }}
              style={{ marginLeft: 10, flex: "1 1 300px" }}
            >
              <CardContent sx={{ gap: 1.5 }}>
                <AspectRatio ratio="10/8" objectFit="contain" variant="plain">
                  <img
                    alt=""
                    src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
                    // style={{ width: "100%", height: "100%" }}
                  />
                </AspectRatio>
                <CardContent style={{ marginTop: 20 }}>
                  <Typography level="title-lg">Completed Quiz</Typography>
                  <Typography fontSize="lg" fontWeight="bold" sx={{ mt: 0.5 }}>
                    32
                  </Typography>
                </CardContent>
              </CardContent>
            </Card>{" "}
            <Card
              size="lg"
              variant="plain"
              // orientation="horizontal"
              sx={{
                textAlign: "center",
                maxWidth: "30%",
                marginTop: "20px",
                marginBottom: "20px",
                "@media (max-width: 768px)": {
                  // Target screens below 768px (adjust as needed)
                  maxWidth: "90%", // Set full width for mobile
                  marginTop: "20px", // Adjust margin for mobile
                  marginBottom: "20px", // Adjust margin for mobile
                },
              }}
              style={{ marginLeft: 10, flex: "1 1 300px" }}
            >
              <CardContent sx={{ gap: 1.5 }}>
                <AspectRatio ratio="13/8" objectFit="contain" variant="plain">
                  <img
                    alt=""
                    src="https://static.vecteezy.com/system/resources/previews/006/409/485/original/people-thinking-to-make-decision-problem-solving-and-find-creative-ideas-with-question-mark-in-flat-cartoon-background-for-poster-illustration-vector.jpg"
                  />
                </AspectRatio>
                <CardContent>
                  <Typography level="title-lg">Incomplete Quiz</Typography>
                  <Typography fontSize="lg" fontWeight="bold" sx={{ mt: 0.5 }}>
                    32
                  </Typography>
                </CardContent>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{
                    "--variant-borderWidth": "2px",
                    borderRadius: 40,
                    borderColor: "primary.500",
                    mx: "auto",
                  }}
                >
                  Attempt Quiz
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="card">
          <div style={{ display: "flex", alignItems: "center" }}>
            <EmojiEventsIcon
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            ></EmojiEventsIcon>
            <h1
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                color: "white",
                marginLeft: 10,
              }}
            >
              Achievements
            </h1>
          </div>
          <Card
            size="lg"
            variant="plain"
            orientation="horizontal"
            sx={{
              textAlign: "center",
              maxWidth: "30%",
              marginTop: "20px",
              marginBottom: "20px",
              "@media (max-width: 768px)": {
                // Target screens below 768px (adjust as needed)
                maxWidth: "90%", // Set full width for mobile
                marginTop: "20px", // Adjust margin for mobile
                marginBottom: "20px", // Adjust margin for mobile
              },
            }}
            style={{ marginLeft: 10, flex: "1 1 300px" }}
          >
            <CardContent sx={{ gap: 1.5 }}>
              <AspectRatio ratio="10/8" objectFit="contain" variant="plain">
                <img
                  alt=""
                  src="https://raw.githubusercontent.com/fedemartinm/react-award/main/example/images/award.svg"
                />
              </AspectRatio>
              <CardContent style={{ marginTop: 20 }}>
                <Typography
                  level="title-lg"
                  fontSize="2em"
                  fontWeight="bold"
                  sx={{ mt: 0.5 }}
                >
                  {" "}
                  Beginner
                </Typography>
                <Typography
                  fontSize="lg"
                  fontWeight="bold"
                  sx={{ mt: 0.5 }}
                ></Typography>
              </CardContent>
            </CardContent>
          </Card>{" "}
        </div>
      </div>

      <div className="charts"></div>
    </main>
  );
}

export default User_Home;
