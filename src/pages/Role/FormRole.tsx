import {
  Alert,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Zoom,
  Stack,
  Autocomplete,
} from "@mui/material";
import { useEffect, useState, FormEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { employeeCreators, State } from "../../state";
import { StatusCode } from "../../state/actions-types/responses.types";
import { EditForm, FormStatus } from "../../utilities/interface";

interface Department {
  dept_id: number | null;
  name: string;
}

export interface RoleBody {
  id: number | null;
  role_name: string;
  role_code: string;
  department: Department;
}

const initialBody: RoleBody = {
  id: null,
  role_name: "",
  role_code: "",
  department: { name: "", dept_id: null },
};

const FormRole: FC<EditForm> = ({ form, changeFormStatus }) => {
  // Initial Form State
  const [body, setBody] = useState<RoleBody>(initialBody);
  const [alert, setAlert] = useState({
    open: false,
    color: "success",
    text: "Loading",
  });

  //   Hardcoded Dept Data
  const departmentOpt = [
    { dept_id: null, name: "" },
    { dept_id: 0, name: "HR" },
    { dept_id: 1, name: "Engineer" },
    { dept_id: 2, name: "Marketing" },
    { dept_id: 3, name: "Finance" },
    { dept_id: 4, name: "Operational" },
  ];

  useEffect(() => {
    console.log("onMount");
  }, []);

  useEffect(() => {
    console.log(form.data);
    if (form.edit) {
      setBody(form.data as RoleBody);
    } else {
      setBody(initialBody);
    }
  }, [form]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let submit = {
      e: e,
      tabIndex: 0,
      edit: true,
      data: body,
    };
    changeFormStatus(submit);
    console.log(body);
  };

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Sending EDIT Data", body);
  };

  const handleChange = (
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setBody({
      ...body,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const autoChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: Department | null
  ) => {
    if (value !== null) {
      setBody({
        ...body,
        department: { name: value!.name, dept_id: value!.dept_id },
      });
    } else {
      setBody({
        ...body,
        department: { name: "", dept_id: null },
      });
    }
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
              value={body.role_code}
              autoFocus
              label="Role Code"
              name="role_code"
              placeholder="Ex : ENG"
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
              value={body.role_name}
              label="Role Name"
              name="role_name"
              placeholder="Ex : Frontend Developer"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <Grid item md={6}>
            <Autocomplete
              options={departmentOpt}
              getOptionLabel={(option: Department) => option.name}
              isOptionEqualToValue={(option, value) =>
                option.name === value.name
              }
              onChange={(event, value) => autoChange(event, value)}
              value={body.department}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Department"
                  placeholder="Select Department for this Role"
                  value={body.department}
                  size="small"
                  type="text"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        {/* BUTTON WRAPPER */}
        <Grid container justifyContent="center" alignItems="center">
          <Grid item md={12}>
            <Divider>
              <small>{form.edit ? "Edit This Role" : "Create New Role"}</small>
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

export default FormRole;
