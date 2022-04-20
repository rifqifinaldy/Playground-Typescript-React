import { SyntheticEvent } from "react";

export interface IFormControl {
  e?: SyntheticEvent;
  tabIndex: number;
  edit: boolean;
  data: {};
}

export interface IEditForm {
  form: {
    edit: boolean;
    data: {};
  };
  changeFormStatus: (formStatus: IFormControl) => void;
}
