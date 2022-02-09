import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { useState } from "react";

let states = [
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
  ["Oklahoma", "Oklahoma City"],
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

function Game() {
  const [score, setCount] = useState(0);
  let randomStates = [];
  let randomNum;
  let randomNum2 = Math.floor(Math.random() * randomStates.length) + 0;

  while (randomStates.length < 3) {
    randomNum = Math.floor(Math.random() * states.length) + 0;
    randomStates.indexOf(randomNum) === -1 && randomStates.push(randomNum);
  }

  let correctState = states[randomStates[randomNum2]];
  let handleClick = (elm, correctState) => {
    elm === correctState ? Correct() : Incorrect();
  };

  let Correct = () => {
    setCount(score + 1);
  };

  let Incorrect = () => {
    setCount(score - 1);
  };

  return (
    <>
      <h1>What is the capital of {correctState[0]}?</h1>
      <h2>Score: {score}</h2>
      {randomStates.map((int) => (
        <button
          key={states[int]}
          onClick={() => handleClick(states[int], correctState)}
        >
          {states[int][1]}
        </button>
      ))}
    </>
  );
}

export default function GideonSundback() {
  return (
    <div className="game">
      <Game />
    </div>
  );
}

ReactDOM.render(GideonSundback(), document.getElementById("root"));
