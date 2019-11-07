import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

class FirstPlot extends Component{

  state={
    ContractItems:[],
  }

  componentWillMount(){
    fetch("https://plopez9.herokuapp.com/NBA/Contracts/?format=json")
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
      var scale = 1000000
      var ylist = [contract.number_2019_20/scale, contract.number_2020_21/scale,
           contract.number_2021_22/scale, contract.number_2022_23/scale,
           contract.number_2023_24/scale];
      } else {
        ylist = [];
      }


      return(
        <div className="Contract-data" style={{
          width: "75%",
          height: "90%",
          transform:"translate(0%,5%)",
          background:"white",
        }}>
          <ReactEcharts

          style= {{
            height: "100%",
            width: "100%",
          }}

          option={{
            title: {
              text: player + "'s Contract Obligations",
              left:"center",
              top: "3%"
              },

            series:[{
              data: ylist,
              type: "bar"
              }],

            xAxis: {
              type: "category",
              data: ["2020", "2021", "2022", "2023", "2024", "2025"],
              name: "Year",
              nameLocation: "middle",
              nameTextStyle: {
                fontWeight: "bold",
                fontSize: "15",
              },
              nameGap: "25",
            },

            yAxis:{
              type: "value",
              min: "0",
              max:"50",
              name: "Salary in Millions",
              nameLocation: "middle",
              nameTextStyle: {
                fontWeight: "bold",
                fontSize:"15",
                padding: [0,0,20,0],
                },
            },

            tooltip:{
              show: "true",
              formatter: "{c}"
            }

          }} />
        </div>
      )
    }
}


export default FirstPlot;
