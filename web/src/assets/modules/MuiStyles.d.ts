import {
    PaletteColorOptions,
  } from "@mui/material";
  
  declare module "@mui/material/styles" {
    interface PaletteOptions {
      primary: PaletteColorOptions;
    }
  }