import {
  People,
  Dashboard,
  Speed,
  Festival,
  MonetizationOn,
  AddTask,
  AccountBalance,
  Engineering,
  SafetyDivider
} from "@mui/icons-material";

// DEKLARASI DATA DUMMY UNTUK SIDEBAR

export const icons = {
  Dashboard,
  Speed,
  Festival,
  People,
  MonetizationOn,
  AddTask,
  AccountBalance,
  Engineering,
  SafetyDivider
};

export interface ISidebarSubItem {
  id: number;
  text:string;
  icon: keyof typeof icons;
  target: string;
}

export interface ISidebarItem {
  id: number
  text: string;
  icon: keyof typeof icons;
  target: string;
  master: number;
  items: ISidebarSubItem[];
}

export const sidebarData: ISidebarItem[] = [
  {
    id: 0,
    text: "Dashboard",
    icon: "Dashboard",
    target: "/",
    master: 0,
    items: [],
  },
  {
    id: 1,
    text: "Performance",
    icon: "Speed",
    target: "/performance",
    master: 0,
    items: [],
  },
  {
    id: 2,
    text: "Event",
    icon: "Festival",
    target: "/festival",
    master: 0,
    items: [],
  },
  {
    id: 3,
    text: "Task",
    icon: "AddTask",
    target: "/task",
    master: 0,
    items: [],
  },
  {
    id: 4,
    text: "HR",
    icon: "People",
    target: "/employee",
    master: 1,
    items: [
      {
        id: 4.1,
        text: "Employee",
        icon: "Engineering",
        target: "/hr/employee",
      },
      {
        id: 4.2,
        text : "Role",
        icon : "SafetyDivider",
        target: "/hr/role"
      }
    ],
  },
  {
    id: 5,
    text: "Bank",
    icon: "AccountBalance",
    target: "/bank",
    master: 1,
    items: []
  }
];

// CHECK ITEM KOSONG APA GAK

export function hasChildren(item:ISidebarItem) {
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
