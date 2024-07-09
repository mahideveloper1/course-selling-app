import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Card, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { userState } from "../store/atoms/user.js";
import { useRecoilValue } from "recoil";
import { adminType, userType } from "../store/selectors/home.js";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const admin = useRecoilValue(adminType);
  const user = useRecoilValue(userType);

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
          Welcome to Mahi Course App. Sign up below
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card varint={"outlined"} style={{ width: 400, padding: 20 }}>
          <TextField
            onChange={(event) => {
              setEmail(event.target.value);
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

          <Button
            size={"large"}
            variant="contained"
            onClick={async () => {
              const url = admin
                ? `${BASE_URL}/admin/signup`
                : `${BASE_URL}/user/signup`;
              try {
                const response = await axios.post(url, {
                  username: email,
                  password: password,
                });
                const data = response.data;
                localStorage.setItem("token", data.token);
                setUser({ userEmail: email, isLoading: false });
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
            }}
          >
            {" "}
            Signup
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
