import React from "react";
import {
    HeaderTitle
} from "../component/component";
import IdentityInput from "../component/identityinput";

export default function AddressVerification() {
  return (
    <>
      <HeaderTitle
        title={"Proof of address verification"}
        subtitle={
          "Upload any clear photo or scanned image of your home utility bills, example light or water receipt / invoice"
        }
      />

      <IdentityInput
        label={"Utility invoice / receipt"}
        name={"addtress_img"}
      />
    </>
  );
}
