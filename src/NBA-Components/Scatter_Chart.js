import React, { Component } from "react";

//import axios from "axios";


class SecondPlot extends Component{

  render(){
    var player =this.props.player
    var data = this.props.data

    var pdata = data.filter(function(item){
      return item.player.toLowerCase() === player.toLowerCase()
    });


      return(
        <div> Table Goes Here </div>
      )
    }



}

export default SecondPlot;
