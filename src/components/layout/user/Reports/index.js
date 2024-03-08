import React from "react";
import FlagIcon from "@mui/icons-material/Flag";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import FluorescentIcon from "@mui/icons-material/Fluorescent";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonPinIcon from "@mui/icons-material/PersonPin";

/* Inventory Card  */
function User_Report() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Reports</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div style={{ display: "flex", alignItems: "center" }}>
            <PersonPinIcon
              style={{
                fontSize: "2em",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            ></PersonPinIcon>
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
                marginBottom: "10px",
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },
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
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },
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
                borderRadius: 10, // Add border radius for shadow effect
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
                transition: "transform 0.3s ease-in-out", // Animate card appearance
                animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
                "&:hover": {
                  transform: "scale(1.02)", // Slight scale on hover for visual feedback
                },
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
      </div>

      <div className="charts"></div>
    </main>
  );
}

export default User_Report;
