import React, { Component } from "react";
import ReactEcharts from "echarts-for-react";


class SecondPlot extends Component{

  render(){
    var player =this.props.player
    var data = this.props.data

    var pdata = data.filter(function(item){
      return item.player.toLowerCase() === player.toLowerCase()
    });

    console.log(data)


      return(
        <div>
          <ReactEcharts option={{
            xAxis: {
              type: "value",
              data: data.map(item => item.mp)
            },

            yAxis:{
              type: "value",
              data: data.map(item => item.pts),
            },

            series:[{
              type: "scatter"
            }]
          }} />
        </div>
      )
    }



}

export default SecondPlot;
