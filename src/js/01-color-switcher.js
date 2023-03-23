const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const body = document.querySelector("body");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  let switcher = null;


btnStart.addEventListener("click", () =>{
btnStart.disabled = true;
btnStop.disabled = false;
switcher = setInterval(() => {
body.style.backgroundColor = getRandomHexColor();
},1000);
});


btnStop.addEventListener("click", () => {
btnStart.disabled = false;
btnStop.disabled = true;
clearInterval(switcher);
});