import {
  Box,
  Paper,
  Tab,
  Tabs,
} from "@mui/material";
import {useState, SyntheticEvent} from "react";
import TabPanel, { a11yProps } from "../../components/Tabs/Tabs";
import PeopleIcon from "@mui/icons-material/People";
import PageTitle from "../../components/Title/PageTitle";
import ViewEmployee from "./ViewEmployee";
import AddEmployee from "./AddEmployee";

const Employee = () => {
  const [tab, setTab] = useState(0);
  const handleChange = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };
  return (
    <Paper sx={{ p : 1 }}>
      <PageTitle title="Employee" icon={<PeopleIcon />}/>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={tab}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="secondary"
            indicatorColor="secondary"
            variant="fullWidth"
          >
            <Tab label="Create" {...a11yProps(0)} />
            <Tab label="Employee Data" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <AddEmployee />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <ViewEmployee />
        </TabPanel>
      </Box>
    </Paper>
  );
};

export default Employee;
