import EquationManager from "./EquationManager.js";

export default class OutputFormatter {

    constructor() {
        this.#equationManager = new EquationManager();
    }

    #equationManager;
    #equation = () => this.#equationManager.getEquation();
    #result = () =>  this.#equationManager.solve();

    getEquationString() {
        return this.#equation.join(' ');
    }

    formatEquationResult() {
        if (!Number.isInteger(this.#result))
            return Number(this.#result).toFixed(2) 
        else
            return this.#result;
    }
}