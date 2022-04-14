import {
  Alert,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Zoom,
  Stack,
} from "@mui/material";
import { useEffect, useState, FormEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { employeeCreators, State } from "../../state";
import { StatusCode } from "../../state/actions-types/responses.types";
import { EditForm, FormStatus } from "../../utilities/interface";

export interface EmployeeBody {
  id: number | null;
  full_name: string;
  employee_code: string;
  address: string;
  mobile_no: string;
  age: number;
  npwp: string;
  role: string;
}

const initialBody : EmployeeBody = {
  id : null,
  full_name : "",
  employee_code: "",
  address: "",
  mobile_no: "",
  age: 22,
  npwp: "",
  role: "",
}

const FormEmployee: FC<EditForm> = ({ form, changeFormStatus }) => {
  const dispatch = useDispatch();
  const { postEmployee, updateEmployee } = bindActionCreators(
    employeeCreators,
    dispatch
  );
  const employee = useSelector((state: State) => state.employee);

  // Initial Form State
  const [body, setBody] = useState<EmployeeBody>(initialBody);

  const [alert, setAlert] = useState({
    open: false,
    color: "success",
    text: "Loading",
  });

  useEffect(() => {
    console.log("onMount", employee);
    if (employee.responses.status === StatusCode.UPDATE) {
      setBody(employee.responses.data as EmployeeBody);
      setAlert({
        open: true,
        color: "success",
        text: "Data Has Been Saved",
      });
    } else if (employee.responses.status === StatusCode.CLIENT_ERROR) {
      setAlert({
        open: true,
        color: "error",
        text: "An Error Has Occured",
      });
    }
    setTimeout(() => {
      setAlert({
        open: false,
        color: "info",
        text: "Closing",
      });
    }, 5000);
  }, [employee]);

  useEffect(() => {
    console.log(form.data);
    if (form.edit) {
      setBody(form.data as EmployeeBody);
    } else {
      setBody(initialBody)
    }
  }, [form]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postEmployee(body);
    let submit = {
      e: e,
      tabIndex: 0,
      edit: true,
      data: body,
    };
    changeFormStatus(submit);
  };

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending EDIT Data", body);
    updateEmployee(body);
  };

  const handleChange = (
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setBody({
      ...body,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleClear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    let clear = {
      e: e,
      tabIndex: 0,
      edit: false,
      data: initialBody,
    };
    changeFormStatus(clear);
  };

  return (
    <Paper>
      <form onSubmit={(e) => (form.edit ? handleEdit(e) : handleSubmit(e))}>
        <Grid px={1} py={1} container spacing={2}>
          <Grid item md={6}>
            <TextField
              fullWidth
              value={body.full_name}
              autoFocus
              label="Employee Name"
              name="full_name"
              placeholder="Full Name"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                max: 100,
                min: 10,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              required
              value={body.employee_code}
              label="Employee Code"
              name="employee_code"
              placeholder="Employee Code Not NPWP"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              value={body.address}
              label="Address"
              id="address"
              name="address"
              placeholder="District, City"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              fullWidth
              value={body.mobile_no}
              label="Mobile No"
              id="mobile_no"
              name="mobile_no"
              placeholder="Mobile Phone Number"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              fullWidth
              value={body.age}
              label="Age"
              id="age"
              name="age"
              placeholder="Age (This Year)"
              size="small"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              value={body.npwp}
              label="NPWP"
              id="npwp"
              name="npwp"
              placeholder="NPWP"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              value={body.role}
              label="Role"
              id="role"
              name="role"
              placeholder="Role"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
        </Grid>
        {/* BUTTON WRAPPER */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={12}>
            <Divider>
              <small>{form.edit ? "Edit" : "Register"} This Employee</small>
            </Divider>
          </Grid>
          <Grid item md={3}>
            <Stack spacing={2} direction="row">
              <Button
                disabled={alert.open}
                fullWidth
                type="submit"
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
              <Button
                disabled={!form.edit}
                onClick={(e) => handleClear(e)}
                fullWidth
                color="info"
                variant="contained"
              >
                New
              </Button>
            </Stack>
          </Grid>
        </Grid>
        {/* RESPONSE WRAPPER */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={6}>
            <Zoom in={alert.open}>
              <Alert severity={alert.color === "success" ? "success" : "error"}>
                {alert.text}
              </Alert>
            </Zoom>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default FormEmployee;
