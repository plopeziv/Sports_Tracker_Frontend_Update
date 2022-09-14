import React, { useState } from "react";
import {BrowserRouter, Route, NavLink,} from "react-router-dom";

import ScatterApp from "./Scoring_Summary_Page/Scatter_Container"
import PlayerApp from "./Player_Container"
import FirstPlot from "./Bar_Chart"

import "./NBA-Component-css/toolbar.css"

const ToolBar = ({nameSelect, player}) => {
  const [currentPlayer, setCurrentPlayer] = useState(player);

  return(
    <header className= "Thead">
      <BrowserRouter>
      <nav className= "Navbar">
      <div className="Spacer"></div>
      <div className= "Logo"></div>
      <div className="Titems">
          <ul>
            <li className ="SearchButton">
              <button
                className="PushButton"
                onClick={() => nameSelect(currentPlayer)}>
                Search </button>
              <input
                type="text"
                className="PlayerSearch"
                placeholder="Search Player"
                value={currentPlayer}
                onChange={(event) => setCurrentPlayer(event.target.value)}
              />
            </li>
            <li><NavLink to="/NBA/ScoringSummary"> Scoring Summary </NavLink></li>
            <li><NavLink to="PlayerStats"> Player Stats </NavLink> </li>
            <li><NavLink to ="/NBA/Contract"> Contract </NavLink></li>
          </ul>
        </div>
      </nav>

      <div className="RoutingDiv" style={{
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        height: "485px",
      }}>
      <Route 
        path="/NBA/ScoringSummary"
        render = {() => <ScatterApp player={player}/>}
        />

      <Route 
        path="/NBA/PlayerStats"
        render = {() => <PlayerApp player={player} />}
        />

      <Route 
        path="/NBA/Contract"
        render = {() => <FirstPlot player={player}/>}
        />

      </div>

      </BrowserRouter>
    </header>
  )
}

export default ToolBar;
