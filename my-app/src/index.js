import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Game extends React.Component {
  render() {
    let stateArray = returnState();

    return (
      <div className="game">
        What is the capital city of {stateArray[0]}?<br />
        <button onClick={() => console.log(stateArray[1])}>Capital</button>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

function returnState() {
  const states = [
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

  let randomState = states[Math.floor(Math.random() * states.length)];

  return randomState;
}
