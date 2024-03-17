import { React, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ContentPasteGoIcon from "@mui/icons-material/ContentPasteGo";
import Button from "@mui/material/Button";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
export default function FolderList() {
  const [attempted, setAttempted] = useState(Array(20).fill(false)); // Track attempted quizzes
  const navigate = useNavigate();
  const handleAttemptClick = (index) => {
    setAttempted((prevAttempted) => {
      const newAttempted = [...prevAttempted];
      newAttempted[index] = true;
      return newAttempted;
    });
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [notAttemptQuiz, setNotAttemptQuiz] = useState(0);
  async function QuizData() {
    const cookie = document.cookie.split(";").find((c) => c.startsWith("jwt="));
    if (cookie) {
      try {
        console.log("Cookie", cookie);

        // Replace with your actual server address
        const url = "http://localhost:8000/quiz";

        const fetchOptions = {
          method: "GET",
          credentials: "include", // Include cookies in the request
          headers: {
            "Content-Type": "application/json",
          },
        };

        const response = await fetch(url, fetchOptions); // Await the response

        // Check for successful response (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json(); // Parse JSON response data
        // setUserData(responseData);
        console.log(responseData);
        setNotAttemptQuiz(responseData.notAttemptedQuizzes.length);
        // console.log("Response data:", userData);

        // Handle successful authentication (e.g., set state or redirect)
        // ... your logic here
      } catch (error) {
        console.error("Error verifying cookie:", error);
        // Redirect to login on error
        navigate("/login", { replace: true });
      }
    } else {
      console.log("Cookie not there");
      navigate("/login", { replace: true });
    }
  }

  // Call checkCookie on component mount
  useEffect(() => {
    QuizData();
  }, []);

  return (
    <List
      sx={{
        width: "80vw", // Default width for computer
        "@media (max-width: 600px)": {
          width: "90%", // Adjust width for mobile devices
          marginLeft: 2,
        },
        alignItem: "center",
        marginLeft: 5,
        marginTop: 5,
      }}
    >
      {" "}
      <>
        <ListItem
          sx={{
            borderRadius: 10, // Add border radius for shadow effect
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
            transition: "transform 0.3s ease-in-out", // Animate card appearance
            animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
            marginTop: 1,
            "&:hover": {
              transform: "scale(1.02)", // Slight scale on hover for visual feedback
            },
            backgroundColor: "263043;", // Set background color based on attempted state
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <ListItemText>
            <span
              style={{
                color: "white",
                fontWeight: "bold", // Makes the text bold
                fontSize: "1.2rem", // Base font size
                "@media (max-width: 768px)": {
                  fontSize: "1rem", // Adjust for smaller screens
                },
              }}
            >
              Don't miss out! You have {notAttemptQuiz} quizzes to try.
            </span>
          </ListItemText>
        </ListItem>
      </>
      <div style={{ height: "90vh", overflowY: "scroll" }}>
        {Array.from({ length: 17 }, (_, index) => (
          <ListItem
            key={index}
            sx={{
              borderRadius: 10, // Add border radius for shadow effect
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)", // Box shadow for subtle depth
              transition: "transform 0.3s ease-in-out", // Animate card appearance
              animation: "$cardAppear 1s ease-in-out forwards", // Animation for card appearance
              marginTop: 1,
              "&:hover": {
                transform: "scale(1.02)", // Slight scale on hover for visual feedback
              },
              backgroundColor: attempted[index] ? "blue" : "white", // Set background color based on attempted state
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <ContentPasteGoIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`Quiz ${index + 1}`}
              secondary={attempted[index] ? "Attempted" : "Not attempted"}
            >
              {/* "Not attempted" */}
              {/* {attempted[index] ? "Not attempted" : " "} */}
            </ListItemText>
            <Button
              variant="contained"
              disabled={attempted[index]} // Disable button if attempted
              onClick={() => handleAttemptClick(index)}
            >
              {attempted[index] ? "Attempted" : "Attempt"}
            </Button>
          </ListItem>
        ))}
      </div>
    </List>
  );
}
