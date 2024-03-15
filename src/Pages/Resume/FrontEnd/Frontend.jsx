import React, { useState } from "react";
import html2pdf from "html2pdf.js";
import Style from "./Frontend.module.css";
import Divider from "@mui/material/Divider";
import { Box, Typography, Button } from "@mui/material";

function Frontend() {
  const handleDownloadPDF = () => {
    const element = document.getElementById("resume-container");
    html2pdf().from(element).save();
  };

  const [isVisible, setIsVisible] = useState({
    webTechnologies: false,
    reactJS: false,
    nodeJS: false,
  });

  const [containerHeight, setContainerHeight] = useState("auto");

  const toggleVisibility = (section) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
    setContainerHeight(
      isVisible.webTechnologies || isVisible.reactJS || isVisible.nodeJS
        ? "auto"
        : "auto"
    );
  };

  return (
    <Box
      className={Style.container}
      id="resume-container"
      sx={{
        height: { xs: "auto", sm: containerHeight },
        width: { xs: "100%", sm: "100%" },
        ml: { xs: "-10%", sm: "25%" },
        backgroundColor:
          isVisible.nodeJS || isVisible.reactJS || isVisible.webTechnologies
            ? "lightgray"
            : "white",
      }}
    >
      <header
        className={Style.Header}
        sx={{
          height: { xs: "auto", sm: "auto" },
          width: { xs: "100%", sm: "100%" },
        }}
      >
        <h1 className={Style.heading}>Udaysinh Kalse</h1>
        <p
          sx={{
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            justifyContent: { lg: "space-between" },
          }}
        >
          <span className={Style.SpanText}>932-599-9657</span>{" "}
          <span sx={{ display: { xs: "none", sm: "inline" } }}>|</span>
          <span className={Style.SpanText}>udaykalse123@gmail.com</span>{" "}
          <span sx={{ display: { xs: "none", sm: "inline" } }}>|</span>
          <span className={Style.SpanText}>
            <a
              href="https://www.linkedin.com/in/uday-kalse-2a3687249/"
              className={Style.SpanText}
            >
              linkedin
            </a>
          </span>
          <span sx={{ display: { xs: "none", sm: "inline" } }}>|</span>
          <span className={Style.SpanText}>
            <a href="https://github.com/Udaykalse" className={Style.SpanText}>
              github
            </a>
          </span>
        </p>
      </header>
      <Divider
        variant="middle"
        sx={{ margin: "10px", borderStyle: "solid", borderWidth: "1px" }}
      />
      <h2 className={Style.sectiontitle}>Education</h2>
      <Divider
        variant="middle"
        sx={{ marginTop: "-10px", borderStyle: "solid", borderWidth: "1px" }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          justifyContent: { lg: "space-between" },
        }}
      >
        <Box className="box p-4">
          <strong>Swami Ramanand Teerth Marathwada University</strong>
          <br />
          <p className="italic">Bachelor of Science in Computer Science</p>
        </Box>
        <Box className="box p-4">
          <span>Nanded, Maharashtra</span>
          <p className="italic">Aug. 2019 - Sep. 2022</p>
        </Box>
      </Box>

      <Divider
        variant="middle"
        sx={{ marginTop: "-10px", borderStyle: "solid", borderWidth: "1px" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", lg: "row" },
          justifyContent: { lg: "space-between" },
        }}
      >
        <Box className="box p-4">
          <p>
            <strong>Maharashtra JR.Mahavidylaya,Latur</strong>
            <br />
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              Higher Secondary Education
            </Typography>
          </p>
        </Box>
        <Box className="box p-4">
          <p>
            <span>Latur, Maharashtra</span>
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              Aug. 2019 with 52.77%
            </Typography>
          </p>
        </Box>
      </Box>
      <h2 className={Style.sectiontitle}>Experience</h2>
      <Divider
        variant="middle"
        sx={{ margin: "10px", borderStyle: "solid", borderWidth: "1px" }}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ marginRight: 4 }}>
          <Typography variant="subtitle1">
            <strong>React Web Developer Intern</strong>
            <br />
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              FirstStore, Oct 2023 - Feb 2025
            </Typography>
          </Typography>
          <ul>
            <Typography component="li" variant="body1">
              Developed responsive websites using HTML, CSS, and JavaScript.
            </Typography>
            <Typography component="li" variant="body1">
              Collaborated with the design team to implement website mockups.
            </Typography>
            <Typography component="li" variant="body1">
              Participated in code reviews and testing to ensure high-quality
              code.
            </Typography>
          </ul>
        </Box>
        <Box>
          <Typography variant="subtitle1">
            <strong>React.js Developer (Fresher)</strong>
            <br />
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              FirstStore, Feb 2024 - Present
            </Typography>
          </Typography>
          <ul>
            <Typography component="li" variant="body1">
              Developed responsive websites using React.js and Material-UI.
            </Typography>
            <Typography component="li" variant="body1">
              Collaborated with the design team to implement website mockups.
            </Typography>
            <Typography component="li" variant="body1">
              Participated in code reviews and testing to ensure high-quality
              code.
            </Typography>
            <Typography component="li" variant="body1">
              Assisted in debugging and troubleshooting technical issues.
            </Typography>
            <Typography component="li" variant="body1">
              Learned and applied best practices in React.js development.
            </Typography>
          </ul>
        </Box>
      </Box>

      <h2 className={Style.sectiontitle}>Projects</h2>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ marginRight: 4 }}>
          <Typography variant="subtitle1">
            <strong>Blog App</strong>
            <br />
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              Full Stack Blog Application with MERN (MongoDB, Express.js,
              React.js, Node.js)
            </Typography>
          </Typography>
          <ul>
            <Typography component="li" variant="body1">
              Frontend design and development using React.js, implementing
              responsive UI/UX features for enhanced user experience.
            </Typography>
            <Typography component="li" variant="body1">
              Backend RESTful API creation with Node.js and Express.js,
              facilitating seamless communication between server and client.
            </Typography>
            <Typography component="li" variant="body1">
              Database management and schema design with MongoDB, ensuring
              efficient data storage and retrieval for dynamic content
              management.
            </Typography>
          </ul>
        </Box>
        <Box>
          <Typography variant="subtitle1">
            <strong> RESTful APIs </strong>
            <br />
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              RESTful APIs using Node.js for efficient data handling and
              seamless integration.
            </Typography>
          </Typography>
          <ul>
            <Typography component="li" variant="body1">
              Implemented CRUD operations (Create, Read, Update, Delete) using
              Node.js and Express.js to build RESTful APIs.
            </Typography>
            <Typography component="li" variant="body1">
              Managed data storage and retrieval using MongoDB Atlas or any
              other database technology.
            </Typography>
            <Typography component="li" variant="body1">
              Ensured adherence to RESTful principles for designing scalable and
              maintainable APIs.
            </Typography>
            <Typography component="li" variant="body1">
              Implemented error handling middleware to catch and respond to
              errors gracefully, improving the robustness of the API.
            </Typography>
          </ul>
        </Box>
      </Box>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <Box
        className={Style.skills}
        sx={{ display: "flex", flexDirection: "column", margin: "10px" }}
      >
        <h2 className={Style.sectiontitle}>Technical Skills</h2>

        <Typography
          variant="body1"
          sx={{ margin: "10px" }}
          className={Style.skill}
          onClick={() => toggleVisibility("webTechnologies")}
        >
          Web TECHNOLOGIES :
        </Typography>

        {isVisible.webTechnologies && (
          <ul sx={{ backgroundColor: "white", padding: 0 }}>
            <li>Good Knowledge of HTML tags.</li>
            <li>
              Good Knowledge of Headings, Paragraph, Styles, tables and lists.
            </li>
            <li>Good in CSS Styles & Selectors</li>
          </ul>
        )}

        <Typography
          variant="body1"
          sx={{ margin: "10px" }}
          className={Style.skill}
          onClick={() => toggleVisibility("reactJS")}
        >
          React js :
        </Typography>

        {isVisible.reactJS && (
          <ul sx={{ backgroundColor: "white", padding: 0 }}>
            <li>
              Solid understanding of React.js fundamentals (component-based
              development, virtual DOM).
            </li>
            <li>
              Completed projects demonstrating dynamic and interactive user
              interface development.
            </li>
            <li>
              Familiarity with React Router for single-page application
              development.
            </li>
            <li>
              Basic knowledge of React hooks for managing state and implementing
              functionality.
            </li>
            <li>Exposure to Redux for state management.</li>
          </ul>
        )}

        <Typography
          variant="body1"
          sx={{ margin: "10px" }}
          className={Style.skill}
          onClick={() => toggleVisibility("nodeJS")}
        >
          Node. js :
        </Typography>

        {isVisible.nodeJS && (
          <ul>
            <li>
              Implemented server-side logic and RESTful APIs using Node.js for
              efficient web application development.
            </li>
            <li>
              Proficient in using npm for package management and demonstrated
              the ability to integrate databases seamlessly.
            </li>
            <li>
              Applied Node.js skills in projects, showcasing a solid
              understanding of server-side development and JavaScript
              programming.
            </li>
          </ul>
        )}
      </Box>

      <Button
        onClick={handleDownloadPDF}
        variant="contained"
        color="primary"
        sx={{ margin: "10px" }}
      >
        Download as PDF
      </Button>
    </Box>
  );
}

export default Frontend;
