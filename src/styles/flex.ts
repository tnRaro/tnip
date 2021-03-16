import { css } from "../stitches.config";
import { boxReset } from "./resets";

export const flex = css({
  ...boxReset,
  display: "flex",
})