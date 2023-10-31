import { useEffect, useState } from "react";

const Timer = () => {
  const [presentDate, setPresentDate] = useState();

  const [daysLeft, setDaysLeft] = useState();
  const [hrsLeft, setHrsLeft] = useState();
  const [minutesLeft, setMinutesLeft] = useState();
  const [secondsLeft, setSecondsLeft] = useState();

  const countdown = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const newYear = new Date(currentYear + 1, 0, 1);
    const timeRemaining = newYear - now;

    setDaysLeft(Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
    setHrsLeft(
      Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    setMinutesLeft(
      Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60))
    );
    setSecondsLeft(Math.floor((timeRemaining % (1000 * 60)) / 1000));
  };


  useEffect(() => {
    const timerInterval = setInterval(countdown, 1000);
    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <TimerView
      daysLeft={daysLeft}
      hrsLeft={hrsLeft}
      minutesLeft={minutesLeft}
      secondsLeft={secondsLeft}
    />
  );
};
const TimerView = ({ daysLeft, hrsLeft, minutesLeft, secondsLeft }) => {
  return (
    <div className="container1">
      <div className="numbers1">
        <div>
          <span id="days">{daysLeft}</span>
        </div>
        <div className="description1">Days</div>
      </div>
      <div className="numbers1">
        <div>
          <span id="hours">{hrsLeft}</span>
        </div>
        <div className="description1">Hrs</div>
      </div>
      <div className="numbers1">
        <div>
          <span id="minutes"> {minutesLeft} </span>
        </div>
        <div className="description1">Min</div>
      </div>
      <div className="numbers1">
        <div>
          <span id="seconds">{secondsLeft}</span>
        </div>
        <div className="description1">Sec</div>
      </div>
    </div>
  );
};

export default Timer;
