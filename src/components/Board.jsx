import React from "react";
import Box from "@material-ui/core/Box/Box";
import Button from "@material-ui/core/Button/Button";
import '../sass/tictactoe.scss'

const Board = ({ buttonValues, handleClick, disable }) => {
  const board1 = buttonValues.slice(0, 3);
  const board2 = buttonValues.slice(3, 6);
  const board3 = buttonValues.slice(6);
  const board = [board1, board2, board3];
  return (
    <div>
      {board.map((boardList) => (
        <Box key={Math.random()}>
          {boardList.map((box) => (
            <Button
              disabled={disable}
              className='board-button'
              key={box.id}
              variant="contained"
              color="secondary"
              onClick={() => handleClick(box.id)}
            >
              {box.value}
            </Button>
          ))}
        </Box>
      ))}
      
    </div>
  );
};

export default Board;
