const incrementBtn = document.querySelector(".inc-Btn");
const decrementBtn = document.querySelector(".dec-Btn");
const resultBlock = document.querySelector(".result-block");

let count = 0;

const updateCounter = () => {
resultBlock.textContent = count;
}

const incrementFunction = () => {
count++;
updateCounter();
}

const decrementFunction = () => {
count--;
updateCounter();
}

incrementBtn.addEventListener("click", incrementFunction);
decrementBtn.addEventListener("click", decrementFunction);

console.log(count);
