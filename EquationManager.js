export default class EquationManager {
    constructor() {
        this.#equation = new Array();
    }

    #equation;
    #equationLength = this.#equation.length;


    addNumber(value) {
        const lastElementIndex = this.#equationLength - 1;
        let lastElement = this.#equation[lastElementIndex];
        const hasComma = this.#equation.lastIndexOf(',');

        if (Number.isInteger(lastElement) || hasComma !== -1)
            this.#equation[lastElementIndex] = lastElement += value;
        else
            this.#equation.push(value);
    }

    addOperator(operator) { this.#equation.push(operator); }

    removeElement() { this.#equation.pop(); }

    clearEquation() { this.#equation.splice(0, this.#equationLength); }

    getEquation() { return this.#equation; }
}