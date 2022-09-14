import React, { useState, useEffect } from "react";

import SecondPlot from "./Scatter_Chart"

const ScatterApp = ({ player }) => {
  const [summaryItems, setSummaryItems] = useState([]);

  useEffect( () => {
    fetch("https://plopez9.herokuapp.com/NBA/Summary/?format=json")
    .then(response => response.json())
    .then(json => {
      setSummaryItems(json)
      }
    )
    }, []);

  return(
    <div className="TopRow" style={{width:"80%"}}>
      <div className="testdiv">
        <div className="card  card-tasks" style={{
          transform:"translate(0%, 5%)",
          height:"40%",
        }}>
          <SecondPlot
          data={summaryItems}
          player={player}/>
        </div>
      </div>
    </div>
  );
}

export default ScatterApp
