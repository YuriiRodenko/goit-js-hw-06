function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// body
const bodyEl = document.querySelector("body");

// button
const changeColorEl = document.querySelector(".change-color");

// text
const colorEl = document.querySelector(".color");

changeColorEl.addEventListener("click", changeBgColorRandom);

function changeBgColorRandom() {
  colorEl.textContent = `${getRandomHexColor()}`;
  bodyEl.style.backgroundColor = `${colorEl.textContent}`;
}
