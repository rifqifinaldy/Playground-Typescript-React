import { FC } from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Drawer } from "./sidebar.style";
import { NavigationProps } from "../../utilities/interface";
import { SidebarNavMain } from "./List";
import {
  Typography,
} from "@mui/material";

const Sidebar: FC<NavigationProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer variant="permanent" open={open} elevation={3}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: [1],
        }}
      >
        <Typography variant="h6" sx={{ justifySelf: "flex-start" }}>
          EM-Ploy
        </Typography>
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <SidebarNavMain />
    </Drawer>
  );
};

export default Sidebar;
