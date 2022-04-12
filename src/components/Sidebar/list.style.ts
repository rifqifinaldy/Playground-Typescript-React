import { makeStyles } from "@mui/styles";
import theme from "../../style/theme";
import { styled } from "@mui/material/styles";
import { ListItemButton, List } from "@mui/material";

export const SidebarMenuSX = makeStyles({
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
});

export const SidebarMenu = styled(List)({
  // selected and (selected + hover) states
  "&& .Mui-selected, && .Mui-selected:hover": {
    backgroundColor: theme.palette.primary.main,
    borderRight: "8px solid" + theme.palette.info.main,
    "&, & .MuiListItemIcon-root": {
      color: "#fefefe",
    },
  },
  // hover states
  "& .MuiListItemButton-root:hover": {
    backgroundColor: theme.palette.secondary.light,
    "&, & .MuiListItemIcon-root": {
      color: "#131313",
    },
  },
});

export const SubMenu = styled(ListItemButton)({
  paddingLeft: "30px",
  display: "flex",
  alignItems: "flex-end",
});
