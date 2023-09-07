const day = document.getElementById("day");
const time = document.getElementById("time");
const date = new Date();
const currentDay = date.getDay();

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

day.innerText = dayNames[currentDay];

setInterval(() => {
    time.innerText = Date.now();
}, 1);
