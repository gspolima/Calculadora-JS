import EquationManager from "./EquationManager.js";
import Console from "./Console.js";

export default class InputHandler {
    constructor() {
        this.#equationManager = new EquationManager();
        this.#console = new Console(this.#equationManager);
    }

    #equationManager;
    #console;

    handle(targetElement) {
        const value = targetElement.innerHTML;

        // tipo de botão: número, operador, símbolo, etc
        const className = targetElement.attributes['class'].value;

        if (className === 'number') 
            this.#equationManager.addNumber(value);

        if (className === 'operator')
            this.#equationManager.addOperator(value);

        if (className === 'erase')
            this.#equationManager.removeElement();

        if (className === 'clear')
            this.#equationManager.clearEquation();

        this.#console.updateResultTextBox();

        if (className === 'equals') {
            this.#console.showEquation();
            this.#console.showResult();
        }
    }
}