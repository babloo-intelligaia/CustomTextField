import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Demo from "./Demo";

function App() {
  return <Demo />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Demo />, rootElement);
