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
              NBA Dashboard
            </li>
            <li>
              NFL Dashboard
            </li>
            <li>
              MLB Dashboard
            </li>
          </ul>
        </div>
    </nav>
  );
};

export default Sidenav;
