import { IDepartment } from "../Department/department.body";

export interface IRoleBody {
    id: number | null;
    role_name: string;
    role_code: string;
    department: IDepartment;
  }
  
export const roleBody: IRoleBody = {
    id: null,
    role_name: "",
    role_code: "",
    department: { name: "", dept_id: null },
  };