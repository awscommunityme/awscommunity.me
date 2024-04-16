const button = document.getElementById("custom-event-day");
const eventDayElement = document.querySelector(".event-day");

function changeEventDayColor() {
    eventDayElement.style.color = "#232F3E";
}

button.addEventListener("mouseover", changeEventDayColor);

// Optional: Change color back on mouseout
button.addEventListener("mouseout", () => {
    eventDayElement.style.color = "#e47911";
});
