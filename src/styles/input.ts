import { css } from "../stitches.config";
import { inputReset } from "./resets";

export const input = css({
  ...inputReset,
  display: "flex",
  borderRadius: "4px",
  padding: "8px 10px",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  transition: "background-color 100ms ease",
  outline: "none",
  userSelect: "text",
  "&:hover": {
    backgroundColor: "gainsboro"
  },
  "&:focus": {
    color: "white",
    backgroundColor: "$accent400",
  },
  "&::selection": {
    background: "transparent"
  }
})