import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button/Button";
import '../sass/tictactoe.scss'

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, yellow, #ec407a)",
    border: 0,
    borderRadius: '0.1rem',
    color: "#2d283e",
    maxWidth: "6rem",
    margin: "1rem auto",
    fontSize: '1rem',
    fontWeight:600,
    },
});

const CommonButton = ({ handleReset, text, type }) => {
  const classes = useStyles();
  return (
    <Button type={type} className={classes.root} id='common-button' onClick={handleReset}>
      {text}
    </Button>
  );
};

export default CommonButton;
