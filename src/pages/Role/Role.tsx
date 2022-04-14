import { Paper } from "@mui/material";
import { PageName } from "../../components/Title/page.config";
import PageTitle from "../../components/Title/PageTitle";
import { SafetyDivider } from "@mui/icons-material";
import { Box } from "@mui/system";
import { useState } from "react";
import { FormStatus } from "../../utilities/interface";
import ViewRole from "./ViewRole";
import FormRole from "./FormRole";

const Role = () => {
  const [form, setForm] = useState({
    edit: false,
    data: {},
  });

  const changeFormStatus = (formStatus: FormStatus) => {
    setForm({
      edit: formStatus.edit,
      data: formStatus.data,
    });
  };

  return (
    <Paper sx={{ my: 2, mx: 2, p: 1 }}>
      <PageTitle title={<PageName />} icon={<SafetyDivider />} />
      <Box sx={{ width: "100%" }}>
        <FormRole form={form} changeFormStatus={changeFormStatus}/>
        <ViewRole changeFormStatus={changeFormStatus} />
      </Box>
    </Paper>
  );
};

export default Role;
