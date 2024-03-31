import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { adminType, userType } from "../store/selectors/home.js";
import { BASE_URL } from "../config.js";
import axios from "axios";
import { userState } from "../store/atoms/user.js";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);
  const admin = useRecoilValue(adminType);
  const user = useRecoilValue(userType);

  const handleSignIn = async () => {
    let url;

    if (admin) {
      url = `${BASE_URL}/admin/login`;
    } else {
      url = `${BASE_URL}/user/login`;
    }

    try {
      const res = await axios.post(
        url,
        {
          username: email,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      const data = res.data;

      localStorage.setItem("token", data.token);
      setUser({
        userEmail: email,
        isLoading: false,
      });
      console.log("done");
      navigate("/courses");
    } catch (error) {
      if (error.response) {
        console.error(
          "Server responded with status code:",
          error.response.status
        );
        console.error("Response data:", error.response.data);
      }
    }
  };

  return (
    <div>
      <div
        style={{
          paddingTop: 150,
          marginBottom: 10,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography variant={"h6"}>
          Welcome to Coursera. Sign in below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(evant11) => {
              let elemt = evant11.target;
              setEmail(elemt.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            type={"password"}
          />
          <br />
          <br />

          <Button size={"large"} variant="contained" onClick={handleSignIn}>
            {" "}
            Signin
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Signin;
