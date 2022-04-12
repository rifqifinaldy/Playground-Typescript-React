import { AppBar, Box, Paper, Tab, Tabs } from "@mui/material";
import { useState, SyntheticEvent } from "react";
import TabPanel, { a11yProps } from "../../components/Tabs/Tabs";
import PeopleIcon from "@mui/icons-material/People";
import PageTitle from "../../components/Title/PageTitle";
import ViewEmployee from "./ViewEmployee";
import AddEmployee from "./AddEmployee";
import { PageName } from "../../components/Title/page.config";

const Employee = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          borderBottom: 2,
          borderColor: "divider",
        }}
      >
        <AppBar color="primary" position="static">
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Create" {...a11yProps(0)} />
            <Tab label="Employee Data" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Box>
      <Paper sx={{ mx: 1, p: 1 }}>
        <PageTitle title={<PageName />} icon={<PeopleIcon />} />
        <Box sx={{ width: "100%" }}>
          <TabPanel value={tab} index={0}>
            <AddEmployee />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <ViewEmployee />
          </TabPanel>
        </Box>
      </Paper>
    </>
  );
};

export default Employee;
