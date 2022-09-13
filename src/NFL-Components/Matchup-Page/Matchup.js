import React, { useEffect, useState } from "react";

import MatchupCard from "./MatchupCard"

const Matchup = ({player1, player2}) => {
  const [yearlyStats, setYearlyStats] = useState([])

  useEffect( () => {
    fetch("https://plopez9.herokuapp.com/NFL/NFLSummary/?format=json")
    .then(response => response.json())
    .then(json => {
      setYearlyStats(json)
    });
  })

  return(
    <div className="displayCard" style={{
      height: "420px",
      width:"100%",
      display:"flex",
      justifyContent:"space-around",
    }}>
      <MatchupCard player = {player1}
      stats={yearlyStats}/>
      <MatchupCard player= {player2}
      stats={yearlyStats}/>
    </div>

  );
}


export default Matchup;
