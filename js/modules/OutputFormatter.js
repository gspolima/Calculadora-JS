import EquationManager from "./EquationManager.js";

export default class OutputFormatter {

    constructor(equationManager) {
        if (equationManager instanceof EquationManager)
            this.#equationManager = equationManager;
    }

    #equationManager;
    #result;

    getEquationString() {
        const equation = this.#equationManager.getEquation();
        return equation.join(' ');
    }

    formatEquationResult() {
        this.#result = this.#equationManager.solve();
        if (!Number.isInteger(this.#result))
            return Number(this.#result).toFixed(2);
        else
            return this.#result;
    }
}