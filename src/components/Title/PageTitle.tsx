import { Divider, Typography } from "@mui/material";
import {FC} from "react";

interface PageTitleProps {
    title : string,
    icon?: any
}

const PageTitle:FC<PageTitleProps> = ({title, icon}) => {
  return (
    <>
      <Typography mt={1} variant="h6" align="center">
        {title}
      </Typography>
      <Divider variant="middle">
        {icon}
      </Divider>
    </>
  );
};

export default PageTitle;
