import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Game extends React.Component {
  constructor() {
    super();
    this.states = [
      ["Alabama", "Montgomery"],
      ["Alaska", "Juneau"],
      ["Arizona", "Phoenix"],
      ["Arkansas", "Little Rock"],
      ["California", "Sacramento"],
      ["Colorado", "Denver"],
      ["Connecticut", "Hartford"],
      ["Delaware", "Dover"],
      ["Florida", "Tallahassee"],
      ["Georgia", "Atlanta"],
      ["Hawaii", "Honolulu"],
      ["Idaho", "Boise"],
      ["Illinois", "Springfield"],
      ["Indiana", "Indianapolis"],
      ["Iowa", "Des Moines"],
      ["Kansas", "Topeka"],
      ["Kentucky", "Frankfort"],
      ["Louisiana", "Baton Rouge"],
      ["Maine", "Augusta"],
      ["Maryland", "Annapolis"],
      ["Massachusetts", "Boston"],
      ["Michigan", "Lansing"],
      ["Minnesota", "Saint Paul"],
      ["Mississippi", "Jackson"],
      ["Missouri", "Jefferson City"],
      ["Montana", "Helena"],
      ["Nebraska", "Lincoln"],
      ["Nevada", "Carson City"],
      ["New Hampshire", "Concord"],
      ["New Jersey", "Trenton"],
      ["New Mexico", "Santa Fe"],
      ["New York", "Albany"],
      ["North Carolina", "raleigh"],
      ["North Dakota", "Bismarck"],
      ["Ohio", "Columbus"],
      ["Oklahoma", "Oklahoma"],
      ["Oregon", "Salem"],
      ["Pennsylvania", "Harrisburg"],
      ["Rhode Island", "Providence"],
      ["South Carolina", "Columbia"],
      ["South Dakota", "Pierre"],
      ["Tennessee", "Nashville"],
      ["Texas", "Austin"],
      ["Utah", "Salt Lake City"],
      ["Vermont", "Montpelier"],
      ["Virginia", "Richmond"],
      ["Washington", "Olympia"],
      ["West Virginia", "Charleston"],
      ["Wisconson", "Madison"],
      ["Wyoming", "Cheyenne"],
    ];

    this.rightState =
      this.states[Math.floor(Math.random() * this.states.length)];

    this.wrongState =
      this.states[Math.floor(Math.random() * this.states.length)];

    this.wrongState2 =
      this.states[Math.floor(Math.random() * this.states.length)];
  }

  render() {
    console.log(this.wrongState);
    return (
      <div className="game">
        <h1>What is the capital of {this.rightState[0]}?</h1>
        <button onClick={() => console.log("yeah")}>
          {this.rightState[1]}
        </button>
        <button onClick={() => console.log("no")}>{this.wrongState[1]}</button>
        <button onClick={() => console.log("no")}>{this.wrongState2[1]}</button>
      </div>
    );
  }
}

// FUNCTIONS

ReactDOM.render(<Game />, document.getElementById("root"));
