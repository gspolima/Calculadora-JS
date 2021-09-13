import Calculator from './Calculator.js';

export default class EquationManager {
    constructor() {
        this.#equation = new Array();
        this.#calc = new Calculator();
    }

    #equation;
    #calc;


    addNumber(value) {
        const elementIndex = this.#getLastElementIndex();
        const element = this.#getElement(elementIndex);

        if (this.#isNumber(element))
            this.#appendValueToNumber(elementIndex, value);
        else
            this.#pushNewValue(value);
    }

    addOperator(operator) { this.#pushNewValue(operator) }

    addUnaryOperator(operator) {
        const elementIndex = this.#getLastElementIndex();
        let element = this.#getElement(elementIndex);

        if (this.#isNumber(element))
            element = this.#castIntoNumber(element);
            if (operator === '%') {
                element = this.#calc.percent(element);
                this.#replaceElementValue(elementIndex, element);
            }
            if (operator === 'x²') {
                element = this.#calc.square(element);
                this.#replaceElementValue(elementIndex, element);
            }
    }

    removeElement() { this.#equation.pop(); }

    clearEquation() { this.#equation.splice(0, this.#getEquationLength()); }

    getEquation() { return this.#equation; }

    solve() {

        let equationLength = this.#getEquationLength();
        while (equationLength >= 3) {
            const operatorIndex = this.#findPrecendentOperator();
            const leftSideIndex = operatorIndex - 1;
            const rightSideIndex = operatorIndex + 1;

            const operator = this.#equation[operatorIndex];
            const leftSide = this.#castIntoNumber(this.#equation[leftSideIndex]);
            const rightSide = this.#castIntoNumber(this.#equation[rightSideIndex]);

            if (operator === '+') {
                const sum = this.#calc.sum(leftSide, rightSide);
                this.#reduceExpression(leftSideIndex, sum);
            }

            if (operator === '-') {
                const subtract = this.#calc.subtract(leftSide, rightSide);
                this.#reduceExpression(leftSideIndex, subtract);
            }

            if (operator === '*') {
                const times = this.#calc.multiply(leftSide, rightSide);
                this.#reduceExpression(leftSideIndex, times);
            }

            if (operator === '/') {
                const divide = this.#calc.divide(leftSide, rightSide);
                this.#reduceExpression(leftSideIndex, divide);
            }

            if (operator === '^') {
                const power = this.#calc.power(leftSide, rightSide);
                this.#reduceExpression(leftSideIndex, power);
            }

            equationLength = this.#getEquationLength();
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

    #isNumber(element) {
        return !isNaN(element);
    }

    #getLastElementIndex() {
        let equationLength = this.#getEquationLength();
        return equationLength - 1;
    }

    #getElement(index) {
        return this.#equation[index];
    }

    #pushNewValue(value) {
        this.#equation.push(value);
    }

    #appendValueToNumber(elementIndex, value) {
        this.#equation[elementIndex] += value;
    }

    #replaceElementValue(elementIndex, value) {
        this.#equation[elementIndex] = value;
    }

    #reduceExpression(startIndex, expressionResult) {
        this.#equation.splice(startIndex, 3, expressionResult);
    }

    #castIntoNumber(element) {
        return Number(element);
    }

    #getEquationLength() {
        return this.#equation.length;
    }
}