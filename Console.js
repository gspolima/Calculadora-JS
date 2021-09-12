import OutputFormatter from "./OutputFormatter.js";

export default class Console {
    constructor(equationTextBox, resultTextBox) {
        if (equationTextBox instanceof Element )
            this.#equationTextBox = equationTextBox;
        else
            throw new Error(`${equationTextBox} is not an Element`);
        if (resultTextBox instanceof Element)
            this.#resultTextBox = resultTextBox;
        else
            throw new Error(`${resultTextBox} is not an Element`);

        this.#formatter = new OutputFormatter();
    }

    #formatter;
    #equationTextBox;
    #resultTextBox;
    #equationString = () => this.#formatter.getEquationString();
    #equationResult = () => this.#formatter.formatEquationResult();


    showEquation() {
        if (typeof this.#equationString === 'string')
            this.#equationTextBox.innerHTML = this.#equationString;
        else
            throw new Error(`[${this.updateResultTextBox}] - ${this.#equationString} is not a valid string`);
    }

    showResult() {
        if (typeof this.#equationResult === 'number')
            this.#resultTextBox.innerHTML = this.#equationResult;
        else
            throw new Error(`${this.#equationResult} is not a valid number`);
    }

    updateResultTextBox() {
        if (typeof this.#equationString === 'string')
            this.#resultTextBox = this.#equationString;
        else
            throw new Error(`[${this.updateResultTextBox}] - ${this.#equationString} is not a valid string`);
    }
}