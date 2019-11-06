import React, { Component } from "react";



class SecondPlot extends Component{

  render(){
    var player =this.props.player
    var data = this.props.data

    var pdata = data.filter(function(item){
      return item.player.toLowerCase() === player.toLowerCase()
    });


      return(
        <div> Insert Scatter Plot </div> 
      )
    }



}

export default SecondPlot;
