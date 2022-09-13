import React from "react";

const Calculator = ({pinfo, oppTeam}) => {

  const score1 = pinfo.map(item => item.average_points_scored)
  const std1 = pinfo.map(item=> item.std)

  const score2 = oppTeam.map(item => item.points_allowed)
  const std2 = oppTeam.map(item=> item.std)
  const delta = Math.max(score1, score2)-Math.min(score1,score2)
  var ratio = 1

  if (score1 > score2){
    ratio = std2/std1
  } else{
    ratio = std1/std2
  }


  return(
    <div className="topHalf">
      <h1> Matchup Rating </h1>

      <h2> {(Math.min(score1, score2) + delta * (1/(1+Math.exp(-4*(ratio-1))))).toFixed(2)}
      </h2>
    </div>
  );
}


export default Calculator;
