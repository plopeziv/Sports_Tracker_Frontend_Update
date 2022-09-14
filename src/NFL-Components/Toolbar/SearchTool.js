import React, { useState } from "react";

const SearchTool = ({ setPlayerName }) => {
  const [player, setPlayer] = useState([]);

  console.log(player)

  return(
      <div className="P1D">
        <button
          className="PushButton"
          onClick = {() => setPlayerName(player)}>
          Search
        </button>

        <input
          type="text"
          className="PlayerSearch"
          placeholder="Search Player"
          value={player}
          onChange={(event) => setPlayer(event.target.value)}
          />
        </div>
  );
}

export default SearchTool;
