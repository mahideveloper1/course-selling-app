import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { homeState } from "../store/atoms/home.js";
import "./styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const setUserType = useSetRecoilState(homeState);

  const handleAdminClick = () => {
    setUserType({ isAdmin: true, isUser: false });
    navigate("/landing");
  };

  const handleUserClick = () => {
    setUserType({ isAdmin: false, isUser: true });
    navigate("/landing");
  };

  return (
    <div className="container">
      <Typography
        variant="h2"
        className="title"
        style={{ marginTop: "10px", marginBottom: "50px" }}
      >
        Welcome to Mahi Course App. You want to be?
      </Typography>
      <br />
      <div className="button-container">
        <Button
          style={{
            marginRight: "10px",
            fontSize: "1.5rem",
            color: "white",
            backgroundColor: "#03C03C",
          }}
          variant="contained"
          onClick={handleAdminClick}
        >
          Admin
        </Button>

        <Button
          style={{
            marginRight: "10px",
            fontSize: "1.5rem",
            color: "white",
            backgroundColor: "#03C03C",
          }}
          variant="contained"
          onClick={handleUserClick}
        >
          User
        </Button>
      </div>
    </div>
  );
};

export default Home;
