import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height: "70px", backgroundColor: "#A9A9A9" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant={"h6"}>Mahi Courses</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signup");
              }}
            >
              Signup
            </Button>
          </div>
          <div>
            <Button
              variant={"contained"}
              onClick={() => {
                navigate("/signin");
              }}
            >
              Signin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
