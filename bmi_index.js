const formElement = document.querySelector(".bmi-form");

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#weight");

const bmiMessage = document.querySelector(".result");

const username = document.querySelector("#name");

const userdata = [];

const olElement = document.querySelector("ol");

formElement.addEventListener("submit", (event) => {
  const bmi = (weightInput.value / heightInput.value ** 2) * 10000;
  event.preventDefault();
  bmiMessage.textContent = "Your BMI is:" + bmi.toFixed(2);
  if (bmi < 18.5 || bmi > 30) {
    bmiMessage.style.color = "red";
  } else if (18.5 < bmi <= 25) {
    bmiMessage.style.color = "green";
  } else if (25 < bmi < 30) {
    bmiMessage.style.color = "orange";
  }

  const bmiNotification = 
  
    if (bmi > 18.5 && bmi <= 25) {
      bmiNotification.textContent = "normal";
    } else if (bmi < 18.5) {
      bmiNotification.textContent = "underweight";
    } else if (bmi > 25 && bmi < 30) {
      bmiNotification.textContent = "obese";
    } else {
      bmiNotification.textContent = "overweight";
    }
  

  const userName = username.value;

  const liElement = document.createElement("li");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn--delete");
  deleteButton.addEventListener("click", () => {
    liElement.remove();
  });

  liElement.textContent =
    userName + " " + bmi.toFixed(2) + " " + bmiNotification;
  liElement.append(deleteButton);
  console.log(userName + " " + bmi.toFixed(2));

  olElement.append(liElement);
  formElement.reset();
});
