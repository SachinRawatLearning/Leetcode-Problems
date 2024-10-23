import { useState, useRef } from "react";
import "./styles.css";

const App = () => {
  const [currentJump, setCurrentJump] = useState(1);
  const [currentContainer, setCurrentContainer] = useState(1);
  const icon = "🚔";
  let timer = useRef(null);

  const handleStartStop = () => {
    console.log(timer.current);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    } else {
      timer.current = setInterval(() => {
        setCurrentContainer((prevContainer) => {
          const newContainer = ((prevContainer + currentJump - 1) % 5) + 1;
          console.log(newContainer);
          return newContainer;
        });
      }, 1000);
    }
  };

  return (
    <div className="App">
      <div className="div-Container">
        <div className="text-Container">
          {currentContainer === 1 ? icon : ""}
        </div>
        <div className="text-Container">
          {currentContainer === 2 ? icon : ""}
        </div>
        <div className="text-Container">
          {currentContainer === 3 ? icon : ""}
        </div>
        <div className="text-Container">
          {currentContainer === 4 ? icon : ""}
        </div>
        <div className="text-Container">
          {currentContainer === 5 ? icon : ""}
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleStartStop}>Start/Stop</button>
        <button
          onClick={() => setCurrentJump((prevJump) => (prevJump % 5) + 1)}
        >
          Increment Jump
        </button>
        <button onClick={() => setCurrentJump(1)}>Reset Jump</button>
        <h4>Current Jump : {currentJump}</h4>
      </div>
    </div>
  );
};

export default App;
