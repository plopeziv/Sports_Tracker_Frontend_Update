import React from "react";

import "./Main-Page-Components/Main-Page.css";

import basketball from "./Main-Page-Components/images/Basketball.png";
import football from "./Main-Page-Components/images/Football.jpg";
import baseball from "./Main-Page-Components/images/Baseball.png";
import resume from "./Main-Page-Components/images/Resume.png";

const MainPage = () =>  (
      <div className="Main_Page">
        <div className = "MainContainers">

          <div className = "App_Card">
            <div className ="Icon_Container">
              <a href="http://localhost:3000/NBA/ScoringSummary">
                <img src={basketball} alt='' style={{
                  height:"auto",
                  width:"50%"}}/>
              </a>
              <h2> NBA App </h2>
              </div>
          </div>

          <div className= "App_Card">
            <div className ="Icon_Container">
              <a href="http://localhost:3000/NFL/Leaderboard">
                <img src={football} alt='' style={{
                  height:"auto",
                  width:"50%"}}/>
              </a>
              <h2> NFL App </h2>
            </div>
          </div>

          <div className="App_Card">
            <div className ="Icon_Container">
              <a href="http://localhost:3000/MLB">
                <img src={baseball} alt='' style={{
                  height:"auto",
                  width:"50%"}}/>
              </a>
              <h2> MLB App </h2>
            </div>
          </div>

          <div className="App_Card">
            <div className ="Icon_Container">
              <img src={resume} alt='' style={{
                height:"auto",
                width:"50%"}}/>
              <h2> Resume </h2>
            </div>
          </div>

        </div>
      </div>
);

export default MainPage
