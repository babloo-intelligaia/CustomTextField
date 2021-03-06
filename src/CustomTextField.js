import React from "react";
import TextField from "@material-ui/core/TextField";

export default function CustomTextField({ InputLabelProps = {}, ...props }) {
  return (
    <TextField
      InputLabelProps={{ shrink: true, ...InputLabelProps }}
      {...props}
    />
  );
}
