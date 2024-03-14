import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

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

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <React.Fragment>
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List>
            {PAGES.map((page, index) => (
              <React.Fragment key={index}>
                {page.dropdown ? (
                  <ListItemButton onClick={handleMenuClick}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                ) : (
                  <ListItemButton component={Link} to={page.path}>
                    <ListItemText primary={page.name} />
                  </ListItemButton>
                )}
              </React.Fragment>
            ))}
          </List>
        </Drawer>
        <IconButton
          sx={{ color: "white", marginLeft: "auto" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {PAGES.find((page) => page.dropdown)?.options.map((option, index) => (
            <MenuItem key={index} component={Link} to={option.path} onClick={handleClose}>
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </React.Fragment>
    </>
  );
};

export default DrawerComp;
