import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SidebarSX from "./list.style";
import { Link } from "react-router-dom";
import { hasChildren, icons, sidebarData, NavigationItem } from "./list.config";
import { FC, useState } from "react";
import { Chip, Collapse, Divider, List } from "@mui/material";

export const SidebarNavMain: FC = () => {
  return (
    <List component="nav">
      {sidebarData.map((item, i) => {
        if (item.master === 0) {
          return <MenuSidebar key={i} item={item} />;
        } return null
      })}
      <Divider>
        <Chip label="Master" />
      </Divider>
      {sidebarData.map((item, i) => {
        if (item.master === 1) {
          return <MasterSidebar key={i} item={item} />;
        } return null
      })}
    </List>
  );
};

const MasterSidebar: FC<{ item: NavigationItem }> = ({ item }) => {
  const Component = hasChildren(item) ? MultiItem : SingleItem;
  return (
    <>
      <Component item={item} />
    </>
  );
};

const MenuSidebar: FC<{ item: NavigationItem }> = ({ item }) => {
  const Component = hasChildren(item) ? MultiItem : SingleItem;
  return (
    <>
      <Component item={item} />
    </>
  );
};

const SingleItem: FC<{ item: NavigationItem }> = ({ item }) => {
  const classes = SidebarSX();
  const Icon = icons[item.icon];
  return (
    <Link className={classes.link} to={item.target}>
      <ListItemButton>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText className={classes.text} primary={item.text} />
      </ListItemButton>
    </Link>
  );
};

const MultiItem: FC<{ item: NavigationItem }> = ({ item }) => {
  const classes = SidebarSX();
  const Icon = icons[item.icon];
  const children = item.items;
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={item.text} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton component="div">
          {children.map((item, i) => {
            const SubIcon = icons[item.icon];
            return (
              <Link className={classes.link} to={item.target} key={i}>
                <ListItemButton>
                  <ListItemIcon>
                    <SubIcon />
                  </ListItemIcon>
                  <ListItemText className={classes.text} primary={item.text} />
                </ListItemButton>
              </Link>
            );
          })}
        </ListItemButton>
      </Collapse>
    </>
  );
};
