import { FormControl, InputLabel, Stack } from "@mui/material";
import { doc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { DropzoneDialog } from "material-ui-dropzone";
import React from "react";
import { AppContext } from "../App";
import {
  BootstrapButton,
  BootstrapInput,
  formstyle,
} from "../component/component";
import { db, storage } from "../config/firebase";

const IdentityInput = ({ label, name }) => {
  const { values } = React.useContext(AppContext);
  const [state, setState] = React.useState({
    open: false,
    files: [],
    name: "",
  });

  const handleClose = () => {
    setState({
      open: false,
    });
  };

  const handleSave = (files) => {
    const storageRef = ref(storage, `images/${files[0].name}`);
    const uploadTask = uploadBytesResumable(storageRef, files[0]);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          const userRef = doc(
            db,
            "verifiedaccounts",
            values.email,
            "documentsphotos",
            name
          );

          setDoc(userRef, { image: downloadURL }, { merge: true }).then(() => {
            //Saving files to state for further use and closing Modal.
            setState({
              files: files,
              open: false,
              name: files[0].name,
            });
          });
        });
      }
    );
  };

  const handleOpen = () => {
    setState({
      open: true,
    });
  };

  return (
    <>
      <div style={formstyle.section}>
        <Stack spacing={1}>
          <FormControl variant="standard">
            <InputLabel shrink htmlFor="names-input">
              {label}
            </InputLabel>
            <BootstrapInput
              value={state.name}
              placeholder="Click upload to select id"
              id="names-input"
              name={name}
              required
            />
          </FormControl>

          <BootstrapButton
            variant="contained"
            disableElevation
            onClick={handleOpen}
          >
            Upload
          </BootstrapButton>
        </Stack>
      </div>

      <DropzoneDialog
        open={state.open}
        onSave={handleSave}
        acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
        filesLimit={1}
        showPreviews={true}
        maxFileSize={5000000}
        onClose={handleClose}
      />
    </>
  );
};

export default IdentityInput;
