/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "assets/theme";
import Button from "./components/Button";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button
        // component="a"
        // to="/"
        variant="contained"
        color="info"
        size="small"
        onClick={() => alert("iii")}
      >
        Normal Button
      </Button>
    </ThemeProvider>
  );
}
