import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import NavbarSX from "./ListStyle";
import { Link } from "react-router-dom";

const SidebarNavMain = () => {
  const classes = NavbarSX();
  const listItem = [
    {
      text: "Dashboard",
      icon: <DashboardIcon />,
      target: "/",
    },
    {
      text: "Employee",
      icon: <PeopleIcon />,
      target: "/employee",
    },
  ];

  return (
    <>
      {listItem.map((item, i) => {
        return (
          <Link className={classes.link} to={item.target} key={i}>
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText className={classes.text} primary={item.text} />
          </ListItemButton>
          </Link>
        );
      })}
    </>
  );
};

export default SidebarNavMain;
