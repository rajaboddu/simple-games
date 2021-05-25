import React from "react";
import "./App.scss";
import Flames from "./games/Flames";
import RockPapSis from "./games/RockPapSis";
import TicTacToe from "./games/TicTacToe";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {pink } from "@material-ui/core/colors";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header";

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: "3rem",
      fontFamily: "Great Vibes",
      fontWeight: 900,
      color: "#e64398",
    },
    overline: {
      fontFamily: "Tangerine",
      color: "#15db95",
      fontWeight: 800,
    },
    subtitle1: {
      fontFamily: "BerkshireSwash",
      fontSize: "1.2rem",
      fontWeight: 800,
      fontStyle: "italic",
      color:"#15db95",
    },
    subtitle2: {
      fontFamily: "BerkshireSwash",
      fontWeight: 800,
      fontSize: "1.2rem",
      fontStyle: "italic",
      color:pink[400],
      
    },
    caption: {
      fontWeight: 400,
      marginTop: "-1rem",
      color: "#ff073a",
      fontSize: "1rem",
    },
  },
  palette: {
    primary: {
      main: pink[400],
    },
    secondary: {
      main: "#15db95",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Flames} />
            <Route path="/tictactoe" component={TicTacToe} />
            <Route path="/rockpapsis" component={RockPapSis} />
          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
