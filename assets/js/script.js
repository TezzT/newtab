function updateTimeAndDate() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const period = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const time = `${hours}:${minutes}:${seconds}`;

  const dateMain = now.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const dateDay = now.toLocaleDateString("en-US", { weekday: "long" });

  document.getElementById("clock").textContent = time;
  document.getElementById("period").textContent = period;
  document.getElementById("date-main").textContent = dateMain;
  document.getElementById("date-day").textContent = dateDay;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();

function applyTheme() {
  const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const body = document.body;

  if (isDark) {
    body.classList.remove("light-mode");
  } else {
    body.classList.add("light-mode");
  }
}

applyTheme();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applyTheme);

const textDiv = document.getElementById("text-content");

const savedText = localStorage.getItem("text-content");
if (savedText !== null) {
  textDiv.innerText = savedText;
}

textDiv.addEventListener("input", () => {
  localStorage.setItem("text-content", textDiv.innerText);
});

