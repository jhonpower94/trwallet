import { FormControl, InputLabel, MenuItem } from "@mui/material";
import React from "react";
import { BootstrapInput, formstyle, HeaderTitle } from "../component/component";
import IdentityInput from "../component/identityinput";

export default function Identity() {
  return (
    <>
      <HeaderTitle
        title={"Identity verification"}
        subtitle={
          "Upload any clear photo or scanned image of your identity document"
        }
      />
      <div style={formstyle.section}>
        <FormControl variant="standard">
          <InputLabel shrink htmlFor="names-input">
            Select document type to upload
          </InputLabel>
          <BootstrapInput
            defaultValue={"International passport"}
            select
            id="address-input"
            placeholder="identity document type"
            name="id_type"
            required
          >
            {["International passport", "Drivers Licence", "Voters card"].map(
              (option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              )
            )}
          </BootstrapInput>
        </FormControl>
      </div>
      <IdentityInput label={"Front of your ID"} name={"id_front"} />
      <IdentityInput label={"Back of your ID"} name={"id_back"} />
    </>
  );
}
