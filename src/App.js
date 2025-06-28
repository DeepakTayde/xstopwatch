import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime=(seconds)=>{
    const mins = Math.floor(seconds/60);
    const secs = String(seconds%60).padStart(2,"0");
    return `${mins}:${secs}`;
  }

  const handleStartStop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      setIsRunning(true);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTimer(0);
    setIsRunning(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Stopwatch</h2>
        <h3>
          {" "}
          Time: {formatTime(timer)}
        </h3>
        <div>
          <button type="button" onClick={handleStartStop}>
            {isRunning ? "Stop" : "Start"}
          </button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
