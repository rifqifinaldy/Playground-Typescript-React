import { Box, CircularProgress, Typography } from "@mui/material";
import DataArrayIcon from "@mui/icons-material/DataArray";
import ErrorIcon from '@mui/icons-material/Error';

export const ErrorOverlay = () => {
  return (
    <Box
      mt={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ErrorIcon color="error" sx={{ fontSize: 100 }} />
      <Typography color="error" variant="h6">
        An Error has Occured
      </Typography>
    </Box>
  );
};

export const NoDataOverlay = () => {
  return (
    <Box
      mt={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DataArrayIcon color="disabled" sx={{ fontSize: 100 }} />
      <Typography color="text.disabled" variant="h6">
        Data is Empty
      </Typography>
    </Box>
  );
};

export const LoadingOverlay = () => {
  return (
    <Box
      mt={5}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={100} />
      <Typography variant="h6">Loading Data</Typography>
    </Box>
  );
};
