const formElement = document.querySelector(".bmi-form");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const bmiMessage = document.querySelector(".result");

formElement.addEventListener("submit", (event) => {
  const bmi = (weightInput.value / heightInput.value ** 2) * 10000;
  event.preventDefault();
  bmiMessage.textContent = "Your BMI is:" + bmi;
  if (+bmi < 18.5 || bmi > 30) {
    bmiMessage.style.color = "red";
  } else if (18.5 < +bmi <= 25) {
    bmiMessage.style.color = "green";
  } else if (25 < +bmi < 30) {
    bmiMessage.style.color = "orange";
  }
  formElement.reset();
});
