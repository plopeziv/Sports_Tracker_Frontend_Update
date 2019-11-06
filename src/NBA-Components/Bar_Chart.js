import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

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
          transform:"translate(0%,5%)",
          background:"white",
        }}>
        <ReactEcharts option={{
          xAxis: {
            type: "category",
            data: ["2020", "2021", "2022", "2023", "2024", "2025"]
          },

          yAxis:{
            type: "value"
          },

          series:[{
            data: ylist,
            type: "bar"
          }]
        }} />
        </div>
      )
    }
}


export default FirstPlot;
