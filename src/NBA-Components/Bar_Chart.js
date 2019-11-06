import React, { Component } from "react";


class FirstPlot extends Component{

  state={
    ContractItems:[],
  }

  componentWillMount(){
    fetch("http://localhost:8000/NBA/Contracts/?format=json")
    .then(response => response.json())
    .then(json => {
      this.setState({
        ContractItems: json,
      })
    });
  }

  render(){
    var player = this.props.player
    var data = this.state.ContractItems

    var contract = data.filter(function(item){
      return item.player === player
    })[0];

    if (contract !== undefined) {
      var ylist = [contract.number_2019_20, contract.number_2020_21,
           contract.number_2021_22, contract.number_2022_23, contract.number_2023_24];
      } else {
        ylist = [];
      }


      return(
        <div className="Contract-data" style={{
          width: "70%",
          height: "90%",
          transform:"translate(0%,5%)"
        }}>
          Insert Contract Bar Chart
        </div>
      )
    }
}


export default FirstPlot;
