import {
  People,
  Dashboard,
  Speed,
  Festival,
  MonetizationOn,
  AddTask
} from "@mui/icons-material";

// DEKLARASI DATA DUMMY UNTUK SIDEBAR

export const icons = {
  Dashboard,
  Speed,
  Festival,
  People,
  MonetizationOn,
  AddTask
};

export interface NavigationSubItem {
  text:string;
  icon: keyof typeof icons;
  target: string;
}

export interface NavigationItem {
  text: string;
  icon: keyof typeof icons;
  target: string;
  master: number;
  items: NavigationSubItem[];
}

export const sidebarData: NavigationItem[] = [
  {
    text: "Dashboard",
    icon: "Dashboard",
    target: "/",
    master: 0,
    items: [],
  },
  {
    text: "Performance",
    icon: "Speed",
    target: "/performance",
    master: 0,
    items: [],
  },
  {
    text: "Event",
    icon: "Festival",
    target: "/festival",
    master: 0,
    items: [],
  },
  {
    text: "Task",
    icon: "AddTask",
    target: "/task",
    master: 0,
    items: [],
  },
  {
    text: "HR",
    icon: "People",
    target: "/employee",
    master: 1,
    items: [
      {
        text: "Employee",
        icon: "People",
        target: "/hr/employee",
      },
    ],
  },
];

// CHECK ITEM KOSONG APA GAK

export function hasChildren(item:NavigationItem) {
  const { items: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) {
    return false;
  }

  return true;
}
