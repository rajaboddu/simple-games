import { React, useState } from "react";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import { values, validate } from "../services/tictactoeValues";
import "../sass/tictactoe.scss";
import Board from "../components/Board";
import CommonButton from '../components/Button'

const TicTacToe = () => {
  const [boxValues, setBoxValues] = useState([...values]);
  const [turn, setTurn] = useState("Your Turn");
  const [name, setName] = useState("");
  const [disable, setDisable] = useState(false);

  const rivalTurn = () => {
    let updateValues = [...boxValues];
    setTimeout(() => {
      let condition = true;
      while (condition) {
        let randonIndex = Math.floor(Math.random() * 9);
        if (!updateValues[randonIndex].changed) {
          updateValues[randonIndex].value = "O";
          updateValues[randonIndex].changed = true;
          setBoxValues([...updateValues]);
          setTurn("Your Turn");
          setDisable(false);
          break;
        }
      }
    }, 3000);
  };

  const handleClick = (index) => {
    let updateValues = [...boxValues];
    if (!updateValues[index].changed) {
      updateValues[index].value = "X";
      updateValues[index].changed = true;
      setBoxValues([...updateValues]);
      setTurn("Rival Turn");
      setDisable(true);
    }
    const result = validate(boxValues);
    if (result === "X Wins" || result === "O Wins") {
     alert('Game Over.');
    } else {
      rivalTurn();
    }
    validate(boxValues);
    setName(result);
  };

  const handleReset = () => {
    let resetValues = boxValues;
    for (let i = 0; i < resetValues.length; i++) {
      resetValues[i].value = "";
      resetValues[i].changed = false;
    }
    setBoxValues([...resetValues]);
    setName("");
  }; 

  return (
    <Container maxWidth="xs">
      <Box
        display="flex"
        flexDirection="column"
        className="ttt-board"
        justifyContent="center"
      >
        <Typography variant="h3">Tic Tac Toe</Typography>
        <Board
          buttonValues={boxValues}
          handleClick={handleClick}
          disable={disable}
          name={name}
        />
        <Typography variant="subtitle2">{turn}</Typography>
        <CommonButton type='submit' text='RESET' handleReset={ handleReset}/>
        <Typography variant="subtitle1">{name}</Typography>
      </Box>
    </Container>
  );
};

export default TicTacToe;
