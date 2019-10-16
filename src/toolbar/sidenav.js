import React from "react";

import "./toolbar-css/side-nav.css"

import CloseButton  from "./close-button"

const Sidenav = props => {

    let navClasses="sidenav";

    if (props.show){
      navClasses="sidenav open"
    }
  return(
    <nav className= {navClasses}>
      <div className="sidediv">
        <CloseButton className="Button" click={props.SNClick}/>
          <ul>
            <li></li>
            <li> <a href="/"> Main Page </a> </li>
            <li>
              <Link to="/NBA/ScoringSummary"> NBA Dashboard </Link>
            </li>
            <li>
              <Link to="/NFL/Leaderboard"> NFL Dashboard </Link>
            </li>
            <li>
              <Link to="/MLB"> MLB Dashboard </Link>
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Sidenav;
