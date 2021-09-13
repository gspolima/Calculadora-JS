import InputHandler from './InputHandler.js';

const inputHandler = new InputHandler();

// lista dos botões da calculadora
const buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    let event = button.event;

    button.addEventListener('click', function (event) {
        const element = event.target;
        inputHandler.handle(element);
    });
}