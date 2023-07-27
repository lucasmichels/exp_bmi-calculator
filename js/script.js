import { Modal } from './modal.js';
import { alertError } from './alert-error.js'
import { notNumber, calcIMC } from './utils.js';


const form = document.querySelector('form')
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")


form.onsubmit = function (event) {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

    if (weightOrHeightIsNotANumber) {
        alertError.open()
        return;
    }

    alertError.close()

    const result = calcIMC(weight, height)
    displayResultMessage(result)
}

inputWeight.oninput = function ()  {
    alertError.close()
}

inputHeight.oninput = function ()  {
    alertError.close()
}

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}