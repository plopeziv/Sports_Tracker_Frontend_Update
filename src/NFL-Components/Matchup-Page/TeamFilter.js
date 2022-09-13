import React, { Component } from "react";

import "../NFL-css/TeamFilter.css"

class FilterButton extends Component{
  constructor(props){
    super(props);

    this.state = {
      displayMenu:false,
      currentTeam: this.props.currentTeam,
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  changeTeam(event){
    this.setState({currentTeam: event})
  }

  sendTeam(){
    this.props.select(this.state.currentTeam)
  }

  showDropdownMenu(event){
    event.preventDefault();
    this.setState({displayMenu: true}, () => {
      document.addEventListener("click", this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(event){
    this.setState({displayMenu:false}, () => {
      this.sendTeam(event);
      document.removeEventListener("click", this.hideDropdownMenu);
    });
  }

  render(){

    return(
      <div className="button" onClick={this.showDropdownMenu} style={{
        backgroundColor:"rgb(153, 163, 164)",
        width: "100px",
        position:"relative",
        height:"25px",
      }}>
        <div className="buttonHeader">
          vs {this.props.currentTeam}
        </div>

      {this.state.displayMenu ? (
        <div className="dropDiv" style={{
          backgroundColor:"rgb(229, 232, 232)",
          height:"75px",
          transform: "translate(0%, 70%)",
          position:"absolute"
        }}>
          <div className="dropContent">
            <ul style={{
              overflow:"auto",
              height:"75px",
              float:"left",
              direction:"rtl",
            }}>
              {this.props.teams.map(item=> <li
                onClick= {() => {this.changeTeam(item);}}>
                {item.toUpperCase()} </li>)}
            </ul>
          </div>
        </div>
      ):
      (
        null
      )
      }
      </div>
      )
    };
}

export default FilterButton;