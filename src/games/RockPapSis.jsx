import { React, useState } from "react";
import { icons, elements } from "../services/icons";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Button from "@material-ui/core/Button/Button";
import Container from "@material-ui/core/Container/Container";
import Box from "@material-ui/core/Box/Box";
import Typography from "@material-ui/core/Typography/Typography";
import Badge from "@material-ui/core/Badge/Badge";
import "../sass/rps.scss";

const RockPapSis = () => {
  const [index, setindex] = useState(Math.floor(Math.random() * 3));
  const [userIndex, setuserIndex] = useState(Math.floor(Math.random() * 3));
  const [user, setuser] = useState(0);
  const [computer, setcomputer] = useState(0);
  const picIcons = icons;

  const pointsValidation = (userNo, computerIndex) => {
    let computerPoints = computer;
    let userPoints = user;
    //compoints
    if (
      (userNo === 0 && computerIndex === 1) ||
      (userNo === 1 && computerIndex === 2) ||
      (userNo === 2 && computerIndex === 0)
    ) {
      computerPoints++;
      setcomputer(computerPoints);
    }
    //userpoints
    else if (
      (userNo === 0 && computerIndex === 2) ||
      (userNo === 1 && computerIndex === 0) ||
      (userNo === 2 && computerIndex === 1)
    ) {
      userPoints++;
      setuser(userPoints);
    }
  };
  const handleClick = (userNo) => {
    let computerIndex = Math.floor(Math.random() * 3);
    setindex(computerIndex);
    setuserIndex(userNo);
    pointsValidation(userNo, computerIndex);
  };
  return (
    <Container maxWidth="xs">
      <Box 
        className="game-box"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography variant="h3">Rock Paper Scissors</Typography>
        <Box
          display="flex"
          justifyContent="space-evenly"
          className="game-display"
        >
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src={picIcons[index]} width="80" />
            <Typography color='secondary' className='game-rival-text' variant="h6">RIVAL</Typography>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar src={picIcons[userIndex]} width="80" />
            <Typography color='primary' className='game-user-text' variant="h6">YOU</Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          className="game-buttons"
        >
          {elements.map((element) => (
            <Button
              key={element.id}
              variant={element.variant}
              onClick={() => handleClick(element.id)}
              className={`game-button-${element.name}`}
            >
              {element.name}
            </Button>
          ))}
        </Box>
        <Box
          display="flex"
          justifyContent="space-around"
          className="game-results"
        >
          <Badge badgeContent={computer} color="secondary">
            <Typography variant="subtitle1">Rival Points</Typography>
          </Badge>
          <Badge badgeContent={user} color="primary">
            <Typography variant="subtitle2">Your Points</Typography>
          </Badge>
        </Box>
      </Box>
    </Container>
  );
};

export default RockPapSis;
