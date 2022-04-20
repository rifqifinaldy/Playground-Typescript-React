import { Paper } from "@mui/material";
import { PageName } from "../../components/Title/page.config";
import PageTitle from "../../components/Title/PageTitle";
import { SafetyDivider } from "@mui/icons-material";
import { useState } from "react";
import { FormStatus } from "../../utilities/interface";
import ViewRole from "./ViewRole";
import FormRole from "./FormRole";

const Role = () => {
  const [form, setForm] = useState({
    edit: false,
    data: {},
  });

  const [update, setUpdate] = useState(false);

  const changeFormStatus = (formStatus: FormStatus) => {
    setUpdate(!update);
    setForm({
      edit: formStatus.edit,
      data: formStatus.data,
    });
  };

  return (
    <Paper sx={{ mx: 1, py: 1, px: 3 }}>
      <PageTitle title={<PageName />} icon={<SafetyDivider />} />
      <Paper style={{ width: "100%" }} variant="outlined">
        <FormRole form={form} changeFormStatus={changeFormStatus} />
        <ViewRole update={update} changeFormStatus={changeFormStatus} />
      </Paper>
    </Paper>
  );
};

export default Role;
