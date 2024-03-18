import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Landing from "./components/Landing.jsx";

const App = () => {
  return (
    <div
      style={{ width: "1510px", height: "680px", backgroundColor: "#eeeeee" }}
    >
      <Router>
        <Appbar />
        <Routes>
          <Route path={"/signin"} element={<Signin />} />
          <Route path={"/signup"} element={<Signup />} />
          <Route path={"/"} element={<Landing />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
