export default class OutputFormatter {

    getEquationString(equation) { return equation.join(' '); }

    formatEquationResult(result) {
        if (!Number.isInteger(result))
            return Number(result).toFixed(2);

        return result;
    }
}