import {
  Alert,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { useEffect, useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { employeeCreators, State } from "../../state";

const AddEmployee = () => {
  const dispatch = useDispatch();
  const { postEmployee } = bindActionCreators(employeeCreators, dispatch);
  const employee = useSelector((state: State) => state.employee);

  // Initial Form State
  const [body, setBody] = useState({
    full_name: "",
    employee_code: "",
    address: "",
    mobile_no: "",
    age: 22,
    npwp: "",
    role: "",
  });
  const [alert, setAlert] = useState({
    open: false,
    color: "success",
    text: "Loading",
  });

  useEffect(() => {
    console.log("onMount", employee);
    if (employee.loading === false) {
      if (employee.success) {
        setAlert({
          open: true,
          color: "success",
          text: "Data Has Been Saved",
        });
      } else {
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
    }
  }, [employee]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postEmployee(body);
    console.log("After Submit", employee);
  };

  const handleChange = (
    e: FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setBody({
      ...body,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <Paper variant="outlined">
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid px={1} py={2} container spacing={2}>
          <Grid item md={12}>
            <Typography ml={2} variant="h6">
              Register New Employee
            </Typography>
            <Divider />
          </Grid>
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
          <Grid container justifyContent="center" alignItems="center">
            <Grid item md={12}>
              <Divider>
                <small>Register This Employee</small>
              </Divider>
            </Grid>
            <Grid item md={6}>
              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
              >
                Submit
              </Button>
              <Button
                fullWidth
                onClick={() =>
                  setAlert({
                    open: true,
                    text: "TEST MESSAGE",
                    color: "success",
                  })
                }
              >
                TEST
              </Button>
              <Zoom in={alert.open}>
                <Alert
                  severity={alert.color === "success" ? "success" : "error"}
                >
                  {alert.text}
                </Alert>
              </Zoom>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddEmployee;
