import { styled } from "../stitches.config";

export const Button = styled("button", {
  appearance: "none",
  display: "flex",
  boxSizing: "border-box",
  border: "none",
  borderRadius: "4px",
  fontSize: "inherit",
  fontFamily: "inherit",
  padding: 0,
  margin: 0,
  alignItems: "center",
  justifyContent: "center",
  background: "white",
  "& > svg": {
    width: "1em",
    height: "1em",
  },
  transition: "all 300ms ease",
  variants: {
    color: {
      accent: {
        color: "$accent400",
        padding: "8px 10px",
        "&:hover": {
          transform: "translateY(-1px)",
          boxShadow: "0 2px 4px rgba(0 0 0 / 25%)"
        },
        "&:active": {
          transform: "translateY(1px)",
          boxShadow: "0 2px 0px rgba(0 0 0 / 25%)"
        }
      }
    }
  }
})