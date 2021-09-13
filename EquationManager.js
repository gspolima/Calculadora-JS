import Calculator from './Calculator.js';

export default class EquationManager {
    constructor() {
        this.#equation = new Array();
        this.#calc = new Calculator();
    }

    #equation;
    #equationLength;
    #calc;


    addNumber(value) {
        this.#equationLength = this.#equation.length;
        const lastElementIndex = this.#equationLength - 1;
        let lastElement = this.#equation[lastElementIndex];
        const hasComma = this.#equation.lastIndexOf(',');

        if (this.#isInteger(lastElement) || hasComma !== -1)
            this.#equation[lastElementIndex] = lastElement += value;
        else
            this.#equation.push(value);
    }

    addOperator(operator) { this.#equation.push(operator); }

    removeElement() { this.#equation.pop(); }

    clearEquation() { this.#equation.splice(0, this.#equationLength); }

    getEquation() { return this.#equation; }

    solve() {
        this.#equationLength = this.#equation.length;
        while (this.#equationLength >= 3) {
            const operatorIndex = this.#findPrecendentOperator();
            const leftSideIndex = operatorIndex - 1;
            const rightSideIndex = operatorIndex + 1;

            const operator = this.#equation[operatorIndex];
            const leftSide = this.#equation[leftSideIndex];
            const rightSide = this.#equation[rightSideIndex];

            if (operator === '+') {

                const sum = this.#calc.sum(Number(leftSide), Number(rightSide));
                this.#equation.splice(leftSideIndex, 3, sum);
            }

            this.#equationLength = this.#equation.length;
        }

        return this.#equation[0];
    }

    #findPrecendentOperator() {
        const operators = ['^', '*', '/', '+', '-'];
        for (let op of operators) {
            if (this.#equation.includes(op)) {
                const opIndex = this.#equation.indexOf(op);
                return opIndex;
            }
        }
    }

    #isInteger(value) {
        return Number.isInteger(value);
    }
}