import { IRoleBody } from "../Role/role.body";

export interface IEmployeeBody {
    id: number | null;
    full_name: string;
    employee_code: string;
    address: string;
    mobile_no: string;
    age: number;
    npwp: string;
    role: IRoleBody;
  }
  
export const employeeBody: IEmployeeBody = {
    id: null,
    full_name: "",
    employee_code: "",
    address: "",
    mobile_no: "",
    age: 22,
    npwp: "",
    role: {
      id: null,
      role_name: "",
      role_code: "",
      department: { name: "", dept_id: null },
    },
  };