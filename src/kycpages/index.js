import { AppBar, Container, CssBaseline, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { doc, setDoc } from "firebase/firestore";
import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { AppContext } from "../App";
import {
  BootstrapButton,
  formstyle,
  HeaderTitle
} from "../component/component";
import { db } from "../config/firebase";
import { sendMessage } from "../config/server";
import AddressVerification from "./addressverification";
import Identity from "./identity";
import UserProfile from "./userinfo";

const steps = [
  "User information",
  "Identity verification",
  "Address Verification",
];

export default function KycIndex() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const { values, setValues } = React.useContext(AppContext);

  let [searchParams] = useSearchParams();
  let sitename = searchParams.get("sname");
  let redirecturl = searchParams.get("rdr");
  React.useEffect(() => {
    setValues({
      ...values,
      sitename: sitename,
      redirecturl: redirecturl,
    });
  }, []);

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(values);
    const userRef = doc(db, "verifiedaccounts", values.email);

    if (activeStep === 0) {
      setDoc(userRef, values, { merge: true }).then(() => {
        handleNext();
      });
    } else {
      handleNext();
    }
  };

  const confirmVerification = () => {
    sendMessage(values.email)
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        window.location.href = values.redirecturl;
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <CssBaseline />
      <AppBar elevation={0} position="static" color="primary">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            {`${values.sitename} account verification`}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container maxWidth="sm">
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};

              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <HeaderTitle
                title={"Verification steps Completed"}
                subtitle={
                  "All verification step is completed - note that it might take up to 24 hours to verify your documents."
                }
              />
              <div style={formstyle.section}></div>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <BootstrapButton
                  variant="contained"
                  disableElevation
                  onClick={confirmVerification}
                  fullWidth
                >
                  Confirm
                </BootstrapButton>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <form onSubmit={submit}>
                <Box p={1}>
                  {activeStep === 0 && <UserProfile />}
                  {activeStep === 1 && <Identity />}
                  {activeStep === 2 && <AddressVerification />}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                  >
                    Back
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button component="button" type="submit">
                    {"Next"}
                  </Button>
                </Box>
              </form>
            </React.Fragment>
          )}
        </Box>
      </Container>
    </>
  );
}
