import React, { useState, useEffect } from "react";

import "../NFL-css/Matchup.css"

import Calculator from "./MatchupCalculator"
import FilterButton from "./TeamFilter"

import avatar from "../images/default-avatar.png";
import helmet from "../images/Generic-Helmet.png";


const MatchupCard = ({player, stats}) => {
  const [team, setTeam] = useState('chi');
  const [defense, setDefense] = useState(['chi']);

  useEffect ( () => {
    fetch("https://plopez9.herokuapp.com/NFL/DefensiveSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      setDefense(json)
      }
    )
    }, []);

  let oppTeam = []
  let teamList =[]

  const pinfo = stats.filter((item) =>{
    return item.name === player
  })

  oppTeam = Array.isArray(defense) ? defense.filter((item)=>{
    return (item.pos === pinfo.map(item => item.pos)[0]
    && item.oppt === team)
  }): []

  
  teamList = Array.isArray(defense) ? [...new Set (defense.map(item=>
  item.oppt))]: []

  return(
    <div className="PlayerCard">
      <Calculator pinfo={pinfo} oppTeam={oppTeam}/>
      <div className="bottomHalf">
        <div className="playerStat">

          <img src={avatar} alt="" style={{
            height:"68%",
            marginBottom:"4px",
          }}/>

          <h5>{player}</h5>

          <div className="StatCard">
            <div className="column1">
              <div>Pos: {pinfo.map(item => item.pos)}</div>
              <div> GP: {pinfo.map(item => item.gp)}</div>
            </div>

            <div className="column2">
              <div>Avg Pts: {pinfo.map(item => item.average_points_scored)}</div>
              <div> Std: {pinfo.map(item=> item.std)}</div>
            </div>
          </div>
        </div>

        <div className="dStat">
        <img src={helmet} alt="" style={{
          marginTop:"15px",
          height:"60%",
          width:"98%",
          marginBottom:"9px",
        }}/>

        <div className="CardHeading" style={{
          display:"inline-block",
          height:"30px",
        }}>
          <div className="filterContainer" style={{
            transform:"translate(-7%,-140%)"
          }}>
            <h5>
              <FilterButton
              currentTeam = {team.toUpperCase()}
              teams = {teamList}
              select = {setTeam}
              />
            </h5>
          </div>
        </div>

        <div className="StatCard">
          <div className="column1">
            <div>Pos: Def</div>
            <div> GP: {oppTeam.map(item => item.gp)}</div>
          </div>
          <div className="column2">
            <div>Pts Alwd: {oppTeam.map(item => item.points_allowed)}</div>
            <div> Std: {oppTeam.map(item=> item.std)}</div>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}


export default MatchupCard;
