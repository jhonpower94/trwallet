import {
    Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SetupForm from "./setupform";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

function CardPayment() {
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
    <div style={{ padding: 23 }}>
      <Elements stripe={stripePromise} options={options}>
        <SetupForm />
      </Elements>
    </div>
  );
}

export default CardPayment;

/*
const stripePromise = loadStripe(
  "pk_test_51IsAArBJfVrVZyoUpggY5S8wvQiDgQXniK7ywn7pR6XI9mWjLnFxHuEfCMPencYh58DGBaUrZ0nmu36elU56WHf900bxnRnHbL"
);

function CardPayment() {
  const options = {
    // passing the client secret obtained in step 2
    clientSecret:
      "seti_1KbLgUBJfVrVZyoUFAkdY9dl_secret_LHvXdzHaXXr8LKWRmGNnWXztSFzlwos",
    // Fully customizable with appearance API.
    appearance: { theme: "stripe" },
  };

  */
