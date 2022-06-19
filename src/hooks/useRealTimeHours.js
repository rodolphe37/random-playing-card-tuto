import { useState } from "react";

const useRealTimeHours = () => {
  const [time, setTime] = useState(undefined);
  function refreshTime() {
    let d = new Date();
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    if (hr < 10) {
      hr = "0" + hr;
    }
    if (min < 10) {
      min = "0" + min;
    }
    if (sec < 10) {
      sec = "0" + sec;
    }
    var formattedString = `${hr}:${min}:${sec}`;
    setTime(formattedString);
  }

  setInterval(refreshTime, 1000);

  return { time };
};

export default useRealTimeHours;
