import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import { FC } from "react";

interface PageTitleProps {
  title: string | JSX.Element;
  icon?: any;
  align?: "left" | "center" | "right";
}

const PageTitle: FC<PageTitleProps> = ({ title, icon, align }) => {
  return (
    <>
      <Divider textAlign={align}>
        <Box sx={{ display:"flex", justifyContent:"spaceBetween", alignItems:"center" }}>
          <Box sx={{ mr:1, color:"gray" }} component="span">{icon}</Box> <Box sx={{ fontWeight: "bold" }} component="span">{title}</Box>
        </Box>
      </Divider>
    </>
  );
};

export default PageTitle;
