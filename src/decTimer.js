import React from 'react'

import { useState, useEffect } from "react";
function DecTimer() {

  const [timerValue, setTimerValue] = useState(10);

  let timer = null;
  function runTimer() {
    timer = setInterval(() => {
      if (timerValue > 0) {
        setTimerValue((v) => v - 1);
      }
    }, 1000);
  }
  function reset() {
    if (timerValue > 0) {
      clearInterval(timer);
      setTimerValue(10);
      // runTimer();
    }
  }
  useEffect(() => {
    runTimer();
    return () => {
        console.log('im calleddddd')
      clearInterval(timer);
    };
  }, [timerValue]);
  return (
    <>
      <div className="App">
        <h1>Timer</h1>
        {timerValue}
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}
   

export default DecTimer
