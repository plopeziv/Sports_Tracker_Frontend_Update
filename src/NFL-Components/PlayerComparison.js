import React, { Component } from "react";

class PlayerComparison extends Component{

  state = {
    WeeklyStats: [],
  };

  componentWillMount(){

    fetch("http://localhost:8000/NFL/NFLStats/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        WeeklyStats: json,
      })
    });
  };

  render(){
    var p1 = this.props.player1
    var p2 = this.props.player2

    var firstStat = this.state.WeeklyStats.filter(function(item){
      return item.name === p1
    });

    var secondStat = this.state.WeeklyStats.filter(function(item){
      return item.name === p2
    });

    return(
      <div className="pcContainer" style={{
        height: "75%",
      }}>
        Insert Plot Comparison
      </div>
    );
  }
}

export default PlayerComparison;
