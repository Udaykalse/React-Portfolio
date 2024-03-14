import React, { useState } from "react";
import {
  AppBar,
  Typography,
  Toolbar,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import CodeIcon from "@mui/icons-material/Code";
import DrawerComp from "./DrawerComp";

const PAGES = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Skills", path: "/skills" },
  {
    name: "Resume",
    dropdown: true,
    options: [
      { name: "Frontend", path: "/frontend" },
      { name: "Backend", path: "/backend" },
    ],
  },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Blogs", path: "/blogs" },
  { name: "Contact Me", path: "/contact" },
  { name: "Day", path: "/day" },
];

const Header = () => {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenuClick = (event, index) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <CodeIcon />
          <Typography>Uday</Typography>
          {isMatch ? (
            <DrawerComp />
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
              >
                {PAGES.map((page, index) =>
                  page.dropdown ? (
                    <Tab
                      key={index}
                      label={page.name}
                      aria-controls={`resume-menu-${index}`}
                      aria-haspopup="true"
                      component="button"
                      onClick={(event) => handleMenuClick(event, index)}
                    />
                  ) : (
                    <Tab
                      key={index}
                      label={page.name}
                      component={Link}
                      to={page.path}
                    />
                  )
                )}
              </Tabs>

              <Button variant="contained" sx={{ marginLeft: "10px" }}>
                Day
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Menu
        id="resume-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {PAGES.find((page) => page.name === "Resume")?.options.map(
          (option, index) => (
            <MenuItem
              key={index}
              onClick={handleClose}
              component={Link}
              to={option.path}
            >
              {option.name}
            </MenuItem>
          )
        )}
      </Menu>

      <Box sx={{ marginTop: isMatch ? "18%" : "4%" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Header;
