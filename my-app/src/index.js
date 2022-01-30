import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Dom extends React.Component {
  render() {
    return <button>Yes</button>;
  }
}

// ========================================

ReactDOM.render(<Dom />, document.getElementById("root"));
