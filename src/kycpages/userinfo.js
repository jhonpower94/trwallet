import { FormControl, InputLabel, MenuItem, Stack } from "@mui/material";
import PropTypes from "prop-types";
import React, { useContext, useEffect } from "react";
import NumberFormat from "react-number-format";
import { AppContext } from "../App";
import { BootstrapInput, formstyle, HeaderTitle } from "../component/component";

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(
  props,
  ref
) {
  const { onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={ref}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      format="##/##/####"
      mask={["M", "M", "D", "D", "Y", "Y", "Y", "Y"]}
    />
  );
});

NumberFormatCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const countries = require("../config/country.json");

function UserProfile() {
  const { values, setValues } = useContext(AppContext);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {}, []);

  return (
    <>
      <HeaderTitle
        title={"Personal details"}
        subtitle={"Tell us a few details about yourself."}
      />

      <div style={formstyle.section}>
        <Stack spacing={1}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="names-input">
              Legal name of person
            </InputLabel>
            <BootstrapInput
              defaultValue={values.date}
              placeholder="First name"
              id="names-input"
              name="firstname"
              fullWidth
              onChange={handleChange}
              required
            />
          </FormControl>
          <BootstrapInput
            defaultValue=""
            placeholder="Last name"
            name="lastname"
            fullWidth
            onChange={handleChange}
            required
          />
        </Stack>
      </div>

      <div style={formstyle.section}>
        <FormControl variant="standard" fullWidth>
          <InputLabel shrink htmlFor="email-input">
            Email address
          </InputLabel>
          <BootstrapInput
            defaultValue=""
            placeholder="you@example.com"
            id="email-input"
            name="email"
            onChange={handleChange}
            required
          />
        </FormControl>
      </div>

      <div style={formstyle.section}>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="date-input">
            Date of birth
          </InputLabel>
          <BootstrapInput
            defaultValue={values.date}
            id="date-input"
            placeholder="MM/DD/YYYY"
            name="date"
            InputProps={{
              inputComponent: NumberFormatCustom,
            }}
            onChange={handleChange}
            required
          />
        </FormControl>
      </div>

      <div style={formstyle.section}>
        <Stack spacing={1}>
          <FormControl variant="standard" fullWidth>
            <InputLabel shrink htmlFor="address-input">
              Home address
            </InputLabel>
            <BootstrapInput
              defaultValue={values.country}
              select
              id="address-input"
              placeholder="Country"
              name="country"
              onChange={handleChange}
              required
            >
              {countries.map((option, index) => (
                <MenuItem key={index} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </BootstrapInput>
          </FormControl>
          <BootstrapInput
            defaultValue={values.address}
            placeholder="Address"
            name="address"
            fullWidth
            onChange={handleChange}
            required
          />
          <BootstrapInput
            defaultValue={values.city}
            placeholder="City"
            name="city"
            fullWidth
            onChange={handleChange}
            required
          />
          <BootstrapInput
            defaultValue={values.state}
            placeholder="State"
            name="state"
            fullWidth
            onChange={handleChange}
            required
          />
          <BootstrapInput
            defaultValue={values.zip}
            placeholder="Zip"
            name="zip"
            fullWidth
            onChange={handleChange}
            required
          />
        </Stack>
      </div>

      <div style={formstyle.section}>
        {values.country === "United States" ? (
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="ssn-input">
              Social security number
            </InputLabel>
            <BootstrapInput
              defaultValue={values.date}
              id="ssn-input"
              placeholder="SSN"
              name="ssn"
              onChange={handleChange}
              required
            />
          </FormControl>
        ) : null}
      </div>
    </>
  );
}

export default UserProfile;
