import { AppBar, Box, Paper, Tab, Tabs } from "@mui/material";
import { useState, SyntheticEvent } from "react";
import TabPanel, { a11yProps } from "../../components/Tabs/Tabs";
import PeopleIcon from "@mui/icons-material/People";
import PageTitle from "../../components/Title/PageTitle";
import ViewEmployee from "./ViewEmployee";
import AddEmployee from "./AddEmployee";
import { PageName } from "../../components/Title/page.config";

const Employee = () => {
  const [tab, setTab] = useState<number>(0);
  const [edit, setEdit] = useState<boolean>(false);
  const [editData, setEditData] = useState({});
  const changeTab = (e: SyntheticEvent, newValue: number) => {
    setTab(newValue);
    setEdit(false);
  };

  const changeFormStatus = (e: SyntheticEvent, newValue: number, editData:{}) => {
    setTab(newValue);
    setEdit(true);
    setEditData(editData)
    console.log("Triggered", newValue);
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
            onChange={changeTab}
            aria-label="basic tabs example"
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label={edit ? "Edit" : "Create"} {...a11yProps(0)} />
            <Tab label="Employee Data" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Box>
      <Paper sx={{ mx: 1, p: 1 }}>
        <PageTitle title={<PageName />} icon={<PeopleIcon />} />
        <Box sx={{ width: "100%" }}>
          <TabPanel value={tab} index={0}>
            <AddEmployee edit={edit} editData={editData} changeFormStatus={changeFormStatus}/>
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <ViewEmployee changeFormStatus={changeFormStatus} />
          </TabPanel>
        </Box>
      </Paper>
    </>
  );
};

export default Employee;
