import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";
import Video from '../src/assets/video2.mp4'


import Inicio1 from "./components/Inicio1.js";
import TimeLine from "./components/TimeLine.js";

import Areas from "./components/Areas.js";

import { PrincipalContainer, PrincipalBg, VideoBg } from '../src/components/Principal/PrincipalElements'
import "./css/inicio.css";

const anchors = ["", "", ""];

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }

  render() {
    return (
      <ReactFullpage
        anchors={anchors}
        navigation
        navigationTooltips={anchors}
        sectionsColor={["#0dbfff", "#620ce8", "#e8910c"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section">
                <video autoPlay loop muted
                style={{
                  position: "absolute",
                  width: "100%",
                  left: "50%",
                  top: "50%",
                  height: "100%",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "0",
                }}
                >
                  <source src={Video} type="video/mp4"/>
                </video>
                <Inicio1 />
              </div>
              <div className="section">
                <TimeLine />
              </div>
              <div className="section">
                <Areas />
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default FullpageWrapper;
