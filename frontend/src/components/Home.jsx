import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

import React from "react";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(/backgr.avif)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h2"} style={{ color: "white" }}>
          Welcome to Coursera. You want to be ?
        </Typography>
      </div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          style={{
            marginRight: "10px",
            fontSize: "1.5rem",
            color: "white",
            backgroundColor: "#03C03C",
          }}
          size={"large"}
          variant="contained"
        >
          Admin
        </Button>

        <Button
          style={{
            fontSize: "1.5rem",
            color: "white",
            backgroundColor: "#03C03C",
          }}
          size={"large"}
          variant="contained"
        >
          User
        </Button>
      </div>
    </div>
  );
};

export default Home;
