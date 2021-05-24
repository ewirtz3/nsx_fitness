import React from "react";
import { IconButton, Menu, MenuItem, Icon, Box } from "@material-ui/core";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";

export default function NavDots() {
  return (
    <Box id="nav-dots" display="flex" justifyContent="flex-end">
      <PopupState variant="popover" popupId="nav-dots">
        {(popupState) => (
          <React.Fragment>
            <IconButton {...bindTrigger(popupState)}>
              <Icon className="fas fa-ellipsis-v red-color"></Icon>
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
