import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

import Inicio1 from "./components/Inicio1.js";
import TimeLine from "./components/TimeLine.js";

import Areas from "./components/Areas.js";

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
