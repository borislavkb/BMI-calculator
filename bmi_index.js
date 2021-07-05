const formElement = document.querySelector(".bmi-form");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const bmiMessage = document.querySelector(".result");

const username = document.querySelector("#name");

const userdata = [];

formElement.addEventListener("submit", (event) => {
  const bmi = (weightInput.value / heightInput.value ** 2) * 10000;
  event.preventDefault();
  bmiMessage.textContent = "Your BMI is:" + bmi.toFixed(2);
  if (+bmi < 18.5 || bmi > 30) {
    bmiMessage.style.color = "red";
  } else if (18.5 < +bmi <= 25) {
    bmiMessage.style.color = "green";
  } else if (25 < +bmi < 30) {
    bmiMessage.style.color = "orange";
  }

  const userName = username.value;
  const userWeight = weight.value;
  const userHeight = height.value;

  console.log(userName, userWeight, userHeight, bmi.toFixed(2));

  username.value = document.createElement("h3");

  console.log(username.value);

  formElement.reset();
});
