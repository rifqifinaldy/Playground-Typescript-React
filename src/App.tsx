import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from "./pages/Employee/Employee";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Box, Container, Grid, Toolbar } from "@mui/material";
import AppRoute from "./AppRoute";

function App() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <Navbar open={open} toggleDrawer={toggleDrawer} />
          <Sidebar open={open} toggleDrawer={toggleDrawer} />
          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.grey[100]
                  : theme.palette.grey[900],
              flexGrow: 1,
              height: "100vh",
              overflow: "auto",
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={8} lg={9}>
                    <AppRoute />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
