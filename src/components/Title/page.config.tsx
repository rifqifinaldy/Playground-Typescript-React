import { capitalize } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { getRoutePath, pageName } from "../../utilities/tools/route.name";

export const PageURL = (): string => {
  const location = useLocation();
  const params = useParams();
  const path = getRoutePath(location, params);
  return path.toString();
};

export const PageName = () => {
  return <>{capitalize(pageName(PageURL()))}</>;
};
