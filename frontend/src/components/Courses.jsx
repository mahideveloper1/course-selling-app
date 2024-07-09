import { useState, useEffect } from "react";
import { Card, Typography, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import axios from "axios";
import "./styles/Courses.css";

function Courses() {
  const [courses, setCourses] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const fetchCourses = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/courses/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const handleSearchInputChange = (event) => {
    setSearchKeyword(event.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <TextField
          label="Search Courses"
          variant="outlined"
          value={searchKeyword}
          onChange={handleSearchInputChange}
          className="search-box"
        />
      </div>
      <div className="course-container">
        {filteredCourses.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
}

export function Course({ course }) {
  const navigate = useNavigate();

  const handleViewClick = () => {
    if (course.imageLink) {
      const newWindow = window.open(course.imageLink, "_blank");
      if (
        !newWindow ||
        newWindow.closed ||
        typeof newWindow.closed == "undefined"
      ) {
        alert("The link could not be opened. Please update the course.");
      }
    } else {
      alert("No course link present. Please update the course.");
    }
  };

  return (
    <Card className="course-card">
      <Typography textAlign={"center"} variant="h5">
        {course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {course.description}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginTop: 50,
          paddingTop: "25px",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/course/" + course._id);
          }}
        >
          Edit
        </Button>
        <Button variant="contained" size="large" onClick={handleViewClick}>
          View
        </Button>
      </div>
    </Card>
  );
}

export default Courses;
