import {
  Alert,
  Button,
  Divider,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

const AddEmployee = () => {
  return (
    <Paper variant="outlined">
      <form>
        <Grid
          px={1}
          py={2}
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={12}>
            <Typography ml={2} variant="h6">
              Register New Employee
            </Typography>
            <Divider />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="Employee Name"
              id="employee-name"
              name="full_name"
              placeholder="Full Name"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="Employee Code"
              id="employee-code"
              name="employee_code"
              placeholder="Employee Code Not NPWP"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="Address"
              id="address"
              name="address"
              placeholder="District, City"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              fullWidth
              label="Mobile No"
              id="mobile_no"
              name="mobile_no"
              placeholder="Mobile Phone Number"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              fullWidth
              label="Age"
              id="age"
              name="age"
              placeholder="Age (This Year)"
              size="small"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              fullWidth
              label="NPWP"
              id="npwp"
              name="npwp"
              placeholder="NPWP"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={12}>
            <TextField
              fullWidth
              label="Role"
              id="role"
              name="role"
              placeholder="Role"
              size="small"
              type="text"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item md={6}>
            <Divider>
              <small>Register This Employee</small>
            </Divider>
            <Button fullWidth color="primary" variant="contained">
              Submit
            </Button>
            <Alert severity="success">
              This is a success alert — check it out!
            </Alert>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default AddEmployee;
