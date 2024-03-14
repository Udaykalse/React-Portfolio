import React, { useState } from "react";
import Style from "./Frontend.module.css";
import Divider from "@mui/material/Divider";
import { Box, Typography, Button } from "@mui/material";
import html2pdf from "html2pdf.js";

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

  const [containerHeight, setContainerHeight] = useState("100vh");

  const toggleVisibility = (section) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));

    if (isVisible.webTechnologies || isVisible.reactJS || isVisible.nodeJS) {
      setContainerHeight("120vh");
    } else {
      setContainerHeight("120vh");
    }
  };

  return (
    <div
      className={Style.container}
      id="resume-container"
      style={{
        height: containerHeight,
        backgroundColor:
          isVisible.nodeJS || isVisible.reactJS || isVisible.webTechnologies
            ? "lightgray"
            : "white",
      }}
    >
      <header className={Style.Header}>
        <h1 className={Style.heading}>Udaysinh Kalse</h1>
        <p className={Style.Text}>
          <span className={Style.SpanText}>932-599-9657</span>|
          <span className={Style.SpanText}>udaykalse123@gmail.com</span>|
          <span className={Style.SpanText}>
            <a
              href="https://www.linkedin.com/in/uday-kalse-2a3687249/"
              className={Style.SpanText}
            >
              linkedin
            </a>
          </span>
          |
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
      <Box display="flex" flexDirection="row">
        <Box>
          <p>
            <strong>Swami Ramanand Teerth Marathwada University</strong>
            <br />
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              Bachelor of Science in Computer Science
            </Typography>
          </p>
        </Box>
        <Box marginLeft={35}>
          <p>
            <span>Nanded, Maharashtra</span>
            <Typography variant="body1" style={{ fontStyle: "italic" }}>
              Aug. 2019 - Sep. 2022
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
    </div>
  );
}

export default Frontend;
