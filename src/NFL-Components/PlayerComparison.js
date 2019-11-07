import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";

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

    console.log(p1)

    var firstStat = this.state.WeeklyStats.filter(function(item){
      return item.name === p1
    });

    var secondStat = this.state.WeeklyStats.filter(function(item){
      return item.name === p2
    });

    var player1 = [firstStat.map(item => [item.week, item.yh_points]),][0]
    var player2 = [secondStat.map(item => [item.week, item.yh_points]),][0]

    return(
      <div className="pcContainer" style={{
        height: "75%",
        width: "70%",
        background:"white",
        opacity: "0.94",
        display: "inline-block"
      }}>
        <ReactEcharts
        style ={{
          height:"450px",
          width:"107%",
        }}

        option={{
          title: {
            text: "Week by Week Comparison",
            left:"center",
            top: "3%",
          },

          series:[
            {
            type: "line",
            symbolSize:6,
            data:player1,
            name: p1,
            color:"#0000FF",
          },

          {
            type: "line",
            symbolSize: 6,
            name: p2,
            data: player2,
            color:"#FF0000",
          },
        ],

        xAxis: {
          name: "NFL Week",
          min:"0",
          max:"17",
          splitNumber:"17",
          nameLocation: "middle",
          nameTextStyle: {
            fontWeight: "bold",
            fontSize: "15",
          },
          nameGap: "25",
        },

        yAxis:{
          name: "Points Scored",
          min:"0",
          max:"50",
          nameLocation: "middle",
          nameTextStyle: {
            fontWeight: "bold",
            fontSize:"15",
            padding: [0,0,20,0],
            },
        },

        legend:{
          orient:"vertical",
          top: "2%",
          right: "10%",
          backgroundColor: "rgb(247, 249, 249)",
          borderColor:"rgb(229, 232, 232)",
          borderWidth:"2"
        },

        tooltip:{
          
        },
        }} />
      </div>
    );
  }
}

export default PlayerComparison;
