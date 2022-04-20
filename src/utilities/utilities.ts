import type { Location, Params } from "react-router-dom";

// GLOBAL VARIABEL
export const API_URL = process.env.REACT_APP_API_URL;
// Sidebar Width
export const drawerWidth: number = 240;
// Tanggal hari ini 
export const today = new Date();




// GENERATE COLOUR
export const stringToColor = (string: string) => {
  let hash = 0;
  let i;
  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

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

// Format Nominal Uang
export const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


