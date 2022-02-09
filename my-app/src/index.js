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

function AmericaBaby() {
  const [score, setCount] = useState(0);
  let randomStates = [];
  let randomNum;

  while (randomStates.length < 3) {
    randomNum = Math.floor(Math.random() * states.length) + 0;
    randomStates.indexOf(randomNum) === -1 && randomStates.push(randomNum);
  }

  let randomNum2 = Math.floor(Math.random() * randomStates.length) + 0;
  let correctState = states[randomStates[randomNum2]];

  function handleClick(elm, correctState) {
    elm === correctState ? Correct() : Incorrect();
  }

  function Correct() {
    setCount(score + 1);
  }

  function Incorrect() {
    setCount(score - 1);
  }

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
    <>
      <div className="game">
        <AmericaBaby />
      </div>
      <div className="correct invisible">
        <img
          src={require("./img/correct.gif")}
          height={209}
          width={372}
          alt={"correct"}
        />
      </div>
      <div className="incorrect invisible">
        <img
          src={require("./img/incorrect.gif")}
          height={209}
          width={372}
          alt={"correct"}
        />
      </div>
    </>
  );
}

ReactDOM.render(GideonSundback(), document.getElementById("root"));
