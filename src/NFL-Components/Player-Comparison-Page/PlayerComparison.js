import React, { useEffect, useState } from "react";
import ReactEcharts from "echarts-for-react";

const PlayerComparison = ({player1, player2}) => {
  const [weeklyStats, setWeeklyStats] = useState([])

  useEffect( () => {
    fetch("https://plopez9.herokuapp.com/NFL/NFLStats/?format=json")
    .then(response => response.json())
    .then(json => {
      setWeeklyStats(json)
      }
    );
  }, []);

  var firstStat = weeklyStats.filter(function(item){
    return item.name === player1
  });

  var secondStat = weeklyStats.filter(function(item){
    return item.name === player2
  });

  var player1Stat = [firstStat.map(item => [item.week, item.yh_points]),][0]
  var player2Stat = [secondStat.map(item => [item.week, item.yh_points]),][0]

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
          data:player1Stat,
          name: player1,
          color:"#0000FF",
        },

        {
          type: "line",
          symbolSize: 6,
          name: player2,
          data: player2Stat,
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

export default PlayerComparison;
