import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SidebarMenuSX, SidebarMenu, SubMenu } from "./list.style";
import { Link, NavLink } from "react-router-dom";
import { hasChildren, icons, sidebarData, NavigationItem } from "./list.config";
import { FC, useState } from "react";
import {
  Avatar,
  Collapse,
  Divider,
  ListItem,
  ListItemAvatar,
} from "@mui/material";
import StringAvatar from "../Avatar/StringAvatar";
import { PageURL } from "../Title/page.config";

interface ActiveMenu {
  e: React.MouseEvent<HTMLDivElement, MouseEvent>;
  index: number;
}

export const SidebarNavMain: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleActive = (activeMenu: ActiveMenu) => {
    setSelectedIndex(activeMenu.index);
  };

  return (
    <SidebarMenu>
      <Divider>Profile</Divider>
      <ListItem>
        <ListItemAvatar>
          <Avatar {...StringAvatar("Rifqi Finaldy")} />
        </ListItemAvatar>
        <ListItemText primary="Rifqi Finaldy" secondary="Frontend Developer" />
      </ListItem>
      <Divider>Menu</Divider>
      {sidebarData.map((item, i) => {
        if (item.master === 0) {
          return (
            <MenuSidebar
              key={i}
              item={item}
              selectedIndex={selectedIndex}
              handleActive={handleActive}
            />
          );
        }
        return null;
      })}
      <Divider sx={{ mt: 1 }}>Master</Divider>
      {sidebarData.map((item, i) => {
        if (item.master === 1) {
          return (
            <MasterSidebar
              key={i}
              item={item}
              selectedIndex={selectedIndex}
              handleActive={handleActive}
            />
          );
        }
        return null;
      })}
    </SidebarMenu>
  );
};

const MasterSidebar: FC<{
  item: NavigationItem;
  selectedIndex: number;
  handleActive: (activeMenu: ActiveMenu) => void;
}> = ({ item, selectedIndex, handleActive }) => {
  const Component = hasChildren(item) ? MultiItem : SingleItem;
  return (
    <>
      <Component
        item={item}
        selectedIndex={selectedIndex}
        handleActive={handleActive}
      />
    </>
  );
};

const MenuSidebar: FC<{
  item: NavigationItem;
  selectedIndex: number;
  handleActive: (activeMenu: ActiveMenu) => void;
}> = ({ item, selectedIndex, handleActive }) => {
  const Component = hasChildren(item) ? MultiItem : SingleItem;
  return (
    <>
      <Component
        item={item}
        selectedIndex={selectedIndex}
        handleActive={handleActive}
      />
    </>
  );
};

const SingleItem: FC<{
  item: NavigationItem;
  selectedIndex: number;
  handleActive: (activeMenu: ActiveMenu) => void;
}> = ({ item, handleActive, selectedIndex }) => {
  const classes = SidebarMenuSX();
  const Icon = icons[item.icon];

  return (
    <NavLink className={classes.link} to={item.target}>
      <ListItemButton
        dense={true}
        selected={PageURL() === item.target}
        onClick={(e) => handleActive({ e: e, index: item.id })}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </NavLink>
  );
};

const MultiItem: FC<{
  item: NavigationItem;
  selectedIndex: number;
  handleActive: (activeMenu: ActiveMenu) => void;
}> = ({ item, handleActive, selectedIndex }) => {
  const classes = SidebarMenuSX();
  const Icon = icons[item.icon];
  const children = item.items;
  const [dropDown, setDropdown] = useState(false);

  const handleMultiple = (activeMenu: ActiveMenu) => {
    setDropdown((prev) => !prev);
    handleActive(activeMenu);
  };

  return (
    <>
      <ListItemButton
        dense={true}
        onClick={(e) => handleMultiple({ e: e, index: item.id })}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
        {dropDown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={dropDown} timeout="auto" unmountOnExit>
        {children.map((item, i) => {
          const SubIcon = icons[item.icon];
          return (
            <Link className={classes.link} to={item.target} key={i}>
              <SubMenu
                dense={true}
                selected={PageURL() === item.target}
                onClick={(e) => handleActive({ e: e, index: item.id })}
              >
                <ListItemIcon>
                  <SubIcon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </SubMenu>
            </Link>
          );
        })}
      </Collapse>
    </>
  );
};
