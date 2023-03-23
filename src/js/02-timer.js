import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix, { Notify } from 'notiflix';


const input = document.querySelector("#datetime-picker");
const button = document.querySelector("button");
const TimerDays = document.querySelector("span[data-days]");
const TimerHours = document.querySelector("span[data-hours]");
const TimerMinutes = document.querySelector("span[data-minutes]");
const TimerSeconds = document.querySelector("span[data-seconds]");

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const selectedDate =selectedDates[0];
      if (selectedDate.getTime() <= Date.now()){
        button.disabled = true;
        Notify.failure("Please choose a date in the future");
        return;
      };
      button.disabled = false;
    },
  };

  function convertMs(ms) {
    // Number of milliseconds per unit of time
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
    
    // Remaining days
      const days = Math.floor(ms / day);
    // Remaining hours
      const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
      const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
      const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
      return { days, hours, minutes, seconds };
    }
    
    function addLeadingZero(value){
        return `${value}`.padStart(2, '0');
      };

  button.addEventListener("click", event => {
    event.preventDefault();

    const inputValue = new Date(input.value);
    let interval;
    interval = setInterval(() => {
        const timeLeft = inputValue.getTime() - Date.now();
        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        };

        const {days, hours, minutes, seconds} = convertMs(timeLeft);
        TimerDays.textContent = addLeadingZero(days);
        TimerHours.textContent = addLeadingZero(hours);
        TimerMinutes.textContent = addLeadingZero(minutes);
        TimerSeconds.textContent = addLeadingZero(seconds);
    },1000);
    button.disabled = true;
  });

  flatpickr(input, options);
  button.disabled = true;


//Style

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";

input.style.width = "450px";
input.style.color = "red";
input.style.fontSize = "50px";
input.style.padding = "20px";
input.style.textAlign = "center";
input.style.backgroundColor = "yellow";
input.style.borderColor = "red";
input.style.borderRadius = "40px";
input.style.borderWidth = "10px";
input.style.marginBottom = "30px";

button.style.backgroundColor = "red";
button.style.color = "yellow";
button.style.width = "200px";
button.style.fontSize = "50px";
button.style.borderColor = "yellow";
button.style.borderRadius = "40px";
button.style.borderWidth = "8px";
button.style.marginBottom = "20px";

const timer = document.querySelector(".timer");
timer.style.display = "flex";
timer.style.flexDirection = "row";

const fields = Array.from(document.querySelectorAll(".field"));

for (const field of fields){
    field.style.marginRight = "5px";
    field.style.padding = "10px";
    field.style.width = "170px";
    field.style.color = "red";
    field.style.fontSize = "25px";
    field.style.backgroundColor = "yellow";
    field.style.borderColor = "green";
    field.style.borderRadius = "40px";
    field.style.borderWidth = "4px";
    field.style.textAlign = "center";
};
