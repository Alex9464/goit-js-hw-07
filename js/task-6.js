const boxes = document.querySelector("#boxes");
const input = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
createBtn.addEventListener('click', () => {
    const amount = Number(input.value);
    if (amount < 1 || amount > 100) {
      alert('Please enter a number between 1 and 100');
      return;
    }
    createBoxes(amount);
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    boxes.innerHTML = "";
    const fragment = document.createDocumentFragment();
    let size = 30;
    for (let i = 0; i < amount; i += 1, size += 10) {
        const createBoxes = document.createElement("div");
        createBoxes.style.width = size + 'px';
        createBoxes.style.height = size + 'px';
        createBoxes.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(createBoxes);
    }
    boxes.appendChild(fragment);
}

destroyBtn.addEventListener("click", () => {
    boxes.innerHTML = "";
    input.value = "";
})
