import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

export const AuthorizationButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 20,
    padding: "10px 50px",
    lineHeight: 1.5,
    backgroundColor: "#2ebc58",
    borderColor: "#2ebc58",
    borderRadius: 30,
    "&:hover": {
      backgroundColor: "#2E8B57",
      borderColor: "#2E8B57",
      boxShadow: "none",
    },
    "&:active": {
      backgroundColor: "#2E8B57",
      borderColor: "#2E8B57",
      boxShadow: "none",
    },
  },
})(Button);
