import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";


class SecondPlot extends Component{

  render(){
    var player =this.props.player
    var data = this.props.data

    var pdata = data.filter(function(item){
      return item.player.toLowerCase() === player.toLowerCase()
    });

    var dataArray = [data.map(item =>[item.mp, item.pts, item.player]),][0]
    var playerArray = [pdata.map(item => [item.mp, item.pts, item.player],)][0]


      return(
        <div style ={{
        }}>
          <ReactEcharts
          style ={{
            height:"450px",
            width:"100%",
          }}

          option={{
            title: {
              text: "2020 Scoring Summary",
              left:"center",
              top: "3%",
            },

            series:[{
              type: "scatter",
              symbolSize:6,
              data:dataArray,
              color:"#0000FF",
            },

            {
              type: "scatter",
              symbolSize: 20,
              data: playerArray,
              color:"#FF0000",
            }
          ],

          xAxis: {
            name: "Minutes Played",
            nameLocation: "middle",
            nameTextStyle: {
              fontWeight: "bold",
              fontSize: "15",
            },
            nameGap: "25",
          },

          yAxis:{
            name: "Points Scored",
            nameLocation: "middle",
            nameTextStyle: {
              fontWeight: "bold",
              fontSize:"15",
              padding: [0,0,20,0],
              },
          },
          tooltip:{
            formatter: function (param) {
              return param.data[2];
            }
          },
          }} />
        </div>
      )
    }



}

export default SecondPlot;
