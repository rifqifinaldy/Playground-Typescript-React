import { AppBar, Box, Paper, Tab, Tabs } from "@mui/material";
import { useState, SyntheticEvent } from "react";
import TabPanel, { a11yProps } from "../../components/Tabs/Tabs";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PageTitle from "../../components/Title/PageTitle";
import ViewEmployee from "./ViewEmployee";
import FormEmployee from "./FormEmployee";
import { PageName } from "../../components/Title/page.config";
import { IFormControl } from "../../utilities/interfaces/form.control.props";

const Employee = () => {
  const [tab, setTab] = useState<number>(0);
  const [form, setForm] = useState({
    edit: false,
    data: {},
  });

  const changeTab = (e: SyntheticEvent, tabIndex: number) => {
    setTab(tabIndex);
    setForm({
      edit: false,
      data: {},
    });
  };

  const changeFormStatus = (formStatus: IFormControl) => {
    setTab(formStatus.tabIndex);
    setForm({
      edit: formStatus.edit,
      data: formStatus.data,
    });
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
            <Tab label={form.edit ? "Edit" : "Create"} {...a11yProps(0)} />
            <Tab label="Employee Data" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Box>
      <Paper sx={{ mx: 1, p: 1 }}>
        <PageTitle title={<PageName />} icon={<EngineeringIcon />} />
        <Box sx={{ width: "100%" }}>
          <TabPanel value={tab} index={0}>
            <FormEmployee form={form} changeFormStatus={changeFormStatus} />
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
