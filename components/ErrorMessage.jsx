import React from "react";
import { Snackbar, Alert } from "@material-ui/core";
const ErrorMessage = ({ children }) => (
  <Snackbar open autoHideDuration={3000}>
    <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
      {children}
    </Alert>
  </Snackbar>
);

export default ErrorMessage;
