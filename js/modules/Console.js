import OutputFormatter from "./OutputFormatter.js";

export default class Console {
    constructor(equationManager) {
        this.#equationTextBox = document.getElementsByClassName('section top')[0];
        this.#resultTextBox = document.getElementsByClassName('section bottom')[0];

        this.#formatter = new OutputFormatter(equationManager);
    }

    #formatter;
    #equationTextBox;
    #resultTextBox;

    showEquation() {
        this.#equationTextBox.innerHTML = this.#formatter.getEquationString();
    }

    showResult() {
        this.#resultTextBox.innerHTML = this.#formatter.formatEquationResult();
    }

    updateResultTextBox() {
        this.#resultTextBox.innerHTML = this.#formatter.getEquationString();
    }
}