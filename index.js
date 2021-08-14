let min = document.getElementById("min");
let sec = document.getElementById("sec");
let msec = document.getElementById("msec");
let tempSec = "00";
let tempMin = "00";
let tempmsec = "00";

let startVar = document.getElementById("start");
let resetVar = document.getElementById("reset");

let m = 0;
let s = 0;
let ms = 0;

let flag;

let lap = 0;
let printArea = document.getElementById("printArea");

const runSec = () => {
  if (!flag) {
    return;
  }
  if (ms > 59) {
    ms = 0;
    s = s + 1;
    if (s > 59) {
      s = 0;
      m = m + 1;

      if (m > 59) {
        s = 0;
        m = 0;
        ms = 0;
        tempmsec = "00";
        tempMin = "00";
        tempSec = "00";
        msec.innerHTML = tempmsec;
        min.innerHTML = tempMin;
        sec.innerHTML = tempSec;
        return;
      }
      if (m < 10) {
        tempMin = "0" + m.toString();
      } else {
        tempMin = m.toString();
      }
    }

    if (s < 10) {
      tempSec = "0" + s.toString();
    } else {
      tempSec = s.toString();
    }
  }

  if (ms < 10) {
    tempmsec = "0" + ms.toString();
  } else {
    tempmsec = ms.toString();
  }
  ms = ms + 1;

  msec.innerHTML = tempmsec;
  min.innerHTML = tempMin;
  sec.innerHTML = tempSec;

  setTimeout(() => {
    runSec();
  }, 20);
};

const start = () => {
  flag = true;
  startVar.setAttribute("disabled", "");
  runSec();
};

const reset = () => {
  flag = false;
  tempSec = "00";
  tempMin = "00";
  tempmsec = "00";
  m = 0;
  s = 0;
  ms = 0;
  msec.innerHTML = tempmsec;
  min.innerHTML = tempMin;
  sec.innerHTML = tempSec;
  startVar.removeAttribute("disabled", "");

  printArea.innerHTML = null;
  lap = 0;
};

const stop = () => {
    flag = false;
    startVar.removeAttribute("disabled", "");
    lap = lap +1;
    let presentTime = tempMin + ":" +tempSec + ":" +tempmsec;

    if(presentTime==="00:00:00") {
        return;
    }

    let divTag = document.createElement("div");
    divTag.setAttribute("class","line");

    let p1 = document.createElement("p");
    p1.setAttribute("class","lap");

    p1.innerHTML = "Lap " + lap;

    let p2 = document.createElement("p");
    p2.setAttribute("class", "currentTime");

    p2.innerHTML = presentTime;

    divTag.appendChild(p1);
    divTag.appendChild(p2);

    printArea.appendChild(divTag);
}