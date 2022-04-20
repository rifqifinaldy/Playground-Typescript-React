import {
  Alert,
  Button,
  capitalize,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import {
  getBanking,
  postBanking,
  resetBanking,
} from "../../state/Bank/banking.action.creators";
import { today } from "../../utilities";
import {
  StatusCode,
  StatusMessage,
} from "../../utilities/enum/response.status";
import { currency } from "../../utilities/tools/format.currency";

interface IBanking {
  date: Date;
  method: string;
  amount: number;
}

const FormBank = () => {
  const [method, setMethod] = useState<string>("deposit");
  const [balance, setBalance] = useState<number>(0);
  const [amount, setAmount] = useState<string>("0");
  const [alert, setAlert] = useState({
    open: false,
    color: "success",
    text: "Loading",
  });

  const dispatch = useDispatch();

  const { postBankResult, getBankResult } = useSelector(
    (state: State) => state.banking
  );

  const handleMethod = (e: SelectChangeEvent) => {
    setMethod(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    let newAmount: number = parseFloat(amount);
    let sendData: IBanking = {
      date: today,
      amount: method === "withdraw" ? newAmount * -1 : newAmount,
      method: method,
    };
    e.preventDefault();
    dispatch(postBanking(sendData));
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setAmount("0");
    setMethod("deposit");
  };

  useEffect(() => {
    if (getBankResult.data) {
      let tmpBalance = Object.values(
        getBankResult.data as unknown as IBanking
      ).reduce((r, { amount }) => r + amount, 0);
      setBalance(tmpBalance);
    }
  }, [getBankResult, balance]);

  useEffect(() => {
    return () => {
      dispatch(resetBanking())
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getBanking());
    if (postBankResult.status === StatusCode.SUCCESS) {
      setAlert({
        open: true,
        color: "success",
        text: postBankResult.message,
      });
    } else if (postBankResult.status === StatusCode.ERROR) {
      setAlert({ open: true, color: "danger", text: StatusMessage.ERROR });
    }
    setTimeout(() => {
      setAlert({ open: false, color: "success", text: "Reloading" });
    }, 3000);
  }, [postBankResult, dispatch]);

  return (
    <>
      <Typography variant="h6" align="center">
        Your Account Balance
      </Typography>
      <Typography variant="h2" align="center">
        {currency.format(balance)}
      </Typography>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid px={1} py={1} container spacing={2}>
          <Grid item md={4}>
            <FormControl fullWidth>
              <InputLabel id="method">Activity</InputLabel>
              <Select
                fullWidth
                labelId="method"
                id="method"
                value={method}
                label="Activity"
                onChange={handleMethod}
                size="small"
                required
              >
                <MenuItem value={"deposit"}>Deposit</MenuItem>
                <MenuItem value={"withdraw"}>Withdraw</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={8}>
            <TextField
              required
              autoFocus={true}
              name="balance"
              placeholder="Input balance"
              size="small"
              label="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              fullWidth
            />
          </Grid>
          <Divider />
        </Grid>
        <Grid
          container
          sx={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={12}>
            <Divider>{capitalize(method)}</Divider>
          </Grid>
          <Grid item md={3} xs={12}>
            <Stack spacing={2} direction="row">
              <Button
                disabled={alert.open}
                fullWidth
                type="submit"
                variant="contained"
              >
                Submit
              </Button>
              <Button
                disabled={alert.open}
                onClick={(e) => handleReset(e)}
                fullWidth
                variant="contained"
                color="info"
              >
                Clear
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </form>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item md={6}>
          <Zoom in={alert.open}>
            <Alert severity={alert.color === "success" ? "success" : "error"}>
              {alert.text}
            </Alert>
          </Zoom>
        </Grid>
      </Grid>
    </>
  );
};

export default FormBank;
