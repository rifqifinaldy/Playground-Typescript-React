import {
  Alert,
  Button,
  Divider,
  Grid,
  TextField,
  Zoom,
  Stack,
  Autocomplete,
} from "@mui/material";
import { useEffect, useState, FormEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import {
  postRole,
  resetRole,
  updateRole,
} from "../../state/action-creators/role.creators";
import {
  StatusCode,
  StatusMessage,
} from "../../state/actions-types/responses.types";
import { EditForm } from "../../utilities/interface";

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
  const dispatch = useDispatch();
  const { postRoleResult, updateRoleResult } = useSelector(
    (state: State) => state.role
  );

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
    console.log(postRoleResult)
    if (postRoleResult.status === StatusCode.SUCCESS) {
      setAlert({ open: true, color: "success", text: postRoleResult.message });
      setBody(postRoleResult.data as unknown as RoleBody);
    } else if (updateRoleResult.status === StatusCode.SUCCESS) {
      setAlert({ open: true, color: "success", text: updateRoleResult.message });
      setBody(updateRoleResult.data as unknown as RoleBody);
    } else if (
      updateRoleResult.status === StatusCode.ERROR ||
      postRoleResult.status === StatusCode.ERROR
    ) {
      setAlert({ open: true, color: "danger", text: StatusMessage.ERROR });
    }
    setTimeout(() => {
      setAlert({ open: false, color: "success", text: "Reloading" });
    }, 3000);
  }, [postRoleResult, updateRoleResult, dispatch]);

  // Cleanup Function
  useEffect(() => {
    return () => {
      console.log("leaving ROLE component")
      dispatch(resetRole());
    };
  }, [dispatch]);

  // Submit Function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postRole(body));
    let submit = {
      e: e,
      tabIndex: 0,
      edit: true,
      data: body,
    };
    changeFormStatus(submit);
  };

  // Edit Function
  useEffect(() => {
    if (form.edit) {
      setBody(form.data as RoleBody);
    } else {
      setBody(initialBody);
    }
  }, [form]);

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateRole(body));
    let submit = {
      e: e,
      tabIndex: 0,
      edit: true,
      data: body,
    };
    changeFormStatus(submit);
  };

  // Input Change Function
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

  const handleNew = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    <>
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
                onClick={(e) => handleNew(e)}
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
    </>
  );
};

export default FormRole;
