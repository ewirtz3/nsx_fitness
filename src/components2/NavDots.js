import React, { useState } from "react";
import { IconButton, Menu, MenuItem, Box } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function NavDots() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box id="nav-dots">
      {/* <PopupState variant="popover" popupId="nav-dots">
        {(popupState) => ( */}
      {/* <React.Fragment> */}
      <IconButton
        // {...bindTrigger(popupState)}
        id="nav-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <MoreVertIcon fontSize="large" className="dots" />
      </IconButton>
      <Menu
        id="menu"
        aria-labelledby="nav-button"
        // {...bindMenu(popupState)}
        anchorEl={null}
        // getContentAnchorEl={null}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        // anchorOrigin={{ vertical: "top", horizontal: "left" }}
        // transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={handleClose}>Meet Nick</MenuItem>
        <MenuItem onClick={handleClose}>Instagram</MenuItem>
        <MenuItem onClick={handleClose}>Contact</MenuItem>
        <MenuItem onClick={handleClose}>Socials</MenuItem>
      </Menu>
      {/* </React.Fragment> */}
      {/* )} */}
      {/* </PopupState> */}
    </Box>
  );
}
