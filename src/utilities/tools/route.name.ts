import type { Location, Params } from "react-router-dom";

// GET CURRENT ROUTE
export const getRoutePath = (location: Location, params: Params): string => {
  const { pathname } = location;
  if (!Object.keys(params).length) {
    return pathname;
  }
  let path = pathname;
  Object.entries(params).forEach(([paramName, paramValue]) => {
    if (paramValue) {
      path = path.replace(paramValue, `:${paramName}`);
    }
  });
  return path;
};
// USAGE EXAMPLE => getRoutePath(location, params)

// Page Name
export const pageName = (path: string): string => {
  let name: string;
  if (path === "/") {
    name = "Dashboard";
  } else {
    name = path.split("/").pop()!;
  }
  return name;
};
// USAGE EXAMPLE => pageName(urlPath)
