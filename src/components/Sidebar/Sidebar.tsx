import {FC} from "react";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {Drawer} from './SidebarStyle';
import { NavigationProps } from "../../utilities/interface";
import {SidebarNavMain} from "./List";

const Sidebar:FC<NavigationProps> = ({open, toggleDrawer}) => {
  return (
    <Drawer variant="permanent" open={open}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <SidebarNavMain />
    </Drawer>
  );
};

export default Sidebar;
