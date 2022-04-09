import {
  Alert,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState, FormEvent } from "react";

const AddEmployee = () => {
  const [body, setBody] = useState({
    full_name: "",
    employee_code: "",
    address: "",
    mobile_no: "",
    age: 22,
    npwp: "",
    role: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitting..");
    console.log("SendData", body);
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
              <Alert severity="success">
                This is a success alert — check it out!
              </Alert>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddEmployee;
