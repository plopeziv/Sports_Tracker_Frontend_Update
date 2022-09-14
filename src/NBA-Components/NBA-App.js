import React, { useState } from "react";

import "./NBA-App.css";

import ToolBar from "./NBAtoolbar";

const NBAApp = () => {
  const [player, setPlayer] = useState("James Harden");
  
  return(
    <div className="NBA_App">
      <ToolBar nameSelect={setPlayer} player={player}/>
    </div>
  );
}

export default NBAApp
