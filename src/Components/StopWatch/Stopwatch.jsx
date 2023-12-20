import React, { useState } from "react";
import "./Stopwatch.css";

function Stopwatch() {
  const [timer, settimer] = useState(0);
  const [isStart, setisStart] = useState(true);
  const [isStop, setisStop] = useState(false);

  const starter = () => {
    window.mytimer = setInterval(() => {
      settimer((prev) => prev + 1);
    }, 500);
    settimer(0);
    setisStart(false);
    setisStop(true);
  };

  const stoper = () => {
    clearInterval(window.mytimer);
  };

  const reseter = () => {
    clearInterval(window.mytimer);
    setisStart(true);
    settimer("");
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 my-4">
      <h1 className="fw-bolder text-bg-warning">STOPWATCH</h1>
      <div className="timers d-flex justify-content-between align-items-center my-3 text-bg-primary">
        <h2 className="mx-2">Timer :</h2>
        <h2 className="mx-2">
          {Math.trunc(timer / 60)}:{String(timer % 60).padStart(2,'0')}
        </h2>
      </div>
        <div className="d-flex">
      {isStart ? (
        <button
          className="mx-2 rounded-3 p-2 fw-bolder text-bg-success"
          onClick={starter}
        >
          Start
        </button>
      ) : (
        <button
          className="mx-2 rounded-3 p-2 fw-bolder text-bg-success"
          onClick={stoper}
        >
          Stop
        </button>
      )}
</div>
      <div className="buttons d-flex justify-content-center align-items-center">
        <button
          className="mx-2 rounded-3 p-2 fw-bolder text-bg-success"
          onClick={reseter}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
