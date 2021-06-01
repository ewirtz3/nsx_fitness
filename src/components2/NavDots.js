import React from "react";
import { IconButton, Menu, MenuItem, Box } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function NavDots() {
  return (
    <Box id="nav-dots">
      <PopupState variant="popover" popupId="nav-dots">
        {(popupState) => (
          <React.Fragment>
            <IconButton {...bindTrigger(popupState)}>
              <MoreVertIcon fontSize="large" className="dots" />
            </IconButton>
            <Menu {...bindMenu(popupState)}>
              <MenuItem onClick={popupState.close}>Meet Nick</MenuItem>
              <MenuItem onClick={popupState.close}>Instagram</MenuItem>
              <MenuItem onClick={popupState.close}>Contact</MenuItem>
              <MenuItem onClick={popupState.close}>Socials</MenuItem>
            </Menu>
          </React.Fragment>
        )}
      </PopupState>
    </Box>
  );
}
