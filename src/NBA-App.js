import React, { Component } from "react";

import "./NBA-App.css";

import ToolBar from "./NBA-Components/NBAtoolbar";

class NBAApp extends Component {

  state = {
    Player:"James Harden",
    SummaryItems: [],
    ContractItems: [],
    InfoItems:[],
  };


  PlayerSelect(input){
    this.setState({
      Player: input
    });
  }

  componentWillMount(){
    fetch("https://plopez9.herokuapp.com/NBA/Summary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        SummaryItems: json,
      })
    });

    fetch("https://plopez9.herokuapp.com/NBA/PlayerInfo/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        InfoItems: json,
      })
    });

    fetch("https://plopez9.herokuapp.com/NBA/Contracts/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        ContractItems: json,
      })
    });
  };


  render(){
    console.log(this.state.Player)
    return(
      <div className="NBA_App">

      <ToolBar nameSelect={this.PlayerSelect.bind(this)}
      player={this.state.Player}/>


      </div>
    );
  }
}

export default NBAApp
