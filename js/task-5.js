const color = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const body = document.querySelector("body");

function getRandomHexColor() {
  return `#${Math.floor(Math.random()*16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const handleClick = () => {
    const randomColor = getRandomHexColor();
    body.style.backgroundColor = randomColor;
    color.textContent = randomColor;
}
btn.addEventListener('click', handleClick);