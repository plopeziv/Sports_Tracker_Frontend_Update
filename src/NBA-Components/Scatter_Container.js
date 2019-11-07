import React, { Component } from "react";

import SecondPlot from "./Scatter_Chart"

class ScatterApp extends Component {

  state={
    SummaryItems:[],
  };

  componentWillMount(){
    fetch("https://plopez9.herokuapp.com/NBA/Summary/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        SummaryItems: json,
      })
    });
  }

  render(){

    return(
      <div className="TopRow" style={{width:"80%"}}>
        <div className="testdiv">
          <div className="card  card-tasks" style={{
            transform:"translate(0%, 5%)",
            height:"40%",
          }}>
            <SecondPlot
            data={this.state.SummaryItems}
            player={this.props.player}/>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatterApp
