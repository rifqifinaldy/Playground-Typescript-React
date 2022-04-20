import { AccountBalance } from "@mui/icons-material";
import { AppBar, Box, Paper, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import TabPanel, { a11yProps } from "../../components/Tabs/Tabs";
import { PageName } from "../../components/Title/page.config";
import PageTitle from "../../components/Title/PageTitle";
import { FormStatus } from "../../utilities/interface";
import FormBank from "./FormBank";
import ViewBank from "./ViewBank";

const Bank = () => {
  const [tab, setTab] = useState<number>(0);

  const changeTab = (e: SyntheticEvent, tabIndex: number) => {
    setTab(tabIndex);
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
            <Tab label="Activity" {...a11yProps(0)} />
            <Tab label="History" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
      </Box>
      <Paper sx={{ mx: 1, p: 1 }}>
      <PageTitle title={<PageName />} icon={<AccountBalance />} />
          <TabPanel value={tab} index={0}>
            <FormBank />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <ViewBank />
          </TabPanel>
      </Paper>
    </>
  );
};

export default Bank;
