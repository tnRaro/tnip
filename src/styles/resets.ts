import { CSS } from "../stitches.config";

export const boxReset = {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
} as CSS;
export const inputReset = {
  ...boxReset,
  appearance: "none",
  border: "none",
  fontSize: "inherit",
  fontFamily: "inherit",
  backgroundColor: "transparent",
  
  display: "flex",
  borderRadius: "4px",

  alignItems: "center",
  justifyContent: "center",
  background: "white",
} as CSS;