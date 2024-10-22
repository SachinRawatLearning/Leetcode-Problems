import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [currentJump, setCurrentJump] = useState(1);
  const [dummyTextClass, setDummyTextClass] = useState(1);
  const [dummyData, setDummyData] = useState("Dummy");
  const intervalRef = useRef(null);

  const handleStartStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(() => {
        setDummyTextClass((prevClass) => {
          const nextClass = ((prevClass + currentJump - 1) % 5) + 1;
          return nextClass;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="App">
      <div>
        <textarea
          className="1"
          value={dummyTextClass === 1 ? dummyData : ""}
          readOnly
        ></textarea>
        <textarea
          className="2"
          value={dummyTextClass === 2 ? dummyData : ""}
          readOnly
        ></textarea>
        <textarea
          className="3"
          value={dummyTextClass === 3 ? dummyData : ""}
          readOnly
        ></textarea>
        <textarea
          className="4"
          value={dummyTextClass === 4 ? dummyData : ""}
          readOnly
        ></textarea>
        <textarea
          className="5"
          value={dummyTextClass === 5 ? dummyData : ""}
          readOnly
        ></textarea>
      </div>
      <button onClick={handleStartStop}>Start/Stop</button>
      <button onClick={() => setCurrentJump((prev) => (prev % 5) + 1)}>
        Increase Jump
      </button>
      <button onClick={() => setCurrentJump(1)}>Reset Jump</button>
      <p>Current Jump: {currentJump}</p>
    </div>
  );
}
