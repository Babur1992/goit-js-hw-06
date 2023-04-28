let counterValue = 0;
const counter = document.querySelector("#value");
const incrementButton = document.querySelector("[data-action=increment]");
const decrementButton = document.querySelector("[data-action=decrement]");

incrementButton.addEventListener("click", () => {
  counterValue++;
  counter.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue--;
  counter.textContent = counterValue;
});
