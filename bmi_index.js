const formElement = document.querySelector(".bmi-form");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const bmiMessage = document.querySelector(".result");

const button = document.querySelector("button");

// function calculate(heightInput, weightInput) {
//   let result = heightInput.value / weightInput.value ** 2;
//   console.log(result);
// }

button.addEventListener("click", () => {
  const result = +heightInput.value / weightInput.value ** 2;
  console.log(result);

  console.log("clicked");
});
