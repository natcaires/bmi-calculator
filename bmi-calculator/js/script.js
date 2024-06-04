import { Modal } from './modal.js';
import { errorAlert } from './error-alert.js';
import { notANumber } from './util.js';

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");


form.onsubmit = function(event) {
  event.preventDefault()

  const weight = inputWeight.value;
  const height = inputHeight.value;

  const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

  if (weightOrHeightIsNotANumber) {
    errorAlert.open()
    return;
  };

  AlertError.close();

  const bmiResult = (weight / ((height / 100) ** 2)).toFixed(2);

  Modal.message.innerText = `Your BMI is ${bmiResult}`;

  Modal.open();
}

inputWeight.oninput = () => errorAlert.close();
inputHeight.oninput = () => errorAlert.close();