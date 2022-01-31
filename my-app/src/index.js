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
      ["North Carolina", "Raleigh"],
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

    // RANDOMIZAH

    this.arr = [];
    while (this.arr.length < 3) {
      this.r = Math.floor(Math.random() * this.states.length) + 1;
      if (this.arr.indexOf(this.r) === -1) this.arr.push(this.r);
    }
    console.log(this.arr);
  }

  render() {
    return (
      <div className="game">
        {this.states.map((state) => {
          if (state === this.states[this.arr[0]]) {
            return (
              <button key={state} onClick={() => console.log(state[1])}>
                {state[0]}
              </button>
            );
          } else if (state === this.states[this.arr[1]]) {
            return (
              <button key={state} onClick={() => console.log(state[1])}>
                {state[0]}
              </button>
            );
          } else if (state === this.states[this.arr[2]]) {
            return (
              <button key={state} onClick={() => console.log(state[1])}>
                {state[0]}
              </button>
            );
          }
        })}
      </div>
    );
  }
}

// FUNCTIONS

ReactDOM.render(<Game />, document.getElementById("root"));
