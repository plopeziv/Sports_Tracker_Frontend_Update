import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import "../NFL-css/NflToolbar.css";

import LeaderTable from "../Leaderboard-Page/Leaderboard";
import PlayerComparison from "../Player-Comparison-Page/PlayerComparison";
import Matchup from "../Matchup-Page/Matchup";
import SearchTool from "./SearchTool";

const NflToolbar = () => {
  const [player1, setPlayer1] = useState("Tom Brady")
  const [player2, setPlayer2] = useState("Aaron Rodgers")

  return(
    <BrowserRouter>
      <nav className="FootballNav">
        <div className="ListSpacing">
          <ul className="ComponentList">
            <li>
              <NavLink to="/NFL/Leaderboard"> Leaderboard </NavLink>
            </li>

            <li>
              <NavLink to="/NFL/PlayerComparison"> Player Comparison </NavLink>
            </li>

            <li>
              <NavLink to="/NFL/MatchupTool"> Matchup Tool </NavLink>
            </li>
          </ul>
        </div>

        <div className ="PlayerButtons">
          <SearchTool setPlayerName={setPlayer2}/>
          <SearchTool setPlayerName={setPlayer1}/>
        </div>
      </nav>
        <Route 
          path="/NFL/Leaderboard" 
          component={LeaderTable}
        />
        <Route
          path="/NFL/PlayerComparison"
          render = {() => <PlayerComparison player1={player1} player2={player2} />}
        />
        <Route 
          path = "/NFL/MatchupTool"
          render= {() => <Matchup player1={player1} player2={player2} /> }
        />
    </BrowserRouter>
  )
}

export default NflToolbar;
