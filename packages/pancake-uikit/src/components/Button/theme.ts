import { scales, variants } from "./types";

export const scaleVariants = {
  [scales.MD]: {
    height: "48px",
    padding: "0 24px",
  },
  [scales.SM]: {
    height: "32px",
    padding: "0 16px",
  },
  [scales.XS]: {
    height: "20px",
    fontSize: "12px",
    padding: "0 8px",
  },
};

export const styleVariants = {
  [variants.PRIMARY]: {
    backgroundColor: "primaryBright",
    color: "black",
  },
  [variants.SECONDARY]: {
    backgroundColor: "transparent",
    border: "2px solid",
    borderColor: "#1A0E67",
    boxShadow: "none",
    color: "#fff",
    borderRadius:"40px",
    ":disabled": {
      backgroundColor: "transparent",
      borderColor:"#1A0E67"
    },
  },
  [variants.TERTIARY]: {
    backgroundColor: "tertiary",
    boxShadow: "none",
    color: "primaryBright",
  },
  [variants.SUBTLE]: {
    backgroundColor: "textSubtle",
    color: "backgroundAlt",
  },
  [variants.DANGER]: {
    backgroundColor: "failure",
    color: "white",
  },
  [variants.SUCCESS]: {
    backgroundColor: "success",
    color: "white",
  },
  [variants.TEXT]: {
    backgroundColor: "transparent",
    color: "primaryBright",
    boxShadow: "none",
  },
  [variants.LIGHT]: {
    backgroundColor: "input",
    color: "textSubtle",
    boxShadow: "none",
  },
};
