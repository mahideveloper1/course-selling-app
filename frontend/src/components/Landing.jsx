import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userEmailState } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading.js";
import { adminType, userType } from "../store/selectors/home.js";

export const Landing = () => {
  const navigate = useNavigate();
  const userEmail = useRecoilValue(userEmailState);
  const userLoading = useRecoilValue(isUserLoading);
  const admin = useRecoilValue(adminType);
  const user = useRecoilValue(userType);

  if (admin)
    return (
      <div>
        <Grid container style={{ padding: "5vw" }}>
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ marginTop: 100 }}>
              <Typography variant={"h2"}>Coursera Admin</Typography>
              <Typography variant={"h5"}>
                A place to learn, earn and grow
              </Typography>
              {!userLoading && !userEmail && (
                <div style={{ display: "flex", marginTop: 20 }}>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      size={"large"}
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
                      size={"large"}
                      variant={"contained"}
                      onClick={() => {
                        navigate("/signin");
                      }}
                    >
                      Signin
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div></div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
            <img src={"/class.jpg"} width={"100%"} height={"70%"} />
          </Grid>
        </Grid>
      </div>
    );
  if (user) {
    return (
      <div>
        <Grid container style={{ padding: "5vw" }}>
          <Grid item xs={12} md={6} lg={6}>
            <div style={{ marginTop: 100 }}>
              <Typography variant={"h2"}>User Admin</Typography>
              <Typography variant={"h5"}>
                A place to learn, earn and grow
              </Typography>
              {!userLoading && !userEmail && (
                <div style={{ display: "flex", marginTop: 20 }}>
                  <div style={{ marginRight: 10 }}>
                    <Button
                      size={"large"}
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
                      size={"large"}
                      variant={"contained"}
                      onClick={() => {
                        navigate("/signin");
                      }}
                    >
                      Signin
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div></div>
          </Grid>
          <Grid item xs={12} md={6} lg={6} style={{ marginTop: 20 }}>
            <img src={"/class.jpg"} width={"100%"} height={"70%"} />
          </Grid>
        </Grid>
      </div>
    );
  }
};

export default Landing;
