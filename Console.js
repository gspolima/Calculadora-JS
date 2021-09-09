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
    }

    #equationTextBox;
    #resultTextBox;


    showEquation(equationString) {
        if (typeof equationString === 'string')
            this.#equationTextBox.innerHTML = equationString;
        else
            throw new Error(`[${this.updateResultTextBox}] - ${equationString} is not a valid string`);
    }

    showResult(result) {
        if (typeof result === 'number')
            this.#resultTextBox.innerHTML = result;
        else
            throw new Error(`${result} is not a valid number`);
    }

    updateResultTextBox(equationString) {
        if (typeof equationString === 'string')
            this.#resultTextBox = equationString;
        else
            throw new Error(`[${this.updateResultTextBox}] - ${equationString} is not a valid string`);
    }
}