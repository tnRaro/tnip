import { css } from "../stitches.config";
import { inputReset } from "./resets";

export const button = css({
  ...inputReset,
  display: "flex",
  borderRadius: "4px",
  alignItems: "center",
  justifyContent: "center",
  "& > svg": {
    width: "1em",
    height: "1em",
  },
  transition: "box-shadow 300ms, transform 300ms ease",
  outline: "none",
  WebkitUserSelect: "none",
  userSelect: "none",
  background: "white",
  "&[disabled]": {
    color: "$gray400"
  },
  variants: {
    color: {
      accent: {
        color: "$accent400",
        padding: "8px 10px",
        "&:not([disabled]):hover,&:not([disabled]):focus": {
          transform: "translateY(-1px)",
          boxShadow: "0 2px 4px rgba(0 0 0 / 25%)"
        },
        "&:not([disabled]):active": {
          transform: "translateY(1px)",
          boxShadow: "0 1px 1px rgba(0 0 0 / 25%)"
        },
      }
    }
  }
})