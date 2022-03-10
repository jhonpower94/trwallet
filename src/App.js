import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardPayment from "./cardpayment";
import PaymentStatus from "./paymentstatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardPayment />} />
        <Route path=":query" element={<PaymentStatus />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
