import React, { useState, useEffect } from "react";

import "./bootstrap.min.css";
import"./NBA-Component-css/Player_Container.css";

import avatar from "./images/default-avatar.png";


const PlayerApp = ({player}) => {
  const [summaryItems, setSummaryItems] = useState([]);
  const [infoItems, setInfoItems] = useState([]);

  useEffect(() => {
    fetch("https://plopez9.herokuapp.com/NBA/Summary/?format=json")
    .then(response => response.json())
    .then(json => {
      setSummaryItems(json)
      });

    fetch("https://plopez9.herokuapp.com/NBA/PlayerInfo/?format=json")
    .then(response => response.json())
    .then(json => {
      setInfoItems(json)
      });
  }, []);

  const pInfo = infoItems.filter(function(item){
    return item.player === player
  })

  const stats = summaryItems.filter(function(item){
    return item.player === player
  })

  return(
    <div className="Player-data" style={{
      height: "340px",
    }}>
      <div className="card">

          <div className="Player_Row" >
            <div className="Player_Column">
              <div className="card-header">
                <img src={avatar} alt="" />
              </div>
            </div>

            <div className="Player_Column_Right">
              <div className="Player_Info">
                <div className="Prow">
                  {pInfo.map(item=>
                    <h2> {item.player} </h2>
                  )}
                </div>
                <div className="Player_Info_Table">
                  <div className="Prow">
                    {pInfo.map(item=>
                      <p> {item.college} </p>
                    )}
                  </div>

                  <div className="Prow">
                    {pInfo.map(item=>
                      <a>Position: {item.pos} </a>
                    )}
                  </div>
                  <div className="Prow">
                    {pInfo.map(item=>
                      <a>Ht: {item.ht},</a>
                    )}
                    {pInfo.map(item=>
                      <a> Wt: {item.wt}lbs </a>
                    )}
                  </div>
                  <div className="Prow">
                    {pInfo.map(item=>
                      <a>Experience: {item.exp} yrs </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-body">
            <div className="row">
              <div className="table-responsive">
                <table className="table">
                  <thead className=" text-primary">
                    <tr>
                    <th> Year </th>
                    <th> G </th>
                    <th> GS </th>
                    <th> MP </th>
                    <th> Ft% </th>
                    <th> 2P% </th>
                    <th> 3P% </th>
                    <th> Tov </th>
                    <th> Blk </th>
                    <th> Stl </th>
                    <th> Reb </th>
                    <th> Ast </th>
                    <th> Pts </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      {stats.map(item=>
                        <td> {item.year} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.g} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.gs} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.mp} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.ft_field} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.number_2p_field} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.number_3p_field} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.tov} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.blk} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.stl} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.trb} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.ast} </td>
                      )}
                      {stats.map(item=>
                        <td> {item.pts} </td>
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default PlayerApp
