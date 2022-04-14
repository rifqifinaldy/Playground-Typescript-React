// Tempat Menampung Interface Global

import { SyntheticEvent } from "react";

export interface NavigationProps {
  open: boolean;
  toggleDrawer?: () => void;
}

// Form Status UNTUK EDIT / CREATE
export interface FormStatus {
  e?: SyntheticEvent;
  tabIndex: number;
  edit: boolean;
  data: {};
}

export interface EditForm {
  form: {
    edit: boolean,
    data: {},
  }
  changeFormStatus: (formStatus: FormStatus) => void;
}