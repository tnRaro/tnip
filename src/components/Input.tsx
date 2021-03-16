import { styled } from "../stitches.config";

export const Input = styled("input", {
  appearance: "none",
  display: "flex",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "4px",
  fontSize: "inherit",
  fontFamily: "inherit",
  padding: "8px 10px",
  margin: 0,
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  "& > svg": {
    width: "1em",
    height: "1em",
  },
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